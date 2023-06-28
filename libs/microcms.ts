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
  const [listData, categoryData, tagData] = await Promise.all([
    client.getList<BlogType>({ endpoint: "blogs", queries }),
    client.getList<CategoryType>({ endpoint: "categories", queries }),
    client.getList<TagType>({ endpoint: "tags", queries })
  ])

  // loadingUI 確認用
  // await new Promise((resolve) => setTimeout(resolve, 2000))

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

 return detailData;
};

