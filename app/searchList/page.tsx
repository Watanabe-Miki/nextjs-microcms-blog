'use client'

import { useState, useEffect } from "react"
import type { BlogType } from "@/types/blog";
import styles from "../page.module.css"
import SearchForm from "../components/elements/SearchForm"
import SearchData from "../components/elements/SearchData"

export default async function SearchList() {
  const [searchPosts, setSearchPosts] = useState<BlogType[]>([])
  const [searchQuery, setSearchQuery] = useState<string>('')

  // ページがロードする度にブログデータを呼び出す
  useEffect(() => {
    const fetchData = async () => {
      const postResponse = await fetch('../api/posts');
      const searchPosts = await postResponse.json()
      setSearchPosts(searchPosts.contents)
    }

    fetchData()
  }, [])

  return (
    <>
      <div>
        <div>
          <SearchForm
            getSearchResults={(results: BlogType[]) => setSearchPosts(results)}
            getSearchQuery={(query: string) => setSearchQuery(query)}
          />
        </div>
        <div className="mb-8 text-center">
          <h2 className={styles.heading_ja}>
            {`"${searchQuery}"`} を含む記事一覧
          </h2>
        </div>
        <div>
          {!searchPosts || searchPosts.length === 0 ? (
            <p className="text-center py-11">該当する記事がありません。</p>
          ) : (
            <ul>
              {searchPosts.map((searchPost: BlogType) => (
                <li key={searchPost.id} className="mb-6 last:mb-none">
                  <SearchData searchPost={searchPost} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}
