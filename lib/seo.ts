export const seo = {
  title: '安德 | 产品经理、创业者',
  description:
    '我叫安德，一名产品经理，热爱设计、创新、享受生活，以及在未知领域中探索。',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://cali.so'
      : 'http://localhost:3000'
  ),
} as const
