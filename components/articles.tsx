"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

// 記事データの型定義
interface Article {
  title: string;
  url: string;
  date: string;
  platform: "zenn" | "qiita";
  likes?: number;
}

// アニメーション設定
const fadeInAnimation = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

// プラットフォーム固有のスタイルを取得するヘルパー関数
const getPlatformStyle = (platform: "zenn" | "qiita") => {
  return platform === "zenn"
    ? "bg-[#3EA8FF] text-white"
    : "bg-[#55C500] text-white";
};

// プラットフォーム名を取得するヘルパー関数
const getPlatformName = (platform: "zenn" | "qiita") => {
  return platform === "zenn" ? "Zenn" : "Qiita";
};

// サンプルの記事データ
const articles: Article[] = [
  {
    title: "Next.js 13 App RouterとServer Componentsの実践的な使い方",
    url: "https://zenn.dev/yourusername/articles/nextjs13-app-router",
    date: "2024-02-15",
    platform: "zenn",
    likes: 150,
  },
  {
    title: "TypeScriptの型システムを完全に理解する",
    url: "https://qiita.com/yourusername/items/typescript-types",
    date: "2024-01-20",
    platform: "qiita",
    likes: 234,
  },
  {
    title: "Reactのパフォーマンス最適化テクニック",
    url: "https://zenn.dev/yourusername/articles/react-performance",
    date: "2024-01-05",
    platform: "zenn",
    likes: 89,
  },
  {
    title: "モダンなCSSアーキテクチャの設計手法",
    url: "https://qiita.com/yourusername/items/css-architecture",
    date: "2023-12-25",
    platform: "qiita",
    likes: 167,
  },
];

export default function Articles() {
  return (
    <div className="space-y-8">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          技術記事
        </h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          Zenn、Qiitaで公開している技術記事
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {articles.map((article, index) => (
          <motion.div
            key={index}
            {...fadeInAnimation}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              <Card className="h-full overflow-hidden transition-all duration-200 hover:shadow-md hover:translate-y-[-2px]">
                <CardHeader className="space-y-1">
                  <div className="flex items-center justify-between">
                    <Badge
                      variant="secondary"
                      className={getPlatformStyle(article.platform)}
                    >
                      {getPlatformName(article.platform)}
                    </Badge>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {new Date(article.date).toLocaleDateString("ja-JP")}
                    </div>
                  </div>
                  <CardTitle className="line-clamp-2 text-lg">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="flex items-center justify-end gap-1">
                    {article.likes} LGTM
                  </CardDescription>
                </CardContent>
              </Card>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
