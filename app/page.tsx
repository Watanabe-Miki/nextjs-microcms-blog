import Image from "next/image"
import { getList } from "@/libs/microcms"
import type { BlogType } from "@/types/blog"
import BlogCard from "./components/elements/BlogCard"
import SideBar from "./components/layouts/SideBar"
import styles from "./page.module.css"
import mainview from "../public/main/main.svg"

export default async function StaticPage() {
  const { contents, categories, tags } = await getList()

  return (
    <>
      <div className="inner">
        <div className="lg:flex items-center py-16">
          <div className="mb-16 lg:mb-none lg:mr-16 text-center lg:w-2/5">
            <h1 className={styles.title}>Solo Delight!</h1>
            <span className={styles.heading_ja}>- ひとりの愉しみ -</span>
            <p className="text-sm md:text-base leading-7 py-6">
              みんなでワイワイもいいけどひとりも愉しい。
              <br />
              そんなひとり時間のあれこれを発信します。
            </p>
          </div>
          <div className="relative h-auto md:w-3/5 mx-auto lg:mx-none">
            <Image
              src={mainview}
              width={600}
              height={500}
              style={{
                width: "100%",
                height: "auto",
              }}
              alt="Slolo Delight! - ひとりの愉しみ -"
              priority
            />
          </div>
        </div>
      </div>
      <div className="bg-[#f9f9f9] py-24">
        <div className="inner">
          <div className="lg:flex">
            <div className="lg:w-[70%] lg:mr-10 mb-6">
              <div className="mb-8 text-center">
                <h2 className={styles.heading_ja}>新着記事一覧</h2>
              </div>
              {!contents || contents.length === 0 ? (
                <p className="text-center py-11">記事がありません。</p>
              ) : (
                <ul>
                  {contents.slice(0, 6).map((post: BlogType) => {
                    return (
                      <li key={post.id} className="mb-6 last:mb-none">
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
            <div className="lg:w-[30%]">
              {/* <InputQuery /> */}
              <SideBar categories={categories} tags={tags} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
