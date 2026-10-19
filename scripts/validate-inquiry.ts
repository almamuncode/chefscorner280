import assert from "node:assert/strict";
import { inquirySchema } from "../src/lib/inquiry.ts";
const contact = {
  kind: "contact",
  name: "Test Guest",
  email: "guest@example.com",
  phone: "",
  eventDate: "",
  guestCount: "",
  eventType: "",
  message: "A question about your menu.",
  website: "",
};
assert.ok(inquirySchema.safeParse(contact).success);
assert.ok(!inquirySchema.safeParse({ ...contact, email: "invalid" }).success);
assert.ok(!inquirySchema.safeParse({ ...contact, message: "short" }).success);
const catering = {
  ...contact,
  kind: "catering",
  phone: "570-555-0123",
  eventDate: "2099-10-20",
  guestCount: "30",
  eventType: "Office lunch",
};
assert.ok(inquirySchema.safeParse(catering).success);
for (const update of [
  { phone: "" },
  { guestCount: "0" },
  { guestCount: "3.5" },
  { guestCount: "10001" },
  { eventDate: "2020-01-01" },
  { eventDate: "2099-02-31" },
  { eventType: "" },
])
  assert.ok(!inquirySchema.safeParse({ ...catering, ...update }).success);
console.log(
  "Passed contact and catering validation checks, including invalid dates and guest counts.",
);
