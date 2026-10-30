---
title: "TechFest — Cổng thông tin sự kiện khoa CNTT"
description: "Trang web thông tin, đăng ký thi đấu công nghệ và hiển thị bảng xếp hạng hackathon trực tiếp cho ngày hội TechFest khoa Công nghệ Thông tin."
category: "Web"
tags:
  - "TypeScript"
  - "Astro"
  - "PostgreSQL"
  - "WebSockets"
thumbnail: "/images/projects/techfest.svg"
problem: "Sinh viên khó theo dõi lịch trình các hội thảo khoa học và kết quả thi lập trình hackathon theo thời gian thực tại ngày hội."
role: "Frontend Developer & UI Designer: Thiết kế giao diện phong cách Cyberpunk và xây dựng tính năng hiển thị kết quả trực tiếp."
status: "Completed"
featured: true
order: 2
---

# TechFest — Cổng thông tin sự kiện khoa CNTT

> **Ghi chú dữ liệu mẫu:** Dự án sự kiện sinh viên. Link chi tiết đang được rà soát để cập nhật.

## 1. Bối cảnh dự án

TechFest là chuỗi sự kiện thường niên lớn nhất của Khoa Công nghệ Thông tin, thu hút hàng trăm sinh viên tham gia các buổi workshop AI, triển lãm đồ án và cuộc thi lập trình nhanh (Code Sprint).

Trang web **TechFest Portal** được xây dựng với mục tiêu mang lại trải nghiệm số hiện đại, trực quan và đậm chất công nghệ cho người tham dự.

## 2. Điểm nổi bật về thiết kế & công nghệ

- **Phong cách Cyber-Tech:** Bảng màu tối kết hợp neon gradient, tối ưu hiển thị trên màn hình chiếu LED sân khấu chính và thiết bị di động của sinh viên.
- **Bảng điểm trực tiếp (Live Leaderboard):** Cập nhật điểm số của các đội thi lập trình ngay lập tức qua kết nối WebSockets.
- **Đăng ký Workshop bằng mã QR:** Tích hợp sinh mã QR cá nhân giúp ban tổ chức điểm danh đầu giờ nhanh chóng trong vòng 2 giây.

## 3. Thách thức kỹ thuật & Giải pháp

- **Tải lượng truy cập tập trung cao:** Khi cổng đăng ký mở, hàng trăm lượt truy cập đồng thời dễ làm chậm hệ thống. Giải pháp là ứng dụng cơ chế Static Site Generation cho các trang lịch trình và cache CDN cho ảnh đại biểu.
- **Khả năng tương thích di động:** Đảm bảo 100% sinh viên dùng điện thoại có thể quét mã và tra cứu phòng hội thảo dễ dàng.
