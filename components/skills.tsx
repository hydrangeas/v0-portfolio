"use client";

import { motion } from "framer-motion";
import {
  Code,
  Database,
  Globe,
  Layout,
  Server,
  Smartphone,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// スキルデータの型定義
interface Skill {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// アニメーション設定
const fadeInAnimation = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

// スキルデータ
const skills: Skill[] = [
  {
    icon: <Code className="h-10 w-10 text-primary" />,
    title: "フロントエンド開発",
    description: "React, Next.js, TypeScript, Tailwind CSS",
  },
  {
    icon: <Server className="h-10 w-10 text-primary" />,
    title: "バックエンド開発",
    description: "Node.js, Express, Python, Django, FastAPI",
  },
  {
    icon: <Database className="h-10 w-10 text-primary" />,
    title: "データベース",
    description: "PostgreSQL, MongoDB, Redis, Prisma",
  },
  {
    icon: <Layout className="h-10 w-10 text-primary" />,
    title: "UI/UXデザイン",
    description: "Figma, Adobe XD, ユーザー中心設計",
  },
  {
    icon: <Globe className="h-10 w-10 text-primary" />,
    title: "DevOps",
    description: "Docker, Kubernetes, CI/CD, AWS, Vercel",
  },
  {
    icon: <Smartphone className="h-10 w-10 text-primary" />,
    title: "モバイル開発",
    description: "React Native, Flutter",
  },
];

export default function Skills() {
  return (
    <div className="space-y-8">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          スキル
        </h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          私が習得している技術スタックとスキルセット
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            {...fadeInAnimation}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full transition-all hover:shadow-md bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                {skill.icon}
                <CardTitle>{skill.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {skill.description}
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
