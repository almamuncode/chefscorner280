import assert from "node:assert/strict";
import { getHoursStatus } from "../src/lib/hours.ts";
const cases: [string, boolean][] = [
  ["2026-10-19T14:29:00Z", false],
  ["2026-10-19T14:30:00Z", true],
  ["2026-10-20T00:00:00Z", false],
  ["2026-10-24T14:59:00Z", false],
  ["2026-10-24T15:00:00Z", true],
  ["2026-10-25T22:59:00Z", true],
  ["2026-10-25T23:00:00Z", false],
  ["2026-11-02T15:29:00Z", false],
  ["2026-11-02T15:30:00Z", true],
  ["2026-11-03T01:00:00Z", false],
];
for (const [instant, expected] of cases)
  assert.equal(getHoursStatus(new Date(instant)).open, expected, instant);
console.log(
  `Passed ${cases.length} Eastern Time opening, closing, weekend and daylight-saving checks.`,
);
