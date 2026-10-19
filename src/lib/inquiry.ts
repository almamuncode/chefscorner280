import { z } from "zod";
const text = (max: number) => z.string().trim().max(max);
export const inquirySchema = z
  .object({
    kind: z.enum(["contact", "catering"]),
    name: text(100).min(2, "Please enter your name."),
    email: z.email("Please enter a valid email.").max(254),
    phone: text(30).refine(
      (v) =>
        !v ||
        (/^[+()\d\s.\-]{7,30}$/.test(v) && v.replace(/\D/g, "").length >= 7),
      "Please enter a valid phone number.",
    ),
    eventDate: text(10),
    guestCount: text(5),
    eventType: text(80),
    message: text(5000).min(10, "Please include at least 10 characters."),
    website: text(200),
  })
  .superRefine((value, ctx) => {
    if (value.kind !== "catering") return;
    if (!value.phone)
      ctx.addIssue({
        code: "custom",
        path: ["phone"],
        message: "Please enter a phone number.",
      });
    const today = new Intl.DateTimeFormat("en-CA", {
      timeZone: "America/New_York",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(new Date());
    if (
      !/^\d{4}-\d{2}-\d{2}$/.test(value.eventDate) ||
      Number.isNaN(Date.parse(value.eventDate)) ||
      (!Number.isNaN(Date.parse(value.eventDate)) &&
        new Date(value.eventDate).toISOString().slice(0, 10) !==
          value.eventDate) ||
      value.eventDate < today
    )
      ctx.addIssue({
        code: "custom",
        path: ["eventDate"],
        message: "Please choose a current or future event date.",
      });
    const guests = Number(value.guestCount);
    if (!Number.isInteger(guests) || guests < 1 || guests > 10000)
      ctx.addIssue({
        code: "custom",
        path: ["guestCount"],
        message: "Please enter 1–10,000 guests.",
      });
    if (!value.eventType)
      ctx.addIssue({
        code: "custom",
        path: ["eventType"],
        message: "Please select an event type.",
      });
  });
