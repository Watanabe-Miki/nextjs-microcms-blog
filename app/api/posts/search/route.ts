import { NextResponse } from "next/server"
import { client } from "@/libs/microcms"
import type { BlogType } from "@/types/blog"
import { MicroCMSQueries } from "microcms-js-sdk";

export const GET = async (
  request: Request,
  queries?: MicroCMSQueries,
  ) => {
  // searchParamsにリクエストされたURLをオブジェクトにして渡す
  // searchParamsはユーザーが検索で入力したものをすべて取得してくれる
  const { searchParams } = new URL(request.url)
  
  // searchParamsからURLのパラメーターを取得してqueryに代入
  const query = searchParams.get('query')
  console.log(searchParams.get('query'))

  // microCMSのクライアントを使用してデーター取得
  const posts = await client.getList<BlogType>({
    endpoint: "blogs",
    queries,
  });

  const filteredPosts = posts.contents.filter((post) => {
    return (
      post.content.toLowerCase().includes(query ?? "".toLowerCase()) ||
      post.title.toLowerCase().includes(query ?? "".toLowerCase())
    )
  })

  return NextResponse.json(filteredPosts)
}
