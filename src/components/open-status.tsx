"use client";
import { useEffect, useState } from "react";
import { getHoursStatus } from "@/lib/hours";
export function OpenStatus() {
  const [status, setStatus] = useState<ReturnType<
    typeof getHoursStatus
  > | null>(null);
  useEffect(() => {
    const refresh = () => setStatus(getHoursStatus());
    refresh();
    const timer = setInterval(refresh, 60000);
    return () => clearInterval(timer);
  }, []);
  return (
    <span className="open-status">
      <span className={status?.open ? "status-dot is-open" : "status-dot"} />
      {status ? (
        <>
          <strong>{status.open ? "Open now" : "Closed now"}</strong>
          <span className="status-separator">·</span>Today {status.hours}
        </>
      ) : (
        "Hours in Eastern Time"
      )}
    </span>
  );
}
