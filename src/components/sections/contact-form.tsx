"use client";

import { FormEvent, useState } from "react";

type FormState = {
  name: string;
  email: string;
  company: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  message: "",
};

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error";
    message: string;
  }>({
    type: "idle",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      const payload = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(payload.message ?? "Unable to send message right now.");
      }

      setFormState(initialState);
      setStatus({
        type: "success",
        message: payload.message ?? "Message sent successfully.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Unable to send message right now.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-ambient sm:p-7">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-2 text-sm text-slate-300">
          <span>Name</span>
          <input
            type="text"
            name="name"
            value={formState.name}
            onChange={(event) =>
              setFormState((current) => ({ ...current, name: event.target.value }))
            }
            className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/40"
            placeholder="Your name"
            required
          />
        </label>

        <label className="space-y-2 text-sm text-slate-300">
          <span>Email</span>
          <input
            type="email"
            name="email"
            value={formState.email}
            onChange={(event) =>
              setFormState((current) => ({ ...current, email: event.target.value }))
            }
            className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/40"
            placeholder="you@company.com"
            required
          />
        </label>
      </div>

      <label className="mt-5 block space-y-2 text-sm text-slate-300">
        <span>Company or team</span>
        <input
          type="text"
          name="company"
          value={formState.company}
          onChange={(event) =>
            setFormState((current) => ({ ...current, company: event.target.value }))
          }
          className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/40"
          placeholder="Optional"
        />
      </label>

      <label className="mt-5 block space-y-2 text-sm text-slate-300">
        <span>Message</span>
        <textarea
          name="message"
          value={formState.message}
          onChange={(event) =>
            setFormState((current) => ({ ...current, message: event.target.value }))
          }
          rows={6}
          className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/40"
          placeholder="Tell me about the role, project, or collaboration you have in mind."
          required
        />
      </label>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-950 transition hover:bg-cyan-100 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Sending..." : "Send message"}
        </button>

        {status.message ? (
          <p
            className={
              status.type === "success"
                ? "text-sm text-emerald-300"
                : "text-sm text-rose-300"
            }
          >
            {status.message}
          </p>
        ) : (
          <p className="text-sm text-slate-400">
            Direct email is also welcome if you prefer a faster route.
          </p>
        )}
      </div>
    </form>
  );
}
