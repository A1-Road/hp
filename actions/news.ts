"use server";

import { createClient } from "microcms-js-sdk";

const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN!,
  apiKey: process.env.MICROCMS_API_KEY!,
});

export async function getNewsList() {
  try {
    const data = await client.getList({
      endpoint: "news",
    });
    return data;
  } catch (error) {
    console.error("Error fetching news:", error);
    throw error;
  }
}

export async function getNewsDetail(id: string) {
  try {
    const data = await client.getListDetail({
      endpoint: "news",
      contentId: id,
    });
    return data;
  } catch (error) {
    console.error("Error fetching news detail:", error);
    throw error;
  }
}
