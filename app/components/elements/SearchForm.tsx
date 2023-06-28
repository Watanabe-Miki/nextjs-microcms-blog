'use client'

import { useState } from "react"
import { BlogType } from "@/types/blog"
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid"

interface SearchFormProps {
  getSearchResults: (results: BlogType[]) => void
  getSearchQuery: (query: string) => void
}

const SearchForm = ({ 
  getSearchResults, 
  getSearchQuery 
}: SearchFormProps) => {
  const [query, setQuery] = useState('')
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const response = await fetch(`../../api/posts/search?query=${query}`);
    const resultPosts = await response.json()
    
    getSearchResults(resultPosts) 
    getSearchQuery(query)
  }

  return (
    <div className="mb-6">
      <span className="block mb-2">サイト内検索</span>
      <form onSubmit={handleSubmit} className="flex">
        <div className="relative mr-4">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-500" />
          </div>
          <input
            type="search"
            id="default-search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-[0.25em] bg-white"
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-[#36b8ad] font-medium rounded-[0.25em] text-sm px-5 py-2 hover: opacity-60"
        >
          検 索
        </button>
      </form>
    </div>
  );
}

export default SearchForm;