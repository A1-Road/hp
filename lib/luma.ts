// Luma APIのレスポンス形式に合わせた型定義
export interface Event {
  id: string;
  title: string;
  description: string;
  start_time: string;
  end_time: string;
  location: string;
  slug: string;
  status: string;
  cover_image_url: string;
}

const LUMA_API_KEY = process.env.LUMA_API_KEY;
const LUMA_API_BASE_URL = "https://api.lu.ma/api/v1";

export async function getEvents(): Promise<Event[]> {
  // APIキーがない場合は空の配列を返す
  if (!LUMA_API_KEY) {
    return [];
  }

  try {
    const headers = new Headers();
    headers.append("x-luma-api-key", LUMA_API_KEY);
    headers.append("Content-Type", "application/json");

    const response = await fetch(`${LUMA_API_BASE_URL}/events`, {
      headers,
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch events: ${response.statusText}`);
    }

    const data = await response.json();
    return data.events;
  } catch (error) {
    console.error("Error fetching Luma events:", error);
    return [];
  }
}
