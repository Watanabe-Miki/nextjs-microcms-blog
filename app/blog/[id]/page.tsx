import { notFound } from "next/navigation";
import Image from "next/image";
import { getDetail, getList } from "@/libs/microcms";
import { highlightCode } from "@/libs/highlightCode";
import type { BlogType, TagType } from "@/types/blog";
import FormatDate from "@/app/components/elements/FormatDate";
import Category from "@/app/components/elements/Category";
import Tag from "@/app/components/elements/Tag";
import styles from "../../page.module.css";
import "highlight.js/styles/hybrid.css";

type paramsType = {
  id: string;
};

export async function generateStaticParams(): Promise<paramsType[]> {
  const { contents } = await getList();

  const paths = contents.map((post: BlogType) => {
    return {
      id: post.id,
    };
  });

  return [...paths];
}

// titleタグに記事のタイトルを動的に入れる
export async function generateMetadata({ params }: { params: paramsType }) {
  const pageTitle = await getDetail(params.id);

  return {
    title: pageTitle.title,
  };
}

export default async function StaticDetailPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const post: BlogType = await getDetail(id);
  const body = highlightCode(post.content);
  const tags = post.tag;

  if (!tags || tags.length === 0) {
    return null;
  }

  if (!post) {
    notFound();
  }

  return (
    <>
      <div
        className="bg-white p-8 lg:p-10 rounded-lg"
        style={{
          boxShadow:
            "0 10px 15px -3px rgba(122, 123, 179, 0.25), 0 4px 6px -4px rgba(122, 123, 179, 0.25)",
        }}
      >
        <div className="mb-4 md:mb-7">
          <h1 className={styles.heading_ja}>{post.title}</h1>
        </div>
        <div className="md:flex">
          <div className="mb-4 md:mb-7 mr-[2em]">
            <Category category={post.category?.tag ?? ""} />
          </div>
          <div className="mb-4 md:mb-7 mr-auto">
            <ul className="flex items-center">
              {tags.map((tag: TagType) => {
                return (
                  <div
                    key={tag.id}
                    className="flex items-center mr-[0.5em]"
                  >
                    <Tag tag={tag.name} />
                  </div>
                );
              })}
            </ul>
          </div>
          <div className="mb-7">
            <span className="text-right flex items-center">
              <div className="relative h-auto mr-[0.5em]">
                <Image
                  src="/common/published.svg"
                  width={64}
                  height={64}
                  style={{
                    width: "1em",
                    height: "1em",
                  }}
                  alt="投稿日"
                />
              </div>
              <FormatDate datetime={post.publishedAt ?? ""} />
            </span>
            <span className="text-right flex items-center">
              <div className="relative h-auto mr-[0.5em]">
                <Image
                  src="/common/revised.svg"
                  width={64}
                  height={64}
                  style={{
                    width: "1em",
                    height: "1em",
                  }}
                  alt="更新日"
                />
              </div>
              <FormatDate datetime={post.revisedAt ?? ""} />
            </span>
          </div>
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: `${body}`,
          }}
        ></div>
      </div>
    </>
  );
}
