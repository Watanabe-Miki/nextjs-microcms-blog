import { NextResponse } from "next/server";
import { client } from "@/libs/microcms";
import type { TagType } from "@/types/blog";
import { MicroCMSQueries } from "microcms-js-sdk";

export const GET = async (
  request: Request,  
  queries?: MicroCMSQueries
) => {
  const tagData = await client.getList<TagType>({
    endpoint: "tags",
    queries,
  });

  return NextResponse.json({ tagData });
};
