"use client";

import { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_6o6xn29";
const TEMPLATE_ID = "template_rv42m89";
const PUBLIC_KEY = "GmjZd4EPs4f5MV-vF";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Client-side validation
    if (!name.trim() || !contact.trim()) return;
    if (message.trim().length < 10) return;

    setStatus("sending");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          title: name.trim(),
          from_name: name.trim(),
          contact: contact.trim(),
          message: message.trim(),
          email: contact.trim(),
        },
        PUBLIC_KEY
      );
      setStatus("success");
      setName("");
      setContact("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-[var(--bg-surface)] p-8 rounded-lg border border-[var(--bg-surface)] shadow-lg flex flex-col items-center justify-center min-h-[360px] text-center">
        <svg className="w-16 h-16 text-[var(--brand-accent)] mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="text-2xl font-bold text-[var(--text-base)] mb-2">Message Sent!</h3>
        <p className="text-[var(--text-muted)] mb-6">Thank you for reaching out. I'll get back to you soon.</p>
        <button
          onClick={() => setStatus("idle")}
          className="px-6 py-3 rounded-lg border border-[var(--brand-primary)] text-[var(--brand-primary)] font-medium hover:bg-[var(--brand-primary)]/10 transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[var(--bg-surface)] p-8 rounded-lg border border-[var(--bg-surface)] shadow-lg relative overflow-hidden">
      <h3 className="text-2xl font-bold mb-6">Send a Quick Message</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-[var(--text-muted)] mb-1" htmlFor="name">Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-[var(--bg-base)] border border-[var(--bg-base)] focus:border-[var(--brand-primary)] focus:ring-1 focus:ring-[var(--brand-primary)] outline-none transition-colors text-[var(--text-base)]"
            placeholder="Jane Doe"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[var(--text-muted)] mb-1" htmlFor="contact">Email or Phone *</label>
          <input
            type="text"
            id="contact"
            name="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-[var(--bg-base)] border border-[var(--bg-base)] focus:border-[var(--brand-primary)] focus:ring-1 focus:ring-[var(--brand-primary)] outline-none transition-colors text-[var(--text-base)]"
            placeholder="name@company.com"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[var(--text-muted)] mb-1" htmlFor="message">Message *</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-[var(--bg-base)] border border-[var(--bg-base)] focus:border-[var(--brand-primary)] focus:ring-1 focus:ring-[var(--brand-primary)] outline-none transition-colors resize-none text-[var(--text-base)]"
            placeholder="Hi Sushant, I would love to connect to discuss..."
            required
            minLength={10}
          ></textarea>
          {message.length > 0 && message.length < 10 && (
            <p className="text-xs text-[var(--brand-secondary)] mt-1">{10 - message.length} more characters needed</p>
          )}
        </div>

        {status === "error" && (
          <div className="text-sm text-[var(--brand-secondary)] bg-[var(--brand-secondary)]/10 px-4 py-3 rounded-lg">
            Something went wrong. Please try again or email me directly.
          </div>
        )}

        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full py-4 rounded-lg bg-[var(--brand-primary)] text-[var(--bg-base)] font-bold hover:opacity-90 transition-opacity flex justify-center items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "sending" ? (
            <>
              <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Sending...
            </>
          ) : (
            <>
              Send Message
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
