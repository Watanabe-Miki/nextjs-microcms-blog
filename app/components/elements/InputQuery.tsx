'use client'

import { useState } from "react"
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid"
import SearchForm from "./SearchForm";

const InputQuery = () => {
  const [inputQuery, setInputQuery] = useState('初期値');
  const handleInputQuery = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInputQuery(inputQuery)
    const query = inputQuery
  }

  return (
    <div className="mb-6">
      <span className="block mb-2">サイト内検索</span>
      <form onSubmit={handleInputQuery} className="flex">
        <div className="relative w-3/4 mr-auto">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-500" />
          </div>
          <input
            type="search"
            id="default-search"
            value={inputQuery}
            onChange={(e) => setInputQuery(e.target.value)}
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
};

export default InputQuery;
