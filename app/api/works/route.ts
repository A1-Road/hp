import { NextResponse } from "next/server"
import { supabaseServer } from "@/lib/supabase"
import type { Work } from "@/types/database"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const limit = Number.parseInt(searchParams.get("limit") || "100")
  const industry = searchParams.get("industry") || undefined
  const search = searchParams.get("search") || undefined

  let query = supabaseServer.from("works").select("*").order("created_at", { ascending: false })

  if (industry) {
    query = query.eq("industry", industry)
  }

  if (search && search.trim() !== "") {
    const searchTerm = `%${search}%`
    query = query.or(
      `title.ilike.${searchTerm},industry.ilike.${searchTerm},challenge.ilike.${searchTerm},solution.ilike.${searchTerm}`,
    )
  }

  if (limit) {
    query = query.limit(limit)
  }

  const { data, error } = await query

  if (error) {
    console.error("Error fetching works:", error)
    return NextResponse.json({ error: "Failed to fetch works" }, { status: 500 })
  }

  return NextResponse.json(data as Work[])
}
