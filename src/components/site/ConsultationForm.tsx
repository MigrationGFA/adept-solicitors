import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";

type Field = {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  full?: boolean;
  options?: string[];
};

export function ConsultationForm({
  variant = "full",
  title = "Request a Consultation",
}: {
  variant?: "full" | "compact";
  title?: string;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const fields: Field[] =
    variant === "full"
      ? [
          { name: "firstName", label: "First name", required: true },
          { name: "lastName", label: "Last name", required: true },
          { name: "email", label: "Email address", type: "email", required: true },
          { name: "phone", label: "Phone number", type: "tel" },
          { name: "country", label: "Country / Region" },
          {
            name: "matter",
            label: "Practice area",
            options: [
              "Cross-border representation",
              "Corporate / Commercial",
              "Real Estate",
              "Immigration",
              "Dispute Resolution",
              "Wills & Estates",
              "Other",
            ],
          },
          {
            name: "message",
            label: "Briefly describe your matter",
            type: "textarea",
            required: true,
            full: true,
          },
        ]
      : [
          { name: "name", label: "Full name", required: true, full: true },
          { name: "email", label: "Email", type: "email", required: true, full: true },
          {
            name: "message",
            label: "How can we help?",
            type: "textarea",
            required: true,
            full: true,
          },
        ];

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const errs: Record<string, string> = {};
    fields.forEach((f) => {
      if (f.required && !String(data.get(f.name) ?? "").trim()) errs[f.name] = "Required";
    });
    const email = String(data.get("email") ?? "");
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = "Invalid email";
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-md border border-border bg-card p-8 shadow-card-soft text-center">
        <CheckCircle2 className="size-10 mx-auto text-gold mb-3" />
        <h3 className="font-display text-2xl font-semibold text-navy">Thank you</h3>
        <p className="mt-2 text-muted-foreground">
          We have received your request. A member of our team will reach out within one business
          day.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-md border border-border bg-card p-6 md:p-8 shadow-card-soft"
    >
      <h3 className="font-display text-2xl font-semibold text-navy mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground mb-6">
        All inquiries are confidential. We respond within one business day.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {fields.map((f) => (
          <div key={f.name} className={f.full ? "md:col-span-2" : ""}>
            <label htmlFor={f.name} className="block text-xs font-medium text-foreground/80 mb-1.5">
              {f.label} {f.required && <span className="text-destructive">*</span>}
            </label>
            {f.type === "textarea" ? (
              <textarea
                id={f.name}
                name={f.name}
                rows={5}
                maxLength={2000}
                className="w-full rounded-sm border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-y"
              />
            ) : f.options ? (
              <select
                id={f.name}
                name={f.name}
                className="w-full rounded-sm border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="">Select…</option>
                {f.options.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            ) : (
              <input
                id={f.name}
                name={f.name}
                type={f.type ?? "text"}
                maxLength={f.type === "email" ? 255 : 120}
                className="w-full rounded-sm border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
              />
            )}
            {errors[f.name] && <p className="text-xs text-destructive mt-1">{errors[f.name]}</p>}
          </div>
        ))}
      </div>
      <button
        type="submit"
        className="mt-6 w-full md:w-auto inline-flex items-center justify-center rounded-sm bg-navy text-navy-foreground px-7 py-3 text-sm font-medium hover:bg-navy/90 transition shadow-card-soft"
      >
        Submit Request
      </button>
    </form>
  );
}
