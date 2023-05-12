import { Metadata } from "next";
import { getList } from "@/libs/microcms";
import type { BlogType } from "@/types/blog";
import BlogCard from "../components/elements/BlogCard";
import styles from "../page.module.css";

export const metadata: Metadata = {
  title: "記事一覧",
};

export default async function BlogList() {
  const { contents } = await getList();

  return (
    <>
      <div className="mb-8 text-center">
        <h2 className={styles.heading_ja}>記事一覧</h2>
      </div>
      {contents.length === 0 ? (
        <p className="text-center py-11">記事がありません。</p>
      ) : (
        <ul>
          {contents.map((post: BlogType) => {
            return (
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
            );
          })}
        </ul>
      )}
    </>
  );
}
