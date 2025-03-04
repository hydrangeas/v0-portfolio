import { Github, Linkedin, Twitter } from "lucide-react";
import { ReactNode } from "react";

// ソーシャルメディアリンクの型定義
export interface SocialLink {
  href: string;
  icon: ReactNode;
  label: string;
}

// ソーシャルメディアリンク
export const socialLinks: SocialLink[] = [
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
export const socialButtonClass =
  "text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-50 dark:hover:bg-gray-800";