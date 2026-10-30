# DUYVERSE — Code. Create. Flow.

> **Futuristic Cyber-Tech Personal Portfolio & Markdown Blog**  
> Xây dựng với Astro 7, TypeScript, Tailwind CSS, và triển khai tĩnh (SSG) tối ưu 100% trên GitHub Pages.

---

## 🌌 1. Tổng quan dự án

**DUYVERSE** là website portfolio cá nhân mang phong cách **Futuristic Cyber / Dark Studio / Hip-hop Digital**, kết hợp giữa:
- **Công nghệ thông tin (IT):** Lập trình Web hiện đại, kiến trúc đám mây và tối ưu hóa hiệu năng.
- **Trí tuệ nhân tạo (AI):** Khám phá mô hình ngôn ngữ lớn (LLM), Prompt Engineering và công cụ hỗ trợ dev.
- **Văn hóa Hip-hop & Âm nhạc:** Tìm kiếm nhịp điệu (flow) sáng tạo và tư duy sắc sảo trong từng dòng code.
- **Static Zero-Runtime:** Tốc độ tải tức thì, chuẩn SEO, chuẩn Accessibility, deploy hoàn toàn miễn phí trên GitHub Pages qua GitHub Actions.

---

## 🧭 2. Cấu trúc 6 trang chính

| Route | Trang | Vai trò & Tính năng |
|---|---|---|
| `/` | **Home** | Landing page ấn tượng với Hero cyber-glow, typing role, 3 dự án nổi bật, 3 bài viết mới nhất, Tech Stack và Audio Mood Widget. |
| `/about` | **About** | Câu chuyện cá nhân, hành trình học tập, 3 định hướng chuyên môn, nhóm kỹ năng thực tế, timeline cột mốc và sở thích âm nhạc. |
| `/projects` | **Projects** | Showcase đồ án với bộ lọc theo danh mục (`Web`, `Cloud`, `AI`, `Other`) và tìm kiếm theo tên/công nghệ. |
| `/projects/[slug]` | **Project Detail** | Chi tiết đồ án: vấn đề giải quyết, vai trò cá nhân, công nghệ sử dụng, link GitHub / Demo và nội dung Markdown. |
| `/posts` | **Posts** | Blog cá nhân tự động sinh từ Markdown: tìm kiếm tức thì, lọc category/tag, ước tính thời gian đọc. |
| `/posts/[slug]` | **Post Detail** | Trình đọc bài viết chuẩn Typography: thanh tiến trình đọc, Table of Contents tự động spy H2/H3, nút copy code, nút chia sẻ. |
| `/lab` | **Lab (Playground)** | Không gian R&D: Audio Reactive Visualizer (Web Audio API), Matrix Rain Canvas, Cyber Slug & Rhyme Analyzer. |
| `/contact` | **Contact** | Kênh truyền tin trực tiếp: nút copy email với visual feedback, thẻ mạng xã hội, form mở mail client tương thích hosting tĩnh. |

---

## 🛠️ 3. Hướng dẫn chạy và phát triển Local

### Yêu cầu hệ thống:
- **Node.js:** v18 trở lên (Khuyến nghị Node 20 hoặc 22)
- **Trình quản lý gói:** `npm` (hoặc `pnpm`, `yarn`)

### Các bước cài đặt:

1. **Cài đặt thư viện dependencies:**
   ```bash
   npm install
   ```

2. **Chạy máy chủ phát triển (Dev Server):**
   ```bash
   npm run dev
   ```
   Mở trình duyệt tại: `http://localhost:4321`

3. **Kiểm tra bản build tĩnh Production:**
   ```bash
   npm run build
   ```
   Mã nguồn HTML/CSS/JS tĩnh sẽ được sinh tại thư mục `dist/`.

4. **Xem trước bản build tĩnh:**
   ```bash
   npm run preview
   ```

---

## ✍️ 4. Hướng dẫn đăng bài viết mới bằng Markdown

Không cần viết bất kỳ dòng mã HTML nào, chỉ cần tạo file `.md` trong thư mục `src/content/posts/`:

1. Tạo file mới: `src/content/posts/ten-bai-viet-moi.md`
2. Khai báo Frontmatter ở đầu file:

```markdown
---
title: "Tiêu đề bài viết của bạn"
description: "Mô tả ngắn gọn về bài viết (1-2 câu)"
pubDate: 2026-10-30
author: "Hải Duy"
category: "Programming" # Hoặc: Cloud, AI, Dev Notes, Hip-hop
tags:
  - web
  - astro
  - typescript
cover: "/images/posts/hello-world.svg" # Ảnh bìa tùy chọn trong thư mục public/
draft: false # Đặt true nếu bài đang viết dở, chưa muốn hiển thị ở production
featured: false # Đặt true nếu muốn hiển thị nổi bật
---

# Tiêu đề chính

Nội dung bài viết viết bằng cú pháp Markdown thông thường...

## Heading cấp 2 (Tự động vào Mục lục)
Nội dung phân tích...
```

3. Lưu file và chạy `npm run build` hoặc commit lên GitHub. Bài viết sẽ tự động xuất hiện trên danh sách và có trang đọc riêng!

---

## 🚀 5. Hướng dẫn thêm dự án mới (Portfolio Showcase)

Tương tự bài viết, các dự án được quản lý tại `src/content/projects/`:

1. Tạo file: `src/content/projects/ten-du-an.md`
2. Khai báo Frontmatter:

```markdown
---
title: "Tên Dự Án"
description: "Mô tả ngắn về sản phẩm"
category: "Web" # Chọn: Web | Cloud | AI | Other
tags:
  - "React"
  - "TypeScript"
  - "Tailwind"
thumbnail: "/images/projects/club-management.svg"
problem: "Vấn đề thực tế mà đồ án giải quyết"
role: "Vai trò của bạn trong dự án (e.g. Frontend Developer)"
githubUrl: "https://github.com/username/repo" # Để trống nếu là repo private
demoUrl: "https://demo.example.com" # Để trống nếu chưa có link
status: "Completed" # Chọn: Completed | In Progress | Archived
featured: true
order: 1
---

# Chi tiết đồ án

Nội dung mô tả kiến trúc, kết quả và bài học rút ra...
```

---

## ⚙️ 6. Những thông tin cá nhân bạn cần cập nhật

Toàn bộ thông tin liên hệ và cá nhân được tập trung tại một file duy nhất:
👉 **`src/data/siteConfig.ts`**

Các mục bạn nên mở ra và điền thông tin thật của mình:
- `author.name`: Tên thật của bạn (mặc định: *Hải Duy*)
- `author.email`: Địa chỉ Email nhận liên hệ (mặc định: *contact@duyverse.dev*)
- `author.github`: Đường dẫn GitHub profile của bạn (mặc định: *https://github.com*)
- `author.linkedin`: Đường dẫn hồ sơ LinkedIn thật
- `author.cvUrl`: Link file PDF CV của bạn (nếu có, để trống nếu chưa có)
- `author.bio`: Lời giới thiệu ngắn
- `skills`: Bổ sung hoặc chỉnh sửa các công nghệ bạn thành thạo
- `musicMood`: Thay đổi track nhạc, thể loại và câu trích dẫn bạn yêu thích

---

## 🚢 7. Quy trình Deploy lên GitHub Pages

Dự án đã được tích hợp sẵn GitHub Actions tự động tại file `.github/workflows/deploy.yml`.

### Các bước thực hiện:

1. **Khởi tạo và kết nối GitHub Repository:**
   ```bash
   git add .
   git commit -m "feat: complete DUYVERSE cyber-tech portfolio"
   git branch -M main
   git remote add origin https://github.com/<tai-khoan-cua-ban>/<ten-repository>.git
   git push -u origin main
   ```

2. **Kích hoạt GitHub Pages trên Repository:**
   - Truy cập vào repository của bạn trên GitHub.
   - Nhấn vào tab **Settings** -> **Pages** (ở menu bên trái).
   - Tại mục **Build and deployment** -> **Source**: chọn **GitHub Actions**.

3. **Cấu hình Base Path (Nếu deploy vào repository không phải user.github.io):**
   - Nếu tên repository của bạn là `portfolio` (URL dạng `https://username.github.io/portfolio/`), bạn chỉ cần thêm biến môi trường trong file `astro.config.mjs` hoặc cài đặt repository secrets / env `BASE_PATH=/portfolio/`.
   - Nếu repository dạng `username.github.io`, website sẽ chạy ở gốc `/` mặc định mà không cần chỉnh sửa gì thêm!

4. Mỗi khi bạn `git push` bài viết hoặc dự án mới, GitHub Actions sẽ tự động biên dịch và cập nhật website trong vòng 1-2 phút!

---

## 🎨 8. Bảng màu & Typography (Design System)

- **Background:** `#080A12` (Vũ trụ tối Cyberpunk)
- **Card / Surface:** `#111522` kết hợp hiệu ứng kính mờ (Backdrop Blur)
- **Accent Cyan:** `#00E5FF` (Đại diện cho Công nghệ & Tương lai)
- **Accent Violet:** `#8B5CF6` (Đại diện cho Chiều sâu & Sáng tạo)
- **Accent Lime:** `#B8FF5C` (Đại diện cho Nhịp điệu âm nhạc & Trạng thái hoạt động)
- **Typography:** *Space Grotesk* (Tiêu đề), *Inter* (Nội dung), *JetBrains Mono* (Code & Metadata)
