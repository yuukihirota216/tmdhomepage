import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

// 開発環境かどうかを判定
const isDevelopment = process.env.NODE_ENV === 'development';

// 本番環境でのみResendを初期化
const resend = !isDevelopment ? new Resend(process.env.RESEND_API_KEY) : null;

const contactSchema = z.object({
  name: z.string().min(1, '氏名を入力してください'),
  company: z.string().optional(),
  email: z.string().email('有効なメールアドレスを入力してください'),
  phone: z.string().optional(),
  category: z.string().min(1, 'お問い合わせ種別を選択してください'),
  message: z.string().min(10, 'お問い合わせ内容は10文字以上入力してください'),
});

// メールデータの型定義
interface EmailData {
  from: string;
  to: string[];
  replyTo?: string[];
  subject: string;
  text: string;
}

// 開発環境用の模擬メール送信機能
function sendMockEmail(emailData: EmailData) {
  console.log('\n=== 模擬メール送信 ===');
  console.log('From:', emailData.from);
  console.log('To:', emailData.to);
  console.log('Subject:', emailData.subject);
  console.log('Content:');
  console.log(emailData.text);
  console.log('========================\n');
  return { error: null };
}

export async function POST(request: NextRequest) {
  try {
    console.log('Contact form submission started');
    console.log('Environment:', process.env.NODE_ENV);
    console.log('Is development:', isDevelopment);
    console.log('RESEND_API_KEY configured:', !!process.env.RESEND_API_KEY);

    const body = await request.json();
    console.log('Request body received');
    
    // バリデーション
    const validatedData = contactSchema.parse(body);
    console.log('Data validation successful');
    
    // メール送信
    const emailContent = `
新しいお問い合わせが届きました。

【お客様情報】
氏名: ${validatedData.name}
会社名: ${validatedData.company || '未入力'}
メールアドレス: ${validatedData.email}
電話番号: ${validatedData.phone || '未入力'}
お問い合わせ種別: ${validatedData.category}

【お問い合わせ内容】
${validatedData.message}

---
このメールは TMD Corporate Site のお問い合わせフォームから送信されました。
`;

    const emailData: EmailData = {
      from: 'TMD Corporate Site <contact@creation-laboratory.com>',
      to: ['yuukihirota@creation-laboratory.com'],
      replyTo: [validatedData.email],
      subject: `【お問い合わせ】${validatedData.category} - ${validatedData.name}様`,
      text: emailContent,
    };

    let error = null;

    if (isDevelopment) {
      // 開発環境では模擬メール送信
      console.log('Using mock email sending (development mode)');
      const result = sendMockEmail(emailData);
      error = result.error;
    } else {
      // 本番環境では実際のメール送信
      console.log('Using real email sending (production mode)');
      
      if (!process.env.RESEND_API_KEY) {
        console.error('RESEND_API_KEY is not configured in production');
        return NextResponse.json(
          { error: 'メール送信機能が設定されていません。管理者にお問い合わせください。' },
          { status: 500 }
        );
      }

      try {
        console.log('Attempting to send email via Resend...');
        const result = await resend!.emails.send(emailData);
        error = result.error;
        console.log('Resend response:', result);
        
        if (result.data) {
          console.log('Email sent successfully with ID:', result.data.id);
        }
      } catch (resendError) {
        console.error('Resend API error:', resendError);
        error = resendError;
      }
    }

    if (error) {
      console.error('Email sending error:', error);
      return NextResponse.json(
        { error: 'メール送信に失敗しました。しばらく時間をおいて再度お試しください。' },
        { status: 500 }
      );
    }

    // お客様への自動返信メール
    const autoReplyContent = `
${validatedData.name} 様

この度は、有限会社TMD（creationラボ）にお問い合わせいただき、誠にありがとうございます。

以下の内容でお問い合わせを承りました。
担当者より営業日24時間以内にご返信いたします。

【お問い合わせ内容】
お問い合わせ種別: ${validatedData.category}
内容: ${validatedData.message}

何かご不明な点がございましたら、お気軽にお問い合わせください。

---
有限会社TMD（creationラボ）
Email: yuukihirota@creation-laboratory.com
`;

    const autoReplyData: EmailData = {
      from: 'TMD Corporate Site <contact@creation-laboratory.com>',
      to: [validatedData.email],
      subject: '【自動返信】お問い合わせありがとうございます - 有限会社TMD',
      text: autoReplyContent,
    };

    if (isDevelopment) {
      // 開発環境では模擬メール送信
      console.log('Sending mock auto-reply email');
      sendMockEmail(autoReplyData);
    } else {
      // 本番環境では実際のメール送信
      try {
        console.log('Sending auto-reply email...');
        await resend!.emails.send(autoReplyData);
        console.log('Auto-reply email sent successfully');
      } catch (autoReplyError) {
        console.error('Auto-reply email error:', autoReplyError);
        // 自動返信の失敗は全体の成功を阻害しない
      }
    }

    console.log('Contact form submission completed successfully');
    return NextResponse.json(
      { message: 'お問い合わせを送信しました' },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Contact form error:', error);
    
    if (error instanceof z.ZodError) {
      console.error('Validation errors:', error.errors);
      return NextResponse.json(
        { error: '入力データが無効です', details: error.errors },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { error: 'サーバーエラーが発生しました' },
      { status: 500 }
    );
  }
} 