---
title: "CyberFlow — Thử nghiệm Trợ lý AI Đa phương thức"
description: "Dự án nghiên cứu cá nhân tích hợp mô hình ngôn ngữ lớn để tự động hóa ghi chú học tập, tóm tắt bài báo khoa học và gợi ý nhịp điệu âm nhạc."
category: "AI"
tags:
  - "Python"
  - "Gemini API"
  - "LangChain"
  - "Vector DB"
thumbnail: "/images/projects/ai-assistant.svg"
problem: "Sinh viên IT đối mặt với lượng tài liệu chuyên ngành đồ sộ và cần một trợ lý hỗ trợ tổng hợp kiến thức kèm code mẫu nhanh chóng."
role: "AI Developer / Prompt Engineer: Xây dựng pipeline RAG (Retrieval-Augmented Generation) và thiết kế giao diện chat tinh gọn."
status: "In Progress"
featured: true
order: 3
---

# CyberFlow — Thử nghiệm Trợ lý AI Đa phương thức

> **Ghi chú dữ liệu mẫu:** Dự án thử nghiệm cá nhân trong phòng Lab AI. Đang trong giai đoạn phát triển prototype.

## 1. Mục tiêu thử nghiệm

CyberFlow là dự án nghiên cứu nhỏ nhằm ứng dụng các khả năng mới nhất của Generative AI vào quy trình học tập và sáng tạo:
- Tra cứu tài liệu kỹ thuật dài (PDF, Markdown documentation).
- Hỗ trợ giải thích các đoạn mã nguồn phức tạp hoặc gợi ý cấu trúc thuật toán tối ưu.
- Thử nghiệm sinh lời Rap theo chủ đề công nghệ kết hợp phân tích vần điệu.

## 2. Kiến trúc giải pháp (RAG Pipeline)

1. **Document Ingestion:** Nạp tài liệu giáo trình và tài liệu kỹ thuật định dạng Markdown/PDF.
2. **Text Chunking & Embedding:** Tách đoạn văn bản và tạo vector biểu diễn thông qua embedding model.
3. **Similarity Search:** Khi người dùng đặt câu hỏi, hệ thống truy xuất các đoạn kiến thức liên quan nhất.
4. **Contextual Generation:** Mô hình LLM tạo phản hồi chính xác dựa trên đúng ngữ cảnh được cung cấp, giảm thiểu hiện tượng ảo giác (hallucination).

## 3. Định hướng tiếp theo

- Tích hợp thêm module phân tích âm thanh để nhận diện nhịp điệu (BPM) và phân loại beat Hip-hop tự động.
- Triển khai phiên bản web nhẹ tối ưu trải nghiệm người dùng.
