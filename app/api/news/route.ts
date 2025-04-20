import { NextResponse } from "next/server"
import { supabaseServer } from "@/lib/supabase"
import type { News } from "@/types/database"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const limit = Number.parseInt(searchParams.get("limit") || "100")
  const category = searchParams.get("category") || undefined
  const search = searchParams.get("search") || undefined

  let query = supabaseServer.from("news").select("*").order("date", { ascending: false })

  if (category) {
    query = query.eq("category", category)
  }

  if (search && search.trim() !== "") {
    const searchTerm = `%${search}%`
    query = query.or(
      `title.ilike.${searchTerm},category.ilike.${searchTerm},excerpt.ilike.${searchTerm},content.ilike.${searchTerm}`,
    )
  }

  if (limit) {
    query = query.limit(limit)
  }

  const { data, error } = await query

  if (error) {
    console.error("Error fetching news:", error)
    return NextResponse.json({ error: "Failed to fetch news" }, { status: 500 })
  }

  return NextResponse.json(data as News[])
}
