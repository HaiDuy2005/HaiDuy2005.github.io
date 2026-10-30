---
title: "Tối ưu hóa Blog tĩnh với Astro và triển khai GitHub Actions"
description: "Phân tích vì sao Astro là lựa chọn lý tưởng cho các trang portfolio nội dung và quy trình thiết lập CI/CD tự động deploy lên GitHub Pages."
pubDate: 2026-10-28
updatedDate: 2026-10-30
author: "Hải Duy"
category: "Cloud"
tags:
  - astro
  - cloud
  - github-pages
  - devops
cover: "/images/posts/learning-astro.svg"
draft: false
featured: true
---

# Tối ưu hóa Blog tĩnh với Astro và triển khai GitHub Actions

Khi xây dựng một trang portfolio cá nhân chú trọng vào bài viết và showcase dự án, lập trình viên thường đứng trước nhiều lựa chọn công nghệ: Next.js, Nuxt, Gatsby hay các hệ thống CMS như WordPress. Trong bài viết này, mình muốn chia sẻ lý do Astro trở thành lựa chọn vượt trội.

> *(Nội dung mẫu minh họa kỹ thuật - có thể chỉnh sửa tại `src/content/posts/learning-astro-cloud.md`)*

## Vì sao Astro nổi bật cho Static Sites?

### 1. Kiến trúc Islands (Islands Architecture)
Khác với các Single Page Application (SPA) truyền thống tải hàng trăm KB JavaScript về trình duyệt chỉ để hiển thị một đoạn văn bản tĩnh, Astro mặc định biên dịch toàn bộ mã nguồn thành **HTML tĩnh thuần túy (Zero JavaScript Runtime)**. 

Chỉ khi bạn cần các thành phần tương tác động (ví dụ: nút bấm điều khiển audio, bộ lọc tìm kiếm), JavaScript mới được nạp vào đảo tương tác đó.

### 2. Quản lý nội dung bằng Content Layer
Từ Astro 5+, hệ thống Content Layer kết hợp Zod schema giúp kiểm tra kiểu dữ liệu của frontmatter ngay trong thời gian build:

```typescript
// src/content.config.ts
import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    category: z.string(),
    draft: z.boolean().default(false),
  }),
});
```

Điều này ngăn chặn triệt để tình trạng một bài viết bị lỗi chính tả trong frontmatter làm gãy toàn bộ website khi deploy.

## Tự động hóa Deploy với GitHub Actions

Để trang web tự động cập nhật mỗi khi push code lên GitHub, chúng ta sử dụng một workflow CI/CD chuẩn:

```yaml
name: Deploy Astro site to Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
      - name: Install dependencies
        run: npm ci
      - name: Build Astro site
        run: npm run build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

## Đánh giá hiệu năng

Với cấu hình này:
- Tốc độ tải trang First Contentful Paint (FCP) đạt dưới **0.5s**.
- Điểm Google Lighthouse luôn duy trì ở mức **98 - 100/100**.
- Hoàn toàn không mất chi phí duy trì server hàng tháng.

## Kết luận

Astro kết hợp GitHub Pages là bộ đôi lý tưởng cho sinh viên IT và kỹ sư phần mềm muốn sở hữu một không gian số chuyên nghiệp, bền vững và tốc độ cao.
