"use client";

import { Star, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function TestPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-950 p-10 text-white">
      <Card className="w-full max-w-sm border border-zinc-700 bg-zinc-900">
        <CardContent className="p-6">
          <div className="mb-6 text-center">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-zinc-800">
              <Star className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold">Standard License</h3>
            <div className="mt-2 text-3xl font-bold">$2.99</div>
          </div>

          <ul className="mb-6 space-y-2 text-sm text-zinc-300">
            <li className="flex items-center">
              <Check className="mr-2 h-4 w-4" /> Used for Music Recording
            </li>
            <li className="flex items-center">
              <Check className="mr-2 h-4 w-4" /> Distribute up to 5,000 copies
            </li>
          </ul>

          <Button className="w-full bg-white text-black hover:bg-zinc-200">
            Get Started
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
