'use client'

import { useState } from "react";
import type { BlogType } from "@/types/blog";
import Form from "../components/elements/Form";
import styles from "../page.module.css"
import SearchBlog from "../components/elements/SearchBlog"

export default function SearchList() {
  const [query, setQuery] = useState("")
  const [resultPosts, setResultPosts] = useState<BlogType[]>([])

  const handleSearch = async (query: string) => {
    const response = await fetch(`../../api/posts/search?query=${query}`)
    const newResultPosts: BlogType[] = await response.json()
    setQuery(query)
    setResultPosts(newResultPosts)
  }

  return (
    <>
      <div>
        <div>
          <Form onSearch={handleSearch} />
        </div>
        <div>
          {!resultPosts || resultPosts.length === 0 ? (
            <p className="text-center py-11">該当する記事がありません。</p>
          ) : (
              <>
                <div className="mb-8 text-center">
                  <h2 className={styles.heading_ja}>{`"${query}"`} を含む記事一覧</h2>
                </div>
                <ul>
                  {resultPosts.map((searchPost: BlogType) => (
                    <li key={searchPost.id} className="mb-6 last:mb-none">
                      <SearchBlog searchPost={searchPost} />
                    </li>
                  ))}
                </ul>
              </>
          )}
        </div>
      </div>
    </>
  );
}
