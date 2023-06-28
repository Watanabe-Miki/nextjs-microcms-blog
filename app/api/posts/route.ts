import { NextResponse } from "next/server"
import { MicroCMSQueries } from "microcms-js-sdk"
import { client } from "@/libs/microcms"
import type { BlogType } from "@/types/blog"

export const GET = async(
    request: Request,
    queries?: MicroCMSQueries,
  ) => {
      
  // microCMSのクライアントを使用してデーター取得
  const posts = await client.getList<BlogType>({
    endpoint: "blogs",
    queries,
  });

  // json形式でデーターを返す
  return NextResponse.json(posts);
}
