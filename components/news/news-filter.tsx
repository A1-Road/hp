"use client"

import type React from "react"

import { useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FaSearch } from "react-icons/fa"

interface NewsFilterProps {
  categories: string[]
  selectedCategory?: string
  search?: string
}

export default function NewsFilter({ categories, selectedCategory, search }: NewsFilterProps) {
  const router = useRouter()
  const pathname = usePathname()
  const [searchTerm, setSearchTerm] = useState(search || "")

  // URLパラメータを更新する関数
  const updateUrlParams = (category?: string, search?: string) => {
    const params = new URLSearchParams()

    if (category) {
      params.set("category", category)
    }

    if (search && search.trim() !== "") {
      params.set("search", search)
    }

    const queryString = params.toString()
    router.push(`${pathname}${queryString ? `?${queryString}` : ""}`)
  }

  // カテゴリ選択時の処理
  const handleCategoryChange = (value: string) => {
    updateUrlParams(value === "all" ? undefined : value, searchTerm)
  }

  // 検索実行時の処理
  const handleSearch = () => {
    updateUrlParams(selectedCategory, searchTerm)
  }

  // Enterキーでの検索
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  return (
    <div className="bg-beige-100 p-4 rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-1">
          <label htmlFor="category-filter" className="block text-sm font-medium mb-2">
            カテゴリで絞り込み
          </label>
          <Select value={selectedCategory || "all"} onValueChange={handleCategoryChange}>
            <SelectTrigger id="category-filter">
              <SelectValue placeholder="カテゴリを選択" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">すべてのカテゴリ</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="col-span-1 md:col-span-2">
          <label htmlFor="search-filter" className="block text-sm font-medium mb-2">
            キーワード検索
          </label>
          <div className="flex gap-2">
            <Input
              id="search-filter"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="キーワードを入力"
              className="flex-1"
            />
            <Button onClick={handleSearch} type="button">
              <FaSearch className="mr-2 h-4 w-4" />
              検索
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
