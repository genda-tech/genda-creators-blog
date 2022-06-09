export const config = {
  topMeta: {
    title: "GENDA Blogs",
    teamName: 'GENDA Inc.',
    description: '株式会社GENDAのブログ一覧です。',
    path: '/',
    ogImage: 'og.png',
  },
  siteMeta: {
    title: "GENDA Creators Blog",
    teamName: 'GENDA Inc.',
    description: '株式会社GENDAに所属するプロダクト開発に関わるメンバーのブログ記事をまとめています。',
    path: '/creators',
    ogImage: 'creators/og.png',
  },
  siteRoot: process.env.NODE_ENV === 'production' ? 'https://blog.genda.jp' : 'http://localhost:3000',
  headerLinks: [
    {
      title: 'Company',
      href: 'https://genda.jp/',
    },
    {
      title: 'Recruit',
      href: 'https://hrmos.co/pages/genda/jobs',
    },
  ],
};
