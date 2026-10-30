# KẾ HOẠCH XÂY DỰNG PERSONAL PORTFOLIO --- GITHUB PAGES

> **Mục tiêu:** Xây dựng portfolio cá nhân mang phong cách futuristic /
> cyber-tech, kết hợp Công nghệ thông tin (IT), AI, âm nhạc và Hip-hop.
> Website phải có trải nghiệm hiện đại, nhiều hiệu ứng nhưng vẫn nhanh,
> dễ đọc, responsive và dễ cập nhật bài viết bằng Markdown.

------------------------------------------------------------------------

## 1. Định hướng tổng thể

### Tên concept đề xuất

**DUYVERSE --- Code. Create. Flow.**

Có thể đổi tên thương hiệu sau này. "Duyverse" là không gian cá nhân thể
hiện hành trình học tập, dự án công nghệ, góc nhìn về AI và cá tính âm
nhạc.

### Mục tiêu website

-   Giới thiệu bản thân và định hướng phát triển trong lĩnh vực IT.
-   Trưng bày dự án cá nhân, đồ án và sản phẩm đã thực hiện.
-   Viết và quản lý bài đăng bằng Markdown, không cần tạo trang HTML cho
    từng bài.
-   Chia sẻ kiến thức, ghi chú học tập về lập trình, Cloud, AI và công
    nghệ.
-   Thể hiện cá tính qua âm nhạc, Hip-hop, Rap và visual design.
-   Có thể triển khai miễn phí trên GitHub Pages và cập nhật thuận tiện
    qua Git.

### Đối tượng xem

-   Nhà tuyển dụng / người phỏng vấn thực tập.
-   Giảng viên và bạn học.
-   Cộng đồng lập trình, AI và sáng tạo nội dung.
-   Người quan tâm đến hành trình học IT và âm nhạc.

### Nguyên tắc thiết kế

1.  Ấn tượng ở lần truy cập đầu tiên nhưng không gây rối mắt.
2.  Hiệu ứng có chủ đích, không lạm dụng animation.
3.  Nội dung và dự án phải là trọng tâm, không để hiệu ứng che khuất.
4.  Ưu tiên tốc độ tải, SEO, accessibility và trải nghiệm mobile.
5.  Tôn trọng quyền riêng tư: không tự ý công khai email, số điện thoại
    hoặc thông tin cá nhân chưa được cung cấp.

------------------------------------------------------------------------

## 2. Cấu trúc website --- 6 trang chính

Thanh điều hướng đề xuất:

`HOME | ABOUT | PROJECTS | POSTS | LAB | CONTACT`

### Trang 1 --- Home / Trang chủ (`/`)

**Vai trò:** Landing page tạo ấn tượng và dẫn người xem đến các phần
quan trọng.

Các khu vực: - **Hero section:** Tên/biệt danh, câu giới thiệu ngắn, ví
dụ: - "Building ideas with code. Finding rhythm in creativity." - "IT
Student • Developer • AI Explorer • Hip-hop Enthusiast" - Nút hành động:
`Explore Projects`, `Read Posts`, `Contact Me`. - Background có gradient
tối, grid kỹ thuật, hạt sáng hoặc đường kết nối chuyển động. - Hiệu ứng
chữ xuất hiện theo từng dòng hoặc typing effect (không nhấp nháy quá
nhanh). - **About preview:** Giới thiệu ngắn và liên kết đến About. -
**Featured projects:** 3 dự án nổi bật, có ảnh, mô tả, công nghệ và liên
kết GitHub/demo. - **Latest posts:** 3 bài viết mới nhất lấy tự động từ
Markdown. - **Tech stack:** Các công nghệ thực sự đã sử dụng; không tự
thêm kỹ năng chưa xác nhận. - **Now playing / Music mood:** Một khu vực
nhỏ thể hiện gu âm nhạc hoặc playlist. Chỉ tích hợp phát nhạc khi có
nguồn hợp pháp và người dùng chủ động bấm Play. - **Footer:** Điều
hướng, GitHub và các liên kết mạng xã hội được cung cấp.

### Trang 2 --- About (`/about`)

**Vai trò:** Kể câu chuyện cá nhân và định hướng nghề nghiệp.

Các phần: - Giới thiệu bản thân. - Hành trình học tập và phát triển kỹ
năng. - Định hướng: Web Development, Cloud Computing, AI và các lĩnh vực
quan tâm. - Kỹ năng theo nhóm: - Programming / Web. - Frameworks &
Tools. - Database. - Cloud & AI. - Creative tools. - Timeline học tập /
cột mốc dự án. - Sở thích: âm nhạc, Hip-hop, Rap, công nghệ và sáng
tạo. - Nút tải CV chỉ hiển thị khi đã có file CV thật.

**Lưu ý:** Nội dung phải dễ chỉnh sửa trong một file dữ liệu riêng;
không tự bịa kinh nghiệm làm việc, chứng chỉ hoặc thành tích.

### Trang 3 --- Projects (`/projects`)

**Vai trò:** Portfolio dự án, đặc biệt quan trọng khi ứng tuyển thực
tập.

Tính năng: - Lưới project card. - Bộ lọc theo nhóm: Web, Cloud, AI,
Other. - Tìm kiếm theo tên hoặc công nghệ. - Mỗi project có: - Tên dự
án. - Ảnh thumbnail. - Mô tả ngắn. - Vấn đề dự án giải quyết. - Vai trò
cá nhân. - Công nghệ sử dụng. - GitHub repository. - Demo URL (nếu
có). - Trạng thái: Completed / In Progress / Archived. - Trang chi tiết
dự án có thể dùng Markdown hoặc dữ liệu frontmatter.

**Dự án khởi tạo có thể đưa vào sau khi xác nhận nội dung:** -
ClubManagement --- hệ thống quản lý CLB Văn Nghệ. - TechFest --- website
sự kiện khoa CNTT. - Các bài thực hành Web / Cloud / AI khác.

Không được tạo link GitHub hoặc demo giả. Nếu chưa có link, hiển thị
"Coming soon" hoặc ẩn nút.

### Trang 4 --- Posts (`/posts`)

**Vai trò:** Blog cá nhân, toàn bộ bài viết được viết bằng Markdown.

Tính năng: - Danh sách bài viết mới nhất. - Tìm kiếm bài viết. - Lọc
theo category và tag. - Hiển thị tiêu đề, mô tả, ngày đăng, thời gian
đọc và ảnh cover. - Trang đọc bài viết riêng. - Mục lục tự động cho
heading H2/H3. - Nút copy code và syntax highlighting. - Chia sẻ liên
kết bài viết. - Bài viết liên quan. - RSS feed và sitemap nếu phù hợp
với cấu hình framework.

**Nhóm nội dung gợi ý:** - `Programming`: Web, JavaScript, ASP.NET Core,
clean code. - `Cloud`: Cloud Computing, deployment, GitHub Pages. -
`AI`: AI tools, workflow, thử nghiệm AI. - `Dev Notes`: Ghi chú học tập,
lỗi gặp phải và cách khắc phục. - `Hip-hop`: Cảm hứng âm nhạc, góc nhìn
sáng tạo, quá trình viết Rap.

**Quy tắc:** Bài viết chỉ xuất hiện khi có file Markdown hợp lệ trong
thư mục content.

### Trang 5 --- Lab / Playground (`/lab`)

**Vai trò:** Không gian thử nghiệm thể hiện sự tò mò và sáng tạo.

Có thể chia thành: - **AI Experiments:** Demo nhỏ, thử nghiệm prompt, AI
workflow hoặc ứng dụng AI. - **Code Playground:** Mini tools, animation,
UI experiments. - **Visual Experiments:** Các thử nghiệm giao diện,
shader hoặc hiệu ứng canvas. - **Music x Code:** Visualizer phản ứng
theo âm thanh, waveform giả lập hoặc audio visualization khi người xem
chủ động bật âm thanh.

Yêu cầu: - Mỗi experiment có mô tả ngắn và trạng thái. - Ưu tiên demo
nhẹ, chạy trực tiếp trên trình duyệt. - Không yêu cầu API key bí mật ở
frontend. - Không tự động phát âm thanh. - Nếu chưa có demo thật, để
trạng thái "In progress", không làm nút giả.

### Trang 6 --- Contact (`/contact`)

**Vai trò:** Giúp người xem liên hệ hoặc xem các hồ sơ công khai.

Các thành phần: - Lời mời hợp tác / trao đổi. - Email (chỉ điền khi chủ
website cung cấp). - GitHub. - LinkedIn. - Facebook hoặc nền tảng khác
nếu muốn công khai. - Nút copy email. - Form liên hệ chỉ triển khai khi
có backend hoặc dịch vụ form phù hợp. GitHub Pages là hosting tĩnh,
không tự xử lý gửi email từ server.

Có thể đặt Contact thành một mục điều hướng riêng hoặc dùng section ở
cuối trang; đề xuất giữ trang riêng để portfolio rõ ràng.

------------------------------------------------------------------------

## 3. Công nghệ đề xuất

### Stack ưu tiên: Astro + TypeScript + Markdown

  -----------------------------------------------------------------------
  Thành phần              Đề xuất                 Lý do
  ----------------------- ----------------------- -----------------------
  Framework               Astro                   Tối ưu website nội
                                                  dung, tạo trang tĩnh,
                                                  hỗ trợ Markdown/MDX

  Ngôn ngữ                TypeScript              Dễ bảo trì và hạn chế
                                                  lỗi

  Styling                 CSS / Tailwind CSS      Dễ tạo giao diện hiện
                                                  đại, responsive

  Animation               CSS + GSAP hoặc Motion  Hiệu ứng có kiểm soát
                          nhẹ                     

  Icon                    Lucide                  Bộ icon đồng nhất

  Markdown                Astro Content           Quản lý bài viết có
                          Collections             schema

  Hosting                 GitHub Pages            Miễn phí cho website
                                                  tĩnh public

  CI/CD                   GitHub Actions          Tự build và deploy khi
                                                  push
  -----------------------------------------------------------------------

**Vì sao chọn Astro:** Portfolio thiên về nội dung và bài viết, cần tốc
độ tải tốt, Markdown là trọng tâm. Astro phù hợp hơn việc dựng một SPA
nặng nếu không cần nhiều chức năng động.

### Lưu ý triển khai GitHub Pages

-   Dùng static output.
-   Cấu hình `site` và `base` chính xác theo URL GitHub Pages.
-   Nếu dùng project repository, asset path phải hỗ trợ base path; nếu
    dùng repository dạng `username.github.io`, base path thường là `/`.
-   Thiết lập GitHub Actions để build và deploy.
-   Không dùng server-side API hoặc database cần máy chủ chạy liên tục.
-   Không đưa secret/API key vào mã frontend hoặc repository public.

------------------------------------------------------------------------

## 4. Art direction --- phong cách hình ảnh

### Concept: Futuristic Cyber / Dark Studio / Hip-hop Digital

**Bảng màu gợi ý** - Background chính: `#080A12` hoặc `#0B0D16`. -
Surface/card: `#111522`. - Text chính: `#F4F6FC`. - Text phụ:
`#9AA4B8`. - Accent neon cyan: `#00E5FF`. - Accent violet: `#8B5CF6`. -
Accent lime dùng tiết chế: `#B8FF5C`.

Không sử dụng tất cả màu neon cùng lúc. Cyan và violet là cặp màu chủ
đạo; lime chỉ dành cho trạng thái hoặc điểm nhấn nhỏ.

### Typography

-   Heading: Space Grotesk / Sora.
-   Body: Inter.
-   Code: JetBrains Mono.
-   Dùng tối đa 2--3 font family và tải font có tối ưu.

### Thành phần giao diện

-   Navbar trong suốt có blur nhẹ, chuyển thành nền đặc khi cuộn.
-   Hero typography cỡ lớn, tương phản rõ.
-   Card có border mảnh, hover glow nhẹ.
-   Grid background hoặc noise texture rất nhẹ.
-   Gradient orb / radial glow ở background.
-   Badge cho công nghệ và trạng thái dự án.
-   Nút có hover/press feedback.
-   Page transition tinh tế nếu không ảnh hưởng accessibility.

### Hiệu ứng nên có

1.  Scroll reveal: nội dung xuất hiện nhẹ khi cuộn.
2.  Typing / text reveal ở Hero.
3.  Parallax rất nhẹ ở background.
4.  Cursor glow tùy chọn trên desktop.
5.  Card tilt rất nhẹ, tắt trên thiết bị cảm ứng.
6.  Animated gradient / grid.
7.  Audio visualizer ở Lab, chỉ hoạt động sau khi người dùng bật.
8.  Progress indicator khi đọc bài viết.
9.  Smooth scrolling.
10. Skeleton/loading state nếu có nội dung tải bất đồng bộ.

### Hiệu ứng không nên lạm dụng

-   Con trỏ custom làm mất con trỏ hệ thống.
-   Glitch liên tục trên mọi dòng chữ.
-   Video background dung lượng lớn.
-   Animation chạy liên tục khi tab không hiển thị.
-   Âm thanh tự phát.
-   Hiệu ứng làm giảm độ tương phản hoặc khó đọc.

### Accessibility và hiệu năng

-   Tôn trọng `prefers-reduced-motion`.
-   Có focus state rõ ràng khi dùng bàn phím.
-   Đảm bảo contrast văn bản.
-   Ảnh dùng kích thước phù hợp, lazy-load khi cần.
-   Không chạy animation nặng trên mobile yếu.
-   Có thể tắt hiệu ứng trang trí.
-   Không để nội dung chỉ có thể truy cập bằng hover.

------------------------------------------------------------------------

## 5. Quản lý bài viết bằng Markdown

### Cấu trúc thư mục

``` text
src/
  content/
    posts/
      hello-world.md
      learning-astro.md
      cloud-computing-notes.md
    projects/
      club-management.md
      techfest.md
  content.config.ts
```

### Mẫu file bài viết

Tạo file `src/content/posts/hello-world.md`:

``` md
---
title: "Hello, Duyverse!"
description: "Bài viết đầu tiên trên portfolio cá nhân."
pubDate: 2026-10-30
updatedDate: 2026-10-30
author: "Hải Duy"
category: "Dev Notes"
tags:
  - portfolio
  - learning
  - introduction
cover: "/images/posts/hello-world-cover.webp"
draft: false
featured: true
---

# Hello, Duyverse!

Đây là bài viết đầu tiên trên website cá nhân của mình.

## Vì sao mình xây dựng website này?

Mình muốn có một nơi để lưu lại hành trình học tập, dự án,
những thử nghiệm với AI và cảm hứng sáng tạo.

## Những nội dung sẽ chia sẻ

- Lập trình và phát triển web.
- Cloud Computing và triển khai dự án.
- AI tools và các thử nghiệm cá nhân.
- Âm nhạc, Hip-hop và sáng tạo.

## Kết luận

Đây là nơi ghi lại quá trình học hỏi và phát triển từng ngày.
```

### Quy tắc Markdown

-   Tên file dùng chữ thường, không dấu, nối bằng dấu gạch ngang.
-   `title`, `description`, `pubDate`, `category`, `tags`, `draft` là
    metadata quan trọng.
-   `draft: true` thì không hiển thị ở production.
-   `cover` là đường dẫn ảnh tùy chọn.
-   Mỗi bài nên có mô tả ngắn, heading rõ ràng và ảnh có quyền sử dụng.
-   Ngày đăng phải là ngày thực tế; không tự đổi ngày khi build.

### Quy trình đăng bài

1.  Tạo file `.md` trong `src/content/posts/`.
2.  Điền frontmatter theo mẫu.
3.  Viết nội dung Markdown.
4.  Xem trước bằng lệnh dev.
5.  Commit và push lên GitHub.
6.  GitHub Actions tự build và deploy website.

Không cần tạo thủ công một trang HTML cho mỗi bài viết.

------------------------------------------------------------------------

## 6. Cấu trúc thư mục dự án đề xuất

``` text
duyverse/
├── public/
│   ├── favicon.svg
│   ├── images/
│   │   ├── avatar/
│   │   ├── projects/
│   │   └── posts/
│   └── fonts/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.astro
│   │   ├── Footer.astro
│   │   ├── ProjectCard.astro
│   │   ├── PostCard.astro
│   │   ├── Tag.astro
│   │   ├── ThemeToggle.astro
│   │   └── ScrollProgress.astro
│   ├── content/
│   │   ├── posts/
│   │   └── projects/
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── ArticleLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── projects/
│   │   │   ├── index.astro
│   │   │   └── [...slug].astro
│   │   ├── posts/
│   │   │   ├── index.astro
│   │   │   └── [...slug].astro
│   │   ├── lab.astro
│   │   └── contact.astro
│   ├── styles/
│   │   ├── global.css
│   │   ├── theme.css
│   │   └── animations.css
│   └── content.config.ts
├── .github/
│   └── workflows/
│       └── deploy.yml
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── README.md
```

Agent có thể điều chỉnh cấu trúc theo phiên bản Astro hiện hành, nhưng
phải giữ nguyên nguyên tắc: nội dung tách khỏi component, bài viết được
tạo từ Markdown và trang được build tĩnh.

------------------------------------------------------------------------

## 7. Responsive design

### Desktop

-   Navbar ngang.
-   Hero hai cột hoặc typography lớn.
-   Project grid 3 cột.
-   Blog list có thể kết hợp sidebar mục lục.
-   Có thể bật cursor effect và parallax nhẹ.

### Tablet

-   Project grid 2 cột.
-   Giảm cường độ animation.
-   Navbar có thể thu gọn.

### Mobile

-   Menu hamburger.
-   Project grid 1 cột.
-   Hero xếp dọc.
-   Không dùng cursor effect.
-   Tắt tilt/parallax nặng.
-   Nút bấm đủ lớn, nội dung không tràn ngang.
-   Tối ưu ảnh và font để tải nhanh.

------------------------------------------------------------------------

## 8. SEO, chia sẻ và chất lượng

-   Mỗi trang có title và meta description riêng.
-   Open Graph image cho chia sẻ mạng xã hội.
-   Canonical URL đúng domain GitHub Pages.
-   Sitemap XML và robots.txt.
-   Semantic HTML: `header`, `nav`, `main`, `article`, `footer`.
-   Alt text cho ảnh có ý nghĩa.
-   Favicon và tên website nhất quán.
-   RSS cho blog nếu khả thi.
-   Kiểm tra link hỏng trước khi deploy.
-   Kiểm tra console không có lỗi.
-   Kiểm tra build production và URL khi deploy dưới project path.

------------------------------------------------------------------------

## 9. Kế hoạch triển khai theo giai đoạn

### Giai đoạn 1 --- Khởi tạo nền tảng

-   Tạo repository GitHub.
-   Khởi tạo Astro + TypeScript.
-   Cấu hình GitHub Pages và GitHub Actions.
-   Tạo BaseLayout, global styles, navbar và footer.
-   Đảm bảo deploy được bản website tối thiểu.

**Kết quả:** Website chạy được trên GitHub Pages.

### Giai đoạn 2 --- Thiết kế hệ thống giao diện

-   Xây dựng màu sắc, typography, spacing và component.
-   Làm responsive desktop/tablet/mobile.
-   Hoàn thiện Home và About.
-   Thêm theme dark mặc định; có thể bổ sung light mode nếu không làm
    ảnh hưởng concept.

**Kết quả:** Giao diện thống nhất và có thể điều hướng.

### Giai đoạn 3 --- Projects và Markdown Blog

-   Xây dựng Projects listing và project detail.
-   Cấu hình content collections.
-   Xây dựng Posts listing và article detail.
-   Tìm kiếm, lọc category/tag.
-   Mục lục, syntax highlighting, thời gian đọc.
-   Tạo 2--3 bài mẫu có nội dung minh họa được đánh dấu rõ là sample.

**Kết quả:** Có thể thêm dự án và đăng bài chỉ bằng Markdown.

### Giai đoạn 4 --- Lab và hiệu ứng

-   Xây dựng Lab.
-   Thêm scroll reveal, hero text animation, hover effect.
-   Thêm audio visualizer demo nếu phù hợp.
-   Kiểm tra reduced motion và hiệu năng mobile.

**Kết quả:** Website có cá tính công nghệ/âm nhạc mà vẫn mượt.

### Giai đoạn 5 --- Contact, SEO và hoàn thiện

-   Xây dựng Contact.
-   Thêm metadata, Open Graph, sitemap, RSS.
-   Kiểm tra accessibility và responsive.
-   Tối ưu ảnh, font, bundle.
-   Kiểm tra toàn bộ link và deploy production.

**Kết quả:** Portfolio sẵn sàng chia sẻ.

### Thứ tự ưu tiên

1.  Build và deploy hoạt động ổn định.
2.  Nội dung và điều hướng hoàn chỉnh.
3.  Markdown blog và project data.
4.  Responsive và accessibility.
5.  Hiệu ứng trang trí nâng cao.

Không hy sinh chức năng, tốc độ và khả năng đọc chỉ để có nhiều
animation.

------------------------------------------------------------------------

## 10. Tiêu chí nghiệm thu

### Chức năng

-   [ ] 6 trang điều hướng hoạt động.
-   [ ] Navbar và footer đồng nhất.
-   [ ] Project có trang danh sách và chi tiết.
-   [ ] Posts được tạo tự động từ Markdown.
-   [ ] Bài draft không xuất hiện ở production.
-   [ ] Tìm kiếm/lọc bài viết hoạt động.
-   [ ] Lab không chứa nút hoặc demo giả.
-   [ ] Contact hiển thị đúng các liên kết được cung cấp.
-   [ ] Refresh ở URL bài viết không bị 404 trên GitHub Pages.

### Giao diện

-   [ ] Phong cách futuristic cyber / dark studio.
-   [ ] Hiển thị tốt ở mobile, tablet và desktop.
-   [ ] Hiệu ứng không làm nội dung khó đọc.
-   [ ] Có trạng thái hover, focus và active.
-   [ ] Tôn trọng reduced motion.
-   [ ] Không tự động phát nhạc.

### Kỹ thuật

-   [ ] `npm run build` chạy thành công.
-   [ ] GitHub Actions deploy thành công.
-   [ ] Không có API key hoặc secret trong frontend.
-   [ ] Không có link giả.
-   [ ] SEO metadata và sitemap hợp lệ.
-   [ ] Không có lỗi console nghiêm trọng.

------------------------------------------------------------------------

# 11. PROMPT GIAO VIỆC CHO AI AGENT

Hãy đóng vai Senior Frontend Engineer kiêm UI/UX Designer. Xây dựng
website portfolio cá nhân theo tài liệu này.

## Mục tiêu bắt buộc

Tạo website tĩnh có thể deploy lên GitHub Pages, dùng Astro +
TypeScript, phong cách futuristic cyber / dark studio, kết hợp chủ đề
IT, AI, Hip-hop và âm nhạc.

## Các trang bắt buộc

1.  Home `/`
2.  About `/about`
3.  Projects `/projects`
4.  Posts `/posts`
5.  Lab `/lab`
6.  Contact `/contact`

## Yêu cầu kỹ thuật bắt buộc

-   Dùng Astro và TypeScript.
-   Dùng Markdown Content Collections cho Posts và Projects.
-   Tạo trang chi tiết bài viết tự động từ slug.
-   Hỗ trợ frontmatter, draft, category, tags, ngày đăng, cover.
-   Không viết cứng danh sách bài viết vào giao diện.
-   Build static và deploy bằng GitHub Actions.
-   Cấu hình base path chính xác cho GitHub Pages.
-   Responsive đầy đủ.
-   Không dùng backend/database cần server.
-   Không để secret/API key trong client.
-   Không tự động phát nhạc.

## Yêu cầu thiết kế

-   Dark futuristic, cyber-tech, digital studio.
-   Màu chủ đạo đen/xanh cyan/tím.
-   Typography mạnh, khoảng trắng hợp lý.
-   Grid background, glow, gradient, card hover.
-   Hero có text animation.
-   Scroll reveal và micro-interactions.
-   Hiệu ứng phải nhẹ, có reduced-motion fallback.
-   Không làm giao diện giống dashboard quản trị; đây là personal
    portfolio.

## Yêu cầu nội dung

-   Viết nội dung mẫu bằng tiếng Việt tự nhiên, có thể xen tiếng Anh ở
    tagline.
-   Không bịa email, số điện thoại, tài khoản mạng xã hội, chứng chỉ,
    kinh nghiệm hoặc link dự án.
-   Dữ liệu chưa có phải đặt placeholder dễ tìm và ghi chú rõ.
-   Có thể dùng ClubManagement và TechFest làm project mẫu nhưng phải
    đánh dấu nội dung/link cần người dùng xác nhận.
-   Tạo ít nhất 2 bài Markdown mẫu; ghi rõ đây là nội dung mẫu có thể
    chỉnh sửa.

## Quy trình làm việc

1.  Kiểm tra repository hiện tại trước khi sửa.
2.  Nếu repository đã có code, giữ lại phần hợp lệ và tránh ghi đè không
    cần thiết.
3.  Đề xuất cấu trúc thư mục rồi triển khai.
4.  Hoàn thiện từng giai đoạn, không chỉ tạo mockup.
5.  Chạy cài đặt dependency và build production.
6.  Sửa toàn bộ lỗi build, TypeScript và đường dẫn GitHub Pages.
7.  Kiểm tra các route, ảnh, Markdown và responsive.
8.  Tạo README hướng dẫn chạy local, thêm bài Markdown, thêm project và
    deploy.
9.  Cuối cùng báo cáo file đã tạo/thay đổi, lệnh chạy, cách đăng bài và
    các thông tin người dùng cần tự điền.

## Lệnh và đầu ra cần có

-   `npm install`
-   `npm run dev`
-   `npm run build`
-   GitHub Actions workflow deploy.
-   README đầy đủ.
-   Hai file Markdown bài viết mẫu.
-   Một project Markdown mẫu.
-   Website hoạt động thực tế, không chỉ là ảnh thiết kế.

**Ưu tiên cao nhất:** Một portfolio hoàn chỉnh, có cá tính riêng, dễ bảo
trì và có thể đăng bài bằng cách thêm file `.md`; không chạy theo hiệu
ứng đến mức website chậm hoặc khó sử dụng.

------------------------------------------------------------------------

## 12. Thông tin cần bổ sung trước khi public

Các mục dưới đây nên để trong một file cấu hình riêng để chủ website tự
cập nhật:

-   Tên hiển thị / nickname.
-   Avatar hoặc ảnh chân dung.
-   Bio ngắn.
-   Email liên hệ.
-   GitHub URL.
-   LinkedIn / mạng xã hội khác.
-   CV PDF (nếu muốn).
-   Danh sách kỹ năng đã xác nhận.
-   Link repository và demo của từng project.
-   Playlist hoặc nguồn nhạc hợp pháp (nếu muốn tích hợp).

**Đề xuất:** Hoàn thành bản đầu tiên với placeholder rõ ràng, sau đó
thay bằng thông tin và hình ảnh thật. Không cần chờ đủ mọi thông tin mới
bắt đầu code.
