"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";

// ソーシャルメディアリンクの型定義
interface SocialLink {
  href: string;
  icon: React.ReactNode;
  label: string;
}

// アニメーション設定
const fadeInAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

// ソーシャルメディアリンク
const socialLinks: SocialLink[] = [
  {
    href: "https://github.com/yourusername",
    icon: <Github className="h-5 w-5" />,
    label: "GitHub",
  },
  {
    href: "https://linkedin.com/in/yourusername",
    icon: <Linkedin className="h-5 w-5" />,
    label: "LinkedIn",
  },
  {
    href: "https://twitter.com/yourusername",
    icon: <Twitter className="h-5 w-5" />,
    label: "Twitter",
  },
];

// ソーシャルメディアボタンの共通クラス
const socialButtonClass =
  "text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-50 dark:hover:bg-gray-800";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 text-center md:gap-12">
      <motion.div
        {...fadeInAnimation}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          こんにちは、<span className="text-primary">開発者名</span>です
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          フルスタック開発者として、革新的なウェブアプリケーションを構築しています。
          モダンな技術を駆使して、ユーザー体験を向上させるソリューションを提供します。
        </p>
      </motion.div>

      <motion.div
        {...fadeInAnimation}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <Button asChild className="bg-gray-800 hover:bg-gray-700">
          <a href="#skills">
            スキルを見る
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
        <Button
          variant="outline"
          asChild
          className="border-gray-300 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
        >
          <a href="#contact">お問い合わせ</a>
        </Button>
      </motion.div>

      <motion.div
        {...fadeInAnimation}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex items-center justify-center gap-4"
      >
        {socialLinks.map((link, index) => (
          <Button
            key={index}
            variant="ghost"
            size="icon"
            asChild
            className={socialButtonClass}
          >
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          </Button>
        ))}
      </motion.div>
    </div>
  );
}
