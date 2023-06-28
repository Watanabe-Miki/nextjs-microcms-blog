import { NextResponse } from "next/server";
import { client } from "@/libs/microcms";
import type { CategoryType} from "@/types/blog";
import { MicroCMSQueries } from "microcms-js-sdk";

export const GET = async(
    request: Request,
    queries?: MicroCMSQueries,
  ) => {
  const categoryData = await client.getList<CategoryType>({
    endpoint: "categories",
    queries,
  });

  return NextResponse.json({ categoryData });
}