"use server";

export type YouTubeVideo = {
  snippet: {
    title: string;
    resourceId: {
      videoId: string;
    };
  };
};

export async function getYoutubeVideos(): Promise<YouTubeVideo[]> {
  try {
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=6&playlistId=PLTf_ID6qmwYIwa4KLmc_wfptX_Pzkc49H&key=${process.env.YOUTUBE_API_KEY}`,
      { next: { revalidate: 3600 } } // Cache for 1 hour
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch YouTube videos: ${res.status}`);
    }

    const data = await res.json();
    return data.items || [];
  } catch (error) {
    console.error("Error fetching YouTube videos:", error);
    return [];
  }
}
