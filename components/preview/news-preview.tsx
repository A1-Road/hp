"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
        <div className="prose prose-sm max-w-none">{content}</div>
      </CardContent>
    </Card>
  );
}
