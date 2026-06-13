// src/components/QuoteForm.tsx

"use client";

import Image from "next/image";
import { useState } from "react";
import { siteData } from "@/data/site";

export default function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("sending");
    setMessage("");

    const formData = new FormData(event.currentTarget);

    const payload = {
      name: String(formData.get("name") || ""),
      phone: String(formData.get("phone") || ""),
      projectType: String(formData.get("projectType") || ""),
      details: String(formData.get("details") || ""),
      website: String(formData.get("website") || ""),
    };

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
        return;
      }

      event.currentTarget.reset();
      setStatus("success");
      setMessage("Your quote request was sent. Apex will follow up soon.");
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <aside className="quote-card" aria-label="Quote request form">
      <div className="quote-top">
        <span className="quote-logo">
          <Image
            src={siteData.logo}
            alt="Apex Erosion Systems logo"
            width={72}
            height={72}
          />
        </span>

        <div>
          <p className="quote-kicker">Quote request</p>
          <h2>{siteData.quote.title}</h2>
        </div>
      </div>

      <p>{siteData.quote.text}</p>

      <form className="quote-form" onSubmit={handleSubmit}>
        <input
          className="quote-honeypot"
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        {siteData.quote.fields.map((field) => (
          <label key={field.name} className="form-field">
            <span>{field.label}</span>

            {field.type === "textarea" ? (
              <textarea
                name={field.name}
                placeholder={field.placeholder}
                rows={4}
                required
              />
            ) : field.type === "select" ? (
              <select name={field.name} defaultValue="" required>
                <option value="" disabled>
                  {field.placeholder}
                </option>
                {field.options?.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <input
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                required
              />
            )}
          </label>
        ))}

        <button
          type="submit"
          className="button button-primary quote-button"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending..." : siteData.quote.button}
        </button>

        {message && (
          <p
            className={
              status === "success"
                ? "quote-message quote-message-success"
                : "quote-message quote-message-error"
            }
          >
            {message}
          </p>
        )}
      </form>
    </aside>
  );
}