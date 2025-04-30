"use server";

import fs from "fs";
import path from "path";

export async function getEventImages() {
  const directory = path.join(process.cwd(), "public/event-sumbnails");

  try {
    const files = fs.readdirSync(directory);
    return files.filter(
      (file) =>
        file.endsWith(".jpg") ||
        file.endsWith(".jpeg") ||
        file.endsWith(".png") ||
        file.endsWith(".avif") ||
        file.endsWith(".webp")
    );
  } catch (error) {
    console.error("Error reading event images directory:", error);
    return [];
  }
}
