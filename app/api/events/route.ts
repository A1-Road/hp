import { getEvents } from "@/actions/events";
import { createClient } from "@supabase/supabase-js";

export const runtime = "edge";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Missing Supabase environment variables");
}

const supabase = createClient(supabaseUrl, supabaseKey);

export async function GET() {
  try {
    const events = await getEvents();
    return new Response(JSON.stringify(events), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching events:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch events" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
