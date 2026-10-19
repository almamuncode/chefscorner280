import { site } from "../data/site.ts";
export function getHoursStatus(now = new Date()) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: site.timezone,
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    hourCycle: "h23",
  }).formatToParts(now);
  const part = (type: string) =>
    parts.find((p) => p.type === type)?.value || "";
  const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(
    part("weekday"),
  );
  const hours =
    site.weeklyHours.find((h) => h.day === day) || site.weeklyHours[0];
  const minutes = Number(part("hour")) * 60 + Number(part("minute"));
  return {
    open: minutes >= hours.open && minutes < hours.close,
    hours: hours.label,
  };
}
