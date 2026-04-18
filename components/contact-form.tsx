"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type ContactFormLabels = {
  typeLabel: string;
  nameLabel: string;
  emailLabel: string;
  subjectLabel: string;
  messageLabel: string;
  submitLabel: string;
  submittingLabel: string;
};

type FormState = {
  inquiryType: string;
  name: string;
  email: string;
  subject: string;
  message: string;
};

type ContactFormProps = {
  labels: ContactFormLabels;
  options: string[];
};

export default function ContactForm({ labels, options }: ContactFormProps) {
  const initialState: FormState = {
    inquiryType: options[0] ?? "General Inquiry",
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed.");
      }

      setStatus("success");
      setFeedback("Sent.");
      setForm(initialState);
    } catch (error) {
      setStatus("error");
      setFeedback(error instanceof Error ? error.message : "Failed.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 space-y-6 border border-white/18 p-6 md:p-8">
      <div>
        <Label htmlFor="inquiryType" className="text-white">
          {labels.typeLabel}
        </Label>
        <select
          id="inquiryType"
          value={form.inquiryType}
          onChange={(event) => updateField("inquiryType", event.target.value)}
          className="mt-2 h-11 w-full rounded-none border border-white/20 bg-black px-3 text-sm text-white"
        >
          {options.map((option) => (
            <option key={option} value={option} className="text-black">
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <Label htmlFor="name" className="text-white">
            {labels.nameLabel}
          </Label>
          <Input
            id="name"
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            className="mt-2 rounded-none border-white/20 bg-transparent text-white"
            required
          />
        </div>
        <div>
          <Label htmlFor="email" className="text-white">
            {labels.emailLabel}
          </Label>
          <Input
            id="email"
            type="email"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            className="mt-2 rounded-none border-white/20 bg-transparent text-white"
            required
          />
        </div>
      </div>

      <div>
        <Label htmlFor="subject" className="text-white">
          {labels.subjectLabel}
        </Label>
        <Input
          id="subject"
          value={form.subject}
          onChange={(event) => updateField("subject", event.target.value)}
          className="mt-2 rounded-none border-white/20 bg-transparent text-white"
          required
        />
      </div>

      <div>
        <Label htmlFor="message" className="text-white">
          {labels.messageLabel}
        </Label>
        <textarea
          id="message"
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          className="mt-2 min-h-40 w-full rounded-none border border-white/20 bg-transparent px-3 py-2 text-sm text-white"
          required
        />
      </div>

      {feedback ? (
        <p className={status === "success" ? "text-sm text-white/72" : "text-sm text-red-300"}>
          {feedback}
        </p>
      ) : null}

      <Button
        type="submit"
        disabled={status === "submitting"}
        className="h-11 rounded-none bg-white px-6 text-sm font-medium text-black hover:bg-white/86"
      >
        {status === "submitting" ? labels.submittingLabel : labels.submitLabel}
      </Button>
    </form>
  );
}
