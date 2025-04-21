"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

interface WorkPreviewProps {
  title: string;
  description: string;
  imageUrl: string;
}

export function WorkPreview({ title, description, imageUrl }: WorkPreviewProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {imageUrl && (
            <div className="relative aspect-video w-full overflow-hidden rounded-lg">
              <Image src={imageUrl} alt={title} fill className="object-cover" />
            </div>
          )}
          <div className="prose prose-sm max-w-none">{description}</div>
        </div>
      </CardContent>
    </Card>
  );
}
