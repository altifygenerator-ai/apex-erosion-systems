// src/components/QuoteForm.tsx

import { siteData } from "@/data/site";

export default function QuoteForm() {
  return (
    <aside className="quote-card" aria-label="Quote request form">
      <p className="quote-kicker">Quote request</p>
      <h2>{siteData.quote.title}</h2>
      <p>{siteData.quote.text}</p>

      <form className="quote-form">
        {siteData.quote.fields.map((field) => (
          <label key={field.name} className="form-field">
            <span>{field.label}</span>

            {field.type === "textarea" ? (
              <textarea name={field.name} placeholder={field.placeholder} rows={4} />
            ) : field.type === "select" ? (
              <select name={field.name} defaultValue="">
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
              />
            )}
          </label>
        ))}

        <button type="button" className="button button-primary quote-button">
          {siteData.quote.button}
        </button>
      </form>
    </aside>
  );
}