"use server";

import { createClient } from "microcms-js-sdk";

function getClient() {
  const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN;
  const apiKey = process.env.MICROCMS_API_KEY;

  if (!serviceDomain || !apiKey) {
    throw new Error("MICROCMS_SERVICE_DOMAIN and MICROCMS_API_KEY are required");
  }

  return createClient({
    serviceDomain,
    apiKey,
  });
}

export async function getNewsList() {
  try {
    const data = await getClient().getList({
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
    const data = await getClient().getListDetail({
      endpoint: "news",
      contentId: id,
    });
    return data;
  } catch (error) {
    console.error("Error fetching news detail:", error);
    throw error;
  }
}
