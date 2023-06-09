import { Metadata } from "next";
import { getList } from "@/libs/microcms";
import type { BlogType, TagType } from "@/types/blog";
import BlogCard from "../../components/elements/BlogCard";
import SideBar from "../../components/layouts/SideBar";
import styles from "../../page.module.css";

export const metadata: Metadata = {
  title: "検索結果一覧",
};

type paramsType = {
  id: string;
};

export async function generateStaticParams(): Promise<paramsType[]> {
  const { tags } = await getList();

  const tagPaths = tags.map((tag: TagType) => {
    return {
      id: tag.id,
    };
  });

  return [...tagPaths];
}

export default async function TagPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const { contents, categories, tags } = await getList();
  const tag = tags.find((t) => t.id === id);
  const filteredContents = contents.filter((content) =>
    content.tag?.some((tag) => tag.id === id)
  );

  return (
    <>
      <div className="bg-[#f9f9f9] py-24">
        <div className="inner">
          <div className="md:flex">
            <div className="md:w-3/4 md:mr-5">
              <div className="mb-8 text-center">
                <h2 className={styles.heading_ja}>
                  タグ {`”${tag?.name}”を含む記事一覧`}
                </h2>
              </div>
              {filteredContents.length === 0 ? (
                <p className="text-center py-11">該当する記事がありません。</p>
              ) : (
                <ul>
                  {filteredContents.map((post: BlogType) => (
                    <li key={post.id} className="mb-6">
                      <BlogCard
                        id={post.id}
                        title={post.title}
                        imagePath={post.eyecatch?.url ?? ""}
                        category={post.category?.tag ?? ""}
                        date={post.publishedAt ?? ""}
                        upDate={post.revisedAt ?? ""}
                        tags={post.tag ?? []}
                      />
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="hidden md:block w-1/4">
              <SideBar categories={categories} tags={tags} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
