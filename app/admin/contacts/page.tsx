"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { format } from "date-fns";
import { ja } from "date-fns/locale";
import { Search, Eye, ChevronLeft, ChevronRight } from "lucide-react";

interface Contact {
  id: string;
  name: string;
  company: string | null;
  email: string;
  phone: string | null;
  inquiry_type: string;
  message: string;
  privacy_agreed: boolean;
  status: "pending" | "in_progress" | "completed";
  created_at: string;
}

const ITEMS_PER_PAGE = 10;

export default function ContactsPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const router = useRouter();

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
  }, [router]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        setIsLoading(true);
        let query = supabase.from("contacts").select("*", { count: "exact" });

        if (statusFilter !== "all") {
          query = query.eq("status", statusFilter);
        }

        if (searchQuery) {
          query = query.or(
            `name.ilike.%${searchQuery}%,company.ilike.%${searchQuery}%,email.ilike.%${searchQuery}%,message.ilike.%${searchQuery}%`
          );
        }

        const { data, error, count } = await query
          .order("created_at", { ascending: false })
          .range((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE - 1);

        if (error) throw error;
        setContacts(data || []);
        setTotalCount(count || 0);
      } catch (error) {
        console.error("Error fetching contacts:", error);
        toast.error("お問い合わせの取得に失敗しました");
      } finally {
        setIsLoading(false);
      }
    };

    fetchContacts();
  }, [searchQuery, statusFilter, currentPage]);

  const getInquiryTypeLabel = (type: string) => {
    switch (type) {
      case "service":
        return "サービスについて";
      case "project":
        return "プロジェクトの相談";
      case "partnership":
        return "業務提携について";
      case "recruitment":
        return "採用について";
      case "other":
        return "その他";
      default:
        return type;
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "pending":
        return "未対応";
      case "in_progress":
        return "対応中";
      case "completed":
        return "対応済み";
      default:
        return status;
    }
  };

  const updateStatus = async (contactId: string, newStatus: Contact["status"]) => {
    try {
      const { error } = await supabase
        .from("contacts")
        .update({ status: newStatus })
        .eq("id", contactId);

      if (error) throw error;

      setContacts((prev) =>
        prev.map((contact) =>
          contact.id === contactId ? { ...contact, status: newStatus } : contact
        )
      );
      toast.success("ステータスを更新しました");
    } catch (error) {
      console.error("Error updating status:", error);
      toast.error("ステータスの更新に失敗しました");
    }
  };

  const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);

  if (isLoading) {
    return (
      <div className="container-custom py-8">
        <div className="text-center">読み込み中...</div>
      </div>
    );
  }

  return (
    <div className="container-custom py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">お問い合わせ一覧</h1>
      </div>

      <div className="flex gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="検索..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            className="pl-10"
          />
        </div>
        <Select
          value={statusFilter}
          onValueChange={(value) => {
            setStatusFilter(value);
            setCurrentPage(1);
          }}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="ステータスで絞り込み" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">すべて</SelectItem>
            <SelectItem value="pending">未対応</SelectItem>
            <SelectItem value="in_progress">対応中</SelectItem>
            <SelectItem value="completed">対応済み</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>日時</TableHead>
              <TableHead>お名前</TableHead>
              <TableHead>会社名</TableHead>
              <TableHead>メールアドレス</TableHead>
              <TableHead>電話番号</TableHead>
              <TableHead>お問い合わせ内容</TableHead>
              <TableHead>ステータス</TableHead>
              <TableHead>操作</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {contacts.map((contact) => (
              <TableRow key={contact.id}>
                <TableCell>
                  {format(new Date(contact.created_at), "yyyy/MM/dd HH:mm", {
                    locale: ja,
                  })}
                </TableCell>
                <TableCell>{contact.name}</TableCell>
                <TableCell>{contact.company || "-"}</TableCell>
                <TableCell>
                  <a href={`mailto:${contact.email}`} className="text-primary hover:underline">
                    {contact.email}
                  </a>
                </TableCell>
                <TableCell>{contact.phone || "-"}</TableCell>
                <TableCell>{getInquiryTypeLabel(contact.inquiry_type)}</TableCell>
                <TableCell>
                  <Select
                    value={contact.status}
                    onValueChange={(value: Contact["status"]) => updateStatus(contact.id, value)}
                  >
                    <SelectTrigger className="w-[120px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pending">未対応</SelectItem>
                      <SelectItem value="in_progress">対応中</SelectItem>
                      <SelectItem value="completed">対応済み</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon" onClick={() => setSelectedContact(contact)}>
                    <Eye className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between mt-4">
        <div className="text-sm text-gray-500">
          全{totalCount}件中 {(currentPage - 1) * ITEMS_PER_PAGE + 1}〜
          {Math.min(currentPage * ITEMS_PER_PAGE, totalCount)}件を表示
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div className="text-sm">
            {currentPage} / {totalPages}
          </div>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Dialog open={!!selectedContact} onOpenChange={() => setSelectedContact(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>お問い合わせ詳細</DialogTitle>
          </DialogHeader>
          {selectedContact && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">お名前</p>
                  <p>{selectedContact.name}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">会社名</p>
                  <p>{selectedContact.company || "-"}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">メールアドレス</p>
                  <p>{selectedContact.email}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">電話番号</p>
                  <p>{selectedContact.phone || "-"}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">お問い合わせ種別</p>
                  <p>{getInquiryTypeLabel(selectedContact.inquiry_type)}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">ステータス</p>
                  <p>{getStatusLabel(selectedContact.status)}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-sm font-medium text-gray-500">メッセージ</p>
                  <p className="whitespace-pre-wrap">{selectedContact.message}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-sm font-medium text-gray-500">受信日時</p>
                  <p>
                    {format(new Date(selectedContact.created_at), "yyyy/MM/dd HH:mm", {
                      locale: ja,
                    })}
                  </p>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
