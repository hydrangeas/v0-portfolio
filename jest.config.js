const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // next.config.jsとテスト環境用の.envファイルが配置されたディレクトリをセット
  dir: './',
});

// Jestのカスタム設定を設置する場所
const customJestConfig = {
  // テストファイルのパターンを指定
  testMatch: ['**/__tests__/**/*.test.(ts|tsx)'],
  // テスト環境のセットアップ
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // テスト対象から除外するディレクトリ
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  // モジュール名のエイリアスを設定
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^@/lib/(.*)$': '<rootDir>/lib/$1',
    '^@/components/(.*)$': '<rootDir>/components/$1',
  },
  // テスト環境を指定
  testEnvironment: 'jest-environment-jsdom',
};

// createJestConfigを定義することによって、本ファイルで定義された設定がNext.jsの設定に反映される
module.exports = createJestConfig(customJestConfig);