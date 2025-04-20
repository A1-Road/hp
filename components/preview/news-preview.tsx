"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Markdown } from "@/components/ui/markdown";

interface NewsPreviewProps {
  title: string;
  content: string;
}

export function NewsPreview({ title, content }: NewsPreviewProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Markdown content={content} />
      </CardContent>
    </Card>
  );
}
