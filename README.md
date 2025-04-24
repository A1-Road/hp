# エーワンロード株式会社 コーポレートサイト

![A1Road](public/a1road-logo.png)

このプロジェクトは、エーワンロード株式会社のコーポレートサイトを構築するためのリポジトリです。
Next.js、TypeScript、Tailwind CSS、shadcn/ui、Framer Motion、MicroCMSを使用して構築されています。

## 📋 目次

- [技術スタック](#技術スタック)
- [プロジェクト構成](#プロジェクト構成)
- [環境構築](#環境構築)
- [開発コマンド](#開発コマンド)
- [デプロイ手順](#デプロイ手順)
- [ブランチ戦略](#ブランチ戦略)
- [環境変数](#環境変数)
- [DB設計](#db設計)
- [貢献ガイドライン](#貢献ガイドライン)
- [CI/CD](#cicd)
- [ライセンス](#ライセンス)

## 🛠 技術スタック

- **フロントエンド**

  - Next.js 15.2.4 (App Router)
  - TypeScript
  - React 18
  - Tailwind CSS
  - shadcn/ui コンポーネント
  - Framer Motion (アニメーション)

- **バックエンド**

  - Next.js サーバーコンポーネント / Server Actions
  - MicroCMS (コンテンツ管理)

- **開発ツール**
  - Storybook (コンポーネント開発)
  - ESLint/Prettier (コード品質)
  - next-sitemap (サイトマップ生成)
  - TypeScript 5
  - PostCSS

## 📁 プロジェクト構成

```
/
├── actions/             # サーバーアクション (データ取得・操作)
├── app/                 # Next.js アプリケーションルーター
│   ├── api/             # API エンドポイント
│   ├── admin/           # 管理者画面
│   ├── about-us/        # 会社情報ページ
│   ├── case/            # 事例ページ
│   ├── contact/         # お問い合わせページ
│   └── ...
├── components/          # 共通コンポーネント
│   ├── ui/              # UIコンポーネント
│   └── ...
├── hooks/               # カスタムフック
├── lib/                 # ユーティリティ関数
├── public/              # 静的ファイル
├── .storybook/          # Storybook設定
└── .vscode/             # VSCode設定
```

## 🚀 環境構築

### 前提条件

- Node.js 18.0.0以上
- npm または yarn
- Supabaseアカウント

### セットアップ手順

1. リポジトリをクローン

```bash
git clone https://github.com/your-org/your-repo-name.git
cd your-repo-name
```

2. 依存関係をインストール

```bash
npm install
# または
yarn install
```

3. 環境変数の設定
   `.env.local`ファイルを作成し、必要な環境変数を設定します。[環境変数](#環境変数)セクションを参照してください。

4. Supabaseの設定

   - Supabaseプロジェクトを作成
   - 必要なテーブルとスキーマを設定（詳細は[DB設計](#db設計)を参照）
   - 認証設定を行う

5. ローカル開発サーバーを起動

```bash
npm run dev
# または
yarn dev
```

## ⌨️ 開発コマンド

```bash
# 開発サーバーの起動（http://localhost:3000）
npm run dev

# 本番用ビルド
npm run build

# 本番モードでサーバーを起動
npm run start

# リントチェック
npm run lint
```

## 📦 デプロイ手順

### Cloudflare Pagesへのデプロイ

1. 本番用ビルドを作成

```bash
npm run build
```

2. `npm start`コマンドを使用してアプリケーションを実行、または静的エクスポートを使用

3. 1,2で問題が無ければ、プルリクエストを作成し、`main`ブランチにマージ

4. Cloudflareでのデプロイに問題が無いか確認

## 🌿 ブランチ戦略

このプロジェクトでは、以下のブランチ戦略を採用しています：

- `main`: 本番環境用ブランチ。常に安定した状態を維持。
- `staging`: ステージング環境用ブランチ。QAテスト用。
- `develop`: 開発ブランチ。新機能の統合先。
- `feature/*`: 機能開発用ブランチ。`develop`から分岐。
- `bugfix/*`: バグ修正用ブランチ。
- `hotfix/*`: 緊急バグ修正用ブランチ。`main`から分岐し、修正後に`main`と`develop`に統合。

### ブランチの命名規則

```
feature/機能名-#issue番号
bugfix/バグ内容-#issue番号
hotfix/緊急修正内容-#issue番号
```

### プルリクエスト・マージフロー

1. 機能開発は`develop`ブランチから新しい`feature/*`ブランチを作成
2. 開発完了後、`develop`ブランチへプルリクエスト
3. コードレビュー後、`develop`へマージ
4. 定期的に`develop`から`staging`へマージしてテスト
5. リリース準備が整ったら`staging`から`main`へマージ

## 🔑 環境変数

プロジェクトには以下の環境変数が必要です。`.env.local`ファイルに設定してください。

```
# MicroCMS
NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN=your-microcms-service-domain
NEXT_PUBLIC_MICROCMS_API_KEY=your-microcms-api-key
```

## 🤝 貢献ガイドライン

### コーディング規約

- ESLint と Prettier の設定に従ってコードを記述
- コンポーネントは機能ごとに分割し、適切にディレクトリに配置
- 型定義は明示的に行い、`any`の使用を避ける
- コメントは日本語で記述し、複雑なロジックには説明を追加
- Storybookを使用してコンポーネントの開発とテストを行う
- コンポーネントの再利用性を考慮した設計を行う

### Pull Request プロセス

1. 適切なブランチから開発ブランチを作成（[ブランチ戦略](#ブランチ戦略)参照）
2. 変更を加え、適切なコミットメッセージでコミット
3. テストが全て通ることを確認
4. Storybookでコンポーネントの動作を確認
5. Pull Requestを作成し、変更内容を詳細に説明
6. コードレビューを受け、必要な修正を行う
7. 承認されたらマージ

## 🔄 CI/CD

- GitHub Actionsを使用した自動テスト(準備中)
- Cloudflare Pagesとの連携による自動デプロイ
  - `main`ブランチへのマージで本番環境に自動デプロイ
  - 各PRではプレビュー環境が自動的に作成(準備中)
- デプロイ時に自動的にサイトマップを生成(準備中)

## 開発の注意点

- Cloudflareを利用している都合上、server actionsを呼び出しているページには

```typesctipt
export const runtime = "edge";
```

の記述が必要です。
