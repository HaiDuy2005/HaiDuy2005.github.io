export function getReadingTime(text?: string): string {
  if (!text) return '3 phút đọc';
  const wordsPerMinute = 200;
  // Strip markdown syntax
  const clean = text
    .replace(/```[\s\S]*?```/g, '')
    .replace(/[#*`_~\[\]()>-]/g, '')
    .trim();
  const wordCount = clean.split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(wordCount / wordsPerMinute));
  return `${minutes} phút đọc`;
}

export function formatDate(date: Date | string): string {
  const d = new Date(date);
  return d.toLocaleDateString('vi-VN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
