"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { BlogType } from "@/types/blog"
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid"

interface SearchFormProps {
  onSearch: (query: string) => Promise<void>
}

const Form = ({ onSearch }: SearchFormProps) => {
  const [query, setQuery] = useState("")
  const router = useRouter()

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(typeof onSearch)
    
    if (onSearch) {
      await onSearch(query)
    }
    router.push('/searchList')

    setQuery('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex mb-6">
      <div className="relative mr-4 flex-1">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <MagnifyingGlassIcon className="h-6 w-6 text-gray-500" />
        </div>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="block p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-[0.25em] bg-white w-full"
          placeholder="キーワードを入力して下さい"
          required
        />
      </div>
      <button
        type="submit"
        className="text-white bg-main font-medium rounded-[0.25em] text-sm px-5 py-2 hover:opacity-60 transition-opacity"
      >
        検 索
      </button>
    </form>
  );
};

export default Form;
