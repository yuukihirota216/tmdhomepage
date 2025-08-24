import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(1, '氏名を入力してください'),
  company: z.string().optional(),
  email: z.string().email('有効なメールアドレスを入力してください'),
  phone: z.string().optional(),
  category: z.string().min(1, 'お問い合わせ種別を選択してください'),
  message: z.string().min(10, 'お問い合わせ内容は10文字以上入力してください'),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // バリデーション
    const validatedData = contactSchema.parse(body);
    
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

    const { data, error } = await resend.emails.send({
      from: 'TMD Corporate Site <contact@creation-laboratory.com>',
      to: ['yuukihirota@creation-laboratory.com'],
      subject: `【お問い合わせ】${validatedData.category} - ${validatedData.name}様`,
      text: emailContent,
    });

    if (error) {
      console.error('Email sending error:', error);
      return NextResponse.json(
        { error: 'メール送信に失敗しました' },
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

    await resend.emails.send({
      from: 'TMD Corporate Site <contact@creation-laboratory.com>',
      to: [validatedData.email],
      subject: '【自動返信】お問い合わせありがとうございます - 有限会社TMD',
      text: autoReplyContent,
    });

    return NextResponse.json(
      { message: 'お問い合わせを送信しました' },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Contact form error:', error);
    
    if (error instanceof z.ZodError) {
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