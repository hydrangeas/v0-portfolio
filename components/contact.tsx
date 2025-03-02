"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

// フォームデータの型定義
interface FormData {
  name: string;
  email: string;
  message: string;
}

// アニメーション設定
const fadeInLeft = {
  initial: { opacity: 0, x: -20 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const fadeInRight = {
  initial: { opacity: 0, x: 20 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // ここに実際のフォーム送信ロジックを追加
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <div className="space-y-8">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          お問い合わせ
        </h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          プロジェクトについてのご相談やお問い合わせはこちらから
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-2">
        <motion.div {...fadeInLeft}>
          <Card className="h-full bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800">
            <CardHeader>
              <CardTitle>連絡先情報</CardTitle>
              <CardDescription>
                以下の方法でもご連絡いただけます
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800">
                  <Mail className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                </div>
                <div>
                  <p className="font-medium">メール</p>
                  <p className="text-sm text-muted-foreground">
                    your.email@example.com
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800">
                  <Phone className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                </div>
                <div>
                  <p className="font-medium">電話</p>
                  <p className="text-sm text-muted-foreground">
                    +81 90-1234-5678
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800">
                  <MapPin className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                </div>
                <div>
                  <p className="font-medium">所在地</p>
                  <p className="text-sm text-muted-foreground">東京都渋谷区</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div {...fadeInRight}>
          <Card className="bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800">
            <CardHeader>
              <CardTitle>メッセージを送る</CardTitle>
              <CardDescription>
                以下のフォームからお気軽にご連絡ください
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="flex h-full flex-col items-center justify-center space-y-4 py-8">
                  <div className="rounded-full bg-gray-200 dark:bg-gray-800 p-3">
                    <Mail className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                  </div>
                  <h3 className="text-xl font-semibold">
                    メッセージを送信しました
                  </h3>
                  <p className="text-center text-muted-foreground">
                    お問い合わせありがとうございます。できるだけ早くご返信いたします。
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-gray-800 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600"
                  >
                    新しいメッセージを送る
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">お名前</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">メールアドレス</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">メッセージ</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gray-800 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "送信中..." : "送信する"}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
