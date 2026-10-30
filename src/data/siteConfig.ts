export interface SiteConfig {
  title: string;
  tagline: string;
  description: string;
  author: {
    name: string;
    nickname: string;
    role: string;
    bio: string;
    avatar: string;
    location: string;
    status: string;
    email: string; // Placeholder or real
    github: string;
    linkedin: string;
    facebook?: string;
    cvUrl?: string; // Optional real CV URL
  };
  navigation: {
    name: string;
    href: string;
    icon?: string;
  }[];
  skills: {
    category: string;
    items: { name: string; level?: string; icon?: string }[];
  }[];
  musicMood: {
    currentVibe: string;
    favoriteGenres: string[];
    featuredTrack: {
      title: string;
      artist: string;
      quote: string;
    };
  };
}

export const siteConfig: SiteConfig = {
  title: 'DUYVERSE — Code. Create. Flow.',
  tagline: 'Building ideas with code. Finding rhythm in creativity.',
  description: 'Personal cyber-tech portfolio of Hai Duy — IT Student, Developer, AI Explorer & Hip-hop Enthusiast.',
  author: {
    name: 'Hải Duy',
    nickname: 'Duyverse',
    role: 'IT Student • Developer • AI Explorer • Hip-hop Enthusiast',
    bio: 'Sinh viên Công nghệ Thông tin đam mê phát triển Web hiện đại, kiến trúc Cloud và ứng dụng AI thực tiễn. Tìm kiếm cảm hứng sáng tạo giữa những dòng code chuẩn mực và nhịp điệu tự do của Hip-hop.',
    avatar: '/images/avatar/duyverse-avatar.svg',
    location: 'Việt Nam',
    status: 'Open to Internship & Collaborative Projects',
    email: 'contact@duyverse.dev', // Ghi chú: Bạn có thể thay bằng email cá nhân của mình
    github: 'https://github.com/HaiDuy2005',
    linkedin: 'https://linkedin.com', // Ghi chú: Thay bằng LinkedIn thật của bạn
    facebook: 'https://facebook.com', // Tùy chọn
    cvUrl: '', // Để trống nếu chưa có file CV thật theo nguyên tắc của kế hoạch
  },
  navigation: [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT', href: '/about' },
    { name: 'PROJECTS', href: '/projects' },
    { name: 'POSTS', href: '/posts' },
    { name: 'LAB', href: '/lab' },
    { name: 'CONTACT', href: '/contact' },
  ],
  skills: [
    {
      category: 'Programming & Web',
      items: [
        { name: 'TypeScript / JavaScript' },
        { name: 'HTML5 & CSS3' },
        { name: 'C# / .NET' },
        { name: 'Python' },
      ],
    },
    {
      category: 'Frameworks & Libraries',
      items: [
        { name: 'Astro' },
        { name: 'React' },
        { name: 'ASP.NET Core' },
        { name: 'Tailwind CSS' },
      ],
    },
    {
      category: 'Database & Backend',
      items: [
        { name: 'SQL Server' },
        { name: 'PostgreSQL' },
        { name: 'RESTful APIs' },
        { name: 'Entity Framework Core' },
      ],
    },
    {
      category: 'Cloud & DevOps & AI',
      items: [
        { name: 'Git & GitHub Pages' },
        { name: 'Docker basics' },
        { name: 'GitHub Actions CI/CD' },
        { name: 'AI Prompt Engineering & LLM APIs' },
      ],
    },
    {
      category: 'Creative & Workflow',
      items: [
        { name: 'Figma UI/UX' },
        { name: 'Markdown & Obsidian' },
        { name: 'Audio & Music Production (FL Studio)' },
      ],
    },
  ],
  musicMood: {
    currentVibe: 'Cyber Hip-hop & Lo-Fi Boom Bap',
    favoriteGenres: ['Hip-hop / Rap', 'Boom Bap', 'Cyberpunk Synthwave', 'Chillhop / Lo-Fi Beats'],
    featuredTrack: {
      title: 'Midnight Coding Flow',
      artist: 'Duyverse Audio Lab',
      quote: '"Mỗi dòng code là một câu vần, mỗi function là một flow."',
    },
  },
};
