"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Calendar, Briefcase, Award } from "lucide-react";

// 経験データの型定義
interface Experience {
  position: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
  icon: React.ReactNode;
}

// アニメーション設定
const fadeInAnimation = {
  initial: { opacity: 0, x: -20 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
};

// 経験データ
const experiences: Experience[] = [
  {
    position: "シニアフロントエンド開発者",
    company: "テック企業株式会社",
    period: "2021年 - 現在",
    description:
      "大規模なウェブアプリケーションの開発とメンテナンス。React、Next.js、TypeScriptを使用したフロントエンド開発。チームリーダーとして5人のデベロッパーを指導。",
    skills: ["React", "Next.js", "TypeScript", "Redux", "GraphQL"],
    icon: <Briefcase className="h-5 w-5" />,
  },
  {
    position: "フルスタック開発者",
    company: "スタートアップ株式会社",
    period: "2018年 - 2021年",
    description:
      "スタートアップ企業でのフルスタック開発。新機能の設計と実装、パフォーマンス最適化、コードレビュー。",
    skills: ["Node.js", "Express", "React", "MongoDB", "AWS"],
    icon: <Briefcase className="h-5 w-5" />,
  },
  {
    position: "ジュニア開発者",
    company: "ウェブソリューション株式会社",
    period: "2016年 - 2018年",
    description:
      "クライアント向けウェブサイトの開発。レスポンシブデザインの実装、フロントエンド開発。",
    skills: ["JavaScript", "HTML", "CSS", "jQuery", "PHP"],
    icon: <Briefcase className="h-5 w-5" />,
  },
  {
    position: "コンピュータサイエンス学士号取得",
    company: "東京工科大学",
    period: "2012年 - 2016年",
    description:
      "コンピュータサイエンス専攻。プログラミング、アルゴリズム、データ構造、ウェブ開発を学ぶ。",
    skills: ["Java", "Python", "データ構造", "アルゴリズム", "データベース"],
    icon: <Award className="h-5 w-5" />,
  },
];

export default function Experience() {
  return (
    <div className="space-y-8">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          経験
        </h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          私のこれまでの職歴と経験
        </p>
      </div>

      {/* GitHubスタイルのタイムライン */}
      <div className="relative mx-auto max-w-2xl pt-8 pb-12">
        {/* タイムラインの縦線 */}
        <div
          className="absolute left-[15px] top-0 h-full w-px bg-border"
          aria-hidden="true"
        />

        {/* タイムラインのアイテム */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              {...fadeInAnimation}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-24"
            >
              {/* アイコン */}
              <div
                className="absolute left-0 top-0 flex h-10 w-10 -translate-x-[5px] items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md"
                aria-hidden="true"
              >
                {exp.icon}
              </div>

              {/* コンテンツカード */}
              <div className="rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-2 flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    {exp.period}
                  </span>
                </div>
                <h3 className="text-xl font-semibold">{exp.position}</h3>
                <p className="text-muted-foreground">{exp.company}</p>
                <p className="my-2">{exp.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
