// 'Link'はサイト内の特定のページを表します。
type Link = {
  name: string;
  slug: string;
};

export const links: Link[] = [
  {
    name: "Home",
    slug: "/",
  },
  {
    name: "このブログについて",
    slug: "/overview",
  },
  {
    name: "記事一覧",
    slug: "/blog",
  },
  {
    name: "検索",
    slug: "/searchList",
  },
];
