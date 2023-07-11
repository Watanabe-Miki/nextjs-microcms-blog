import { BlogType } from "@/types/blog"
import BlogCard from "./BlogCard"

interface SearchBlogProps {
  searchPost: BlogType
}

const SearchBlog = ({ searchPost }: SearchBlogProps) => {
  return (
    <>
      <BlogCard
        id={searchPost.id}
        title={searchPost.title}
        imagePath={searchPost.eyecatch?.url ?? ""}
        category={searchPost.category?.tag ?? ""}
        date={searchPost.publishedAt ?? ""}
        upDate={searchPost.revisedAt ?? ""}
        tags={searchPost.tag ?? []}
      />
    </>
  )
}

export default SearchBlog
