import { getList } from "@/libs/microcms";
import type { BlogType } from "@/types/blog";
import BlogCard from "../components/elements/BlogCard";
import SideBar from "../components/layouts/SideBar";
import styles from "./page.module.css";

export default async function BlogList() {
  const { contents, categories, tags } = await getList();

  return (
    <>
      <div className="bg-[#f9f9f9] py-24">
        <div className="inner">
          <div className="md:flex">
            <div className="md:w-3/4 md:mr-10">
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
