"use client";

import { useState } from "react";
import { locations, phone, INSTAGRAM_URL } from "@/lib/content";
import SectionLabel from "./SectionLabel";

type FieldName = "firstName" | "lastName" | "email" | "subject" | "message";

type FormState = Record<FieldName, string>;
type ErrorState = Partial<Record<FieldName, string>>;

const EMPTY: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  subject: "",
  message: "",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: FormState): ErrorState {
  const errors: ErrorState = {};
  if (!values.firstName.trim()) errors.firstName = "First name is required.";
  if (!values.lastName.trim()) errors.lastName = "Last name is required.";
  if (!values.email.trim()) {
    errors.email = "Email address is required.";
  } else if (!EMAIL_RE.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.subject.trim()) errors.subject = "Subject is required.";
  if (!values.message.trim()) {
    errors.message = "Message is required.";
  } else if (values.message.trim().length < 10) {
    errors.message = "Please add a little more detail (10+ characters).";
  }
  return errors;
}

const fields: {
  name: FieldName;
  label: string;
  type: string;
  autoComplete?: string;
  full?: boolean;
}[] = [
  { name: "firstName", label: "First Name", type: "text", autoComplete: "given-name" },
  { name: "lastName", label: "Last Name", type: "text", autoComplete: "family-name" },
  { name: "email", label: "Email Address", type: "email", autoComplete: "email", full: true },
  { name: "subject", label: "Subject", type: "text", full: true },
];

export default function Contact() {
  const [values, setValues] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<ErrorState>({});
  const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (name: FieldName, value: string) => {
    setValues((v) => ({ ...v, [name]: value }));
    if (touched[name]) {
      setErrors(validate({ ...values, [name]: value }));
    }
  };

  const handleBlur = (name: FieldName) => {
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors(validate(values));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    setTouched({
      firstName: true,
      lastName: true,
      email: true,
      subject: true,
      message: true,
    });
    if (Object.keys(found).length === 0) {
      setSubmitted(true);
    } else {
      // Focus the first invalid field for accessibility.
      const firstError = (Object.keys(found) as FieldName[])[0];
      document.getElementById(firstError)?.focus();
    }
  };

  const reset = () => {
    setValues(EMPTY);
    setErrors({});
    setTouched({});
    setSubmitted(false);
  };

  return (
    <section id="contact" className="bg-[var(--pft-base)] py-[120px]">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
        <SectionLabel>Contact</SectionLabel>
        <h2 className="section-heading mt-4 text-3xl font-light tracking-[0.18em] text-white sm:text-4xl lg:text-5xl">
          Get In Touch
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left — locations */}
          <div>
            <h3 className="font-display text-sm font-medium uppercase tracking-[0.26em] text-[var(--pft-muted)]">
              Find Me Here
            </h3>
            <div className="mt-7 space-y-5">
              {locations.map((loc) => (
                <div key={loc.label} className="address-card">
                  <p className="font-display text-xs uppercase tracking-[0.28em] text-[var(--pft-accent-bright)]">
                    {loc.label}
                  </p>
                  <p className="mt-3 text-[1.02rem] leading-relaxed text-white">
                    {loc.address}
                  </p>
                </div>
              ))}
              <div className="address-card flex items-center justify-between">
                <div>
                  <p className="font-display text-xs uppercase tracking-[0.28em] text-[var(--pft-accent-bright)]">
                    Phone
                  </p>
                  <a
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="mt-3 inline-block text-[1.02rem] text-white transition-colors hover:text-[var(--pft-accent-bright)]"
                  >
                    Ph: {phone}
                  </a>
                </div>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display text-xs uppercase tracking-[0.22em] text-[var(--pft-muted)] transition-colors hover:text-[var(--pft-accent-bright)]"
                >
                  @jakesbroja_pft
                </a>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div>
            <p className="text-[17px] leading-[1.8] text-[#d0d0d0]">
              For a services information package or any business enquiries, fill
              out the form below.
            </p>

            {submitted ? (
              <div
                role="status"
                className="mt-8 border-l-2 border border-[rgba(232,71,10,0.45)] border-l-[var(--pft-accent)] bg-[rgba(232,71,10,0.08)] p-8"
              >
                <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-[var(--pft-accent-bright)]">
                  Message sent
                </p>
                <p className="mt-3 text-white">
                  Thanks {values.firstName}, your message has been received.
                  Jake will be in touch shortly.
                </p>
                <button
                  type="button"
                  onClick={reset}
                  className="mt-6 font-display text-xs uppercase tracking-[0.2em] text-[var(--pft-muted)] underline-offset-4 transition-colors hover:text-white hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form noValidate onSubmit={handleSubmit} className="mt-8">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {fields.map((f) => (
                    <div key={f.name} className={f.full ? "sm:col-span-2" : ""}>
                      <label htmlFor={f.name} className="field-label">
                        {f.label}
                      </label>
                      <input
                        id={f.name}
                        name={f.name}
                        type={f.type}
                        autoComplete={f.autoComplete}
                        value={values[f.name]}
                        onChange={(e) => handleChange(f.name, e.target.value)}
                        onBlur={() => handleBlur(f.name)}
                        aria-invalid={Boolean(errors[f.name]) || undefined}
                        aria-describedby={
                          errors[f.name] ? `${f.name}-error` : undefined
                        }
                        className="field-input"
                      />
                      {errors[f.name] && (
                        <p
                          id={`${f.name}-error`}
                          className="mt-2 text-xs text-[#ff7585]"
                        >
                          {errors[f.name]}
                        </p>
                      )}
                    </div>
                  ))}

                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="field-label">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={values.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      onBlur={() => handleBlur("message")}
                      aria-invalid={Boolean(errors.message) || undefined}
                      aria-describedby={
                        errors.message ? "message-error" : undefined
                      }
                      className="field-input resize-y"
                    />
                    {errors.message && (
                      <p
                        id="message-error"
                        className="mt-2 text-xs text-[#ff7585]"
                      >
                        {errors.message}
                      </p>
                    )}
                  </div>
                </div>

                <button type="submit" className="btn-accent mt-8 w-full sm:w-auto">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
