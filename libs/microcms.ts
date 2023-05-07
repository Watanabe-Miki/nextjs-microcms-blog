import { createClient } from "microcms-js-sdk";
import type { BlogType, CategoryType, TagType } from "@/types/blog";
import type {
  MicroCMSQueries,
} from "microcms-js-sdk";


// 環境変数が設定されているかチェック
if (!process.env.NEXT_PUBLIC_SERVICE_DOMAIN) {
  throw new Error("NEXT_PUBLIC_SERVICE_DOMAIN is required");
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is required");
}

// API取得用のクライアントを作成
export const client = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

// ブログ一覧を取得
export const getList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<BlogType>({
    endpoint: "blogs",
    queries,
  });

  const categoryData = await client.getList<CategoryType>({
    endpoint: "categories",
    queries,
  });

  const tagData = await client.getList<TagType>({
    endpoint: "tags",
    queries,
  });

  return {
    contents: listData.contents,
    categories: categoryData.contents, 
    tags: tagData.contents, 
  };
};

// ブログの詳細を取得
export const getDetail = async (
 contentId: string,
 queries?: MicroCMSQueries
) => {
 const detailData = await client.getListDetail<BlogType>({
  endpoint: "blogs",
  contentId,
  queries,
 });

 // データの取得が目視しやすいよう明示的に遅延効果を追加
//  await new Promise((resolve) => setTimeout(resolve, 3000));

 return detailData;
};

