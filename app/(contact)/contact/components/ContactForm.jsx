"use client";

import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import styles from "../contact.module.css";

export default function ContactForm({ emailHref }) {
  const formRef = useRef(null);
  const [delivery, setDelivery] = useState("idle");
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();

  async function sendMessage() {
    setDelivery("sending");
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      reset();
      setDelivery("sent");
    } catch {
      setDelivery("error");
    }
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit(sendMessage, () => setDelivery("idle"))}
      onChange={() => { if (delivery !== "idle") setDelivery("idle"); }}
      className={styles.form}
      noValidate
    >
      <div className={styles.field}>
        <label htmlFor="name">Your name</label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          placeholder="First and last name"
          required
          readOnly={isSubmitting}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          {...register("name", { validate: (value) => !!value.trim() || "Enter your name." })}
        />
        {errors.name && <span id="name-error" className={styles.error}>{errors.name.message}</span>}
      </div>

      <div className={styles.field}>
        <label htmlFor="email">Email address</label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          required
          readOnly={isSubmitting}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          {...register("email", {
            required: "Enter your email address.",
            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email address." },
          })}
        />
        {errors.email && <span id="email-error" className={styles.error}>{errors.email.message}</span>}
      </div>

      <div className={styles.field}>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          rows="3"
          placeholder="What’s on your mind?"
          required
          readOnly={isSubmitting}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          {...register("message", { validate: (value) => !!value.trim() || "Write a message." })}
        />
        {errors.message && <span id="message-error" className={styles.error}>{errors.message.message}</span>}
      </div>

      <button type="submit" className={styles.submit} disabled={isSubmitting}>
        {isSubmitting ? "Sending…" : "Send message"}
      </button>
      <div role="status" className={styles.feedback}>
        {delivery === "sent" && "Message sent. Thanks for getting in touch!"}
        {delivery === "error" && <>Your message couldn’t be sent. Try again or <a href={emailHref}>email me directly</a>.</>}
      </div>
    </form>
  );
}
