---
title: "ClubManagement — Hệ thống quản lý CLB Văn Nghệ"
description: "Nền tảng web hỗ trợ ban chủ nhiệm câu lạc bộ văn nghệ sinh viên quản lý lịch tập luyện, điểm danh tiết mục biểu diễn và phân bổ kinh phí hoạt động."
category: "Web"
tags:
  - "ASP.NET Core"
  - "C#"
  - "SQL Server"
  - "Tailwind CSS"
  - "RESTful API"
thumbnail: "/images/projects/club-management.svg"
problem: "CLB Văn nghệ quản lý lịch biểu diễn, trang phục và điểm danh thành viên qua file Excel rời rạc dẫn đến nhầm lẫn và thất thoát phụ kiện sân khấu."
role: "Fullstack Developer: Thiết kế cơ sở dữ liệu quan hệ, xây dựng backend API và giao diện quản lý thành viên."
status: "Completed"
featured: true
order: 1
---

# ClubManagement — Hệ thống quản lý CLB Văn Nghệ

> **Ghi chú dữ liệu mẫu:** Dự án đồ án minh họa được thực hiện trong quá trình học tập. Đường dẫn mã nguồn GitHub và Demo đang được chuẩn bị để công khai.

## 1. Giới thiệu dự án

Câu lạc bộ Văn Nghệ tại trường đại học thường xuyên đối mặt với khối lượng công việc lớn trước mỗi mùa hội diễn:
- Lên lịch ráp sân khấu cho hàng chục tiết mục (Hát, Múa, Nhạc cụ, Rap/Hip-hop).
- Điểm danh tiến độ tập luyện của các thành viên.
- Quản lý mượn/trả đạo cụ và trang phục biểu diễn có giá trị.

Dự án **ClubManagement** được phát triển nhằm tự động hóa quy trình quản lý, giúp Ban Chủ nhiệm nắm bắt trạng thái hoạt động theo thời gian thực.

## 2. Công nghệ sử dụng

- **Backend:** ASP.NET Core Web API (.NET 8), Entity Framework Core.
- **Frontend:** HTML5, Modern CSS / Tailwind CSS, JavaScript ES6+.
- **Database:** Microsoft SQL Server với chuẩn hóa quan hệ (3NF).
- **Authentication:** JWT (JSON Web Token) phân quyền Admin và Member.

## 3. Các tính năng chính

1. **Lịch tập luyện thông minh:** Xếp lịch tập tiết mục không bị trùng khung giờ phòng tập của trường.
2. **Quản lý đạo cụ & phục trang:** Theo dõi người mượn, ngày hẹn trả và cảnh báo đồ quá hạn.
3. **Báo cáo chuyên cần:** Thống kê tỷ lệ tham gia tập luyện của từng thành viên trước ngày tổng duyệt.
4. **Phân quyền bảo mật:** Thành viên xem lịch và đăng ký tiết mục, Ban chủ nhiệm duyệt và quản lý tài chính.

## 4. Kết quả & Đóng góp cá nhân

- Thiết kế sơ đồ quan hệ thực thể (ERD) với 8 bảng dữ liệu chuẩn hóa.
- Tối ưu các truy vấn LINQ giảm 40% thời gian phản hồi API khi lấy danh sách tiết mục kèm thành viên tham gia.
- Rèn luyện kỹ năng viết mã sạch (Clean Architecture) và tư duy làm việc nhóm.
