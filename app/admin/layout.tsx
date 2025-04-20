"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { useLayout } from "../contexts/header-context";
import Link from "next/link";
import { Mail, Newspaper, Users, Trophy, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { setIsHeaderVisible, setIsFooterVisible } = useLayout();

  useEffect(() => {
    const checkAuth = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (!session) {
        router.push("/admin/login");
      }
    };

    checkAuth();
    setIsHeaderVisible(false);
    setIsFooterVisible(false);

    return () => {
      setIsHeaderVisible(true);
      setIsFooterVisible(true);
    };
  }, [router, setIsHeaderVisible, setIsFooterVisible]);

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      toast.success("ログアウトしました");
      router.push("/admin/login");
    } catch (error) {
      console.error("Error logging out:", error);
      toast.error("ログアウトに失敗しました");
    }
  };

  return (
    <div className="flex min-h-screen">
      <div className="w-64 border-r bg-gray-50 dark:bg-gray-900">
        <div className="flex h-16 items-center border-b px-4">
          <h1 className="text-lg font-semibold">管理画面</h1>
        </div>
        <nav className="grid gap-2 p-4">
          <Link
            href="/admin/contacts"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-50"
          >
            <Mail className="h-4 w-4" />
            お問い合わせ一覧
          </Link>
          <Link
            href="/admin/news"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-50"
          >
            <Newspaper className="h-4 w-4" />
            ニュース管理
          </Link>
          <Link
            href="/admin/members"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-50"
          >
            <Users className="h-4 w-4" />
            メンバー管理
          </Link>
          <Link
            href="/admin/works"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-50"
          >
            <Trophy className="h-4 w-4" />
            実績管理
          </Link>
          <div className="mt-auto">
            <button
              onClick={handleLogout}
              className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-red-500 transition-all hover:bg-gray-100 hover:text-red-700 dark:text-red-400 dark:hover:bg-gray-800 dark:hover:text-red-300"
            >
              <LogOut className="h-4 w-4" />
              ログアウト
            </button>
          </div>
        </nav>
      </div>
      <div className="flex-1">
        <main className="py-10">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </div>
  );
}
