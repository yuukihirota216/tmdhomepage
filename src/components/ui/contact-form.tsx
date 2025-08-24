'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import type { ContactFormData } from '@/types';

const contactSchema = z.object({
  name: z.string().min(1, '氏名を入力してください'),
  company: z.string().optional(),
  email: z.string().email('有効なメールアドレスを入力してください'),
  phone: z.string().optional(),
  category: z.string().min(1, 'お問い合わせ種別を選択してください'),
  message: z.string().min(10, 'お問い合わせ内容は10文字以上入力してください'),
});

interface ContactFormProps {
  initialSubject?: string;
  initialPosition?: string;
}

export function ContactForm({ initialSubject, initialPosition }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      category: initialSubject || '',
      message: initialPosition ? `応募職種: ${initialPosition}\n\n` : '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'メール送信に失敗しました');
      }
      
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert(error instanceof Error ? error.message : 'エラーが発生しました');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Card className="shadow-lg border-0">
        <CardContent className="p-8 text-center">
          <div className="text-4xl mb-4">✅</div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            お問い合わせありがとうございます
          </h3>
          <p className="text-gray-600 mb-6">
            お問い合わせいただいた内容を確認し、
            営業日24時間以内にご返信いたします。
          </p>
          <Button 
            onClick={() => setIsSubmitted(false)} 
            variant="outline"
          >
            新しいお問い合わせ
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="shadow-lg border-0">
      <CardHeader>
        <h3 className="text-2xl font-bold text-gray-900 text-center">
          お問い合わせフォーム
        </h3>
        <p className="text-gray-600 text-center">
          生成AIの活用について、どんな小さなことでもお気軽にご相談ください。
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="name">氏名 *</Label>
              <Input
                id="name"
                {...register('name')}
                className="mt-1"
                placeholder="山田 太郎"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="company">会社名・組織名</Label>
              <Input
                id="company"
                {...register('company')}
                className="mt-1"
                placeholder="株式会社サンプル"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="email">メールアドレス *</Label>
              <Input
                id="email"
                type="email"
                {...register('email')}
                className="mt-1"
                placeholder="example@company.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="phone">電話番号</Label>
              <Input
                id="phone"
                type="tel"
                {...register('phone')}
                className="mt-1"
                placeholder="090-1234-5678"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="category">お問い合わせ種別 *</Label>
            <Select
              value={watch('category')}
              onValueChange={(value) => setValue('category', value)}
            >
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="選択してください" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="サービスについて">サービスについて</SelectItem>
                <SelectItem value="研修について">研修について</SelectItem>
                <SelectItem value="採用について">採用について</SelectItem>
                <SelectItem value="取材・メディア関連">取材・メディア関連</SelectItem>
                <SelectItem value="その他">その他</SelectItem>
              </SelectContent>
            </Select>
            {errors.category && (
              <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="message">お問い合わせ内容 *</Label>
            <Textarea
              id="message"
              {...register('message')}
              className="mt-1"
              rows={6}
              placeholder="具体的なご相談内容をご記入ください"
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
            )}
          </div>

          <div className="pt-4">
            <Button
              type="submit"
              className="w-full nexus-button-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? '送信中...' : 'お問い合わせを送信'}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}