import { getList } from "@/libs/microcms";
import type { BlogType, CategoryType } from "@/types/blog";
import BlogCard from "../../components/elements/BlogCard";
import SideBar from "../../components/layouts/SideBar";
import styles from "../../page.module.css";

type paramsType = {
  id: string;
};

export async function generateStaticParams(): Promise<paramsType[]> {
  const { categories } = await getList();

  const categoryPaths = categories.map((category: CategoryType) => {
    return {
      id: category.id,
    };
  });

  return [...categoryPaths]
}

export default async function CategoryPage({
  params: { id },
}: {
  params: { id: string }
}) {
  const { contents, categories, tags } = await getList()
  const category = categories.find((c) => c.id === id)
  const filteredContents = contents.filter(
    (content) => content.category?.id === id
  )
    
  return (
    <>
      <div className="bg-[#f9f9f9] py-24">
        <div className="inner">
          <div className="md:flex">
            <div className="md:w-3/4 md:mr-5">
              <div className="mb-4 text-center">
                <h2 className={styles.heading_ja}>カテゴリー {`”${category?.tag}”の記事一覧`}</h2>
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
