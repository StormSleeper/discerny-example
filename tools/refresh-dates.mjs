#!/usr/bin/env node
// Moves every date in a Discerny data folder forward by whole weeks, so the Example looks
// current. Runs on plain Node with no dependencies.
//   node tools/refresh-dates.mjs [--to <YYYY-MM-DD>] [<folder>]
// The folder defaults to the one this tool sits in. The README's "**As of:**" line says what
// date the data is as of; a README without it counts as Monday 12 October 2026. Without --to,
// the dates move by the whole weeks from the as-of date to today. With --to, they move so the
// as-of date becomes that date, which must be a whole number of weeks away.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const DAY = 86400000;
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const AS_OF = /^\*\*As of:\*\* \w+ (\d{1,2}) (\w+) (\d{4})/m;

const iso = (t) => new Date(t).toISOString().slice(0, 10);
const day = (s) => Date.parse(s + 'T00:00:00Z');

function fail(msg) {
  console.error(msg);
  process.exit(1);
}

const args = process.argv.slice(2);
let to = null, dir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
for (let i = 0; i < args.length; i++) {
  if (args[i] === '--to') to = args[++i];
  else dir = path.resolve(args[i]);
}

const readme = path.join(dir, 'README.md');
const readmeText = fs.existsSync(readme) ? fs.readFileSync(readme, 'utf8') : '';
const m = readmeText.match(AS_OF);
const asOf = m ? Date.UTC(+m[3], MONTHS.indexOf(m[2]), +m[1]) : day('2026-10-12');

let days;
if (to) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(to) || isNaN(day(to))) fail(`--to must be a date, YYYY-MM-DD: ${to}`);
  days = Math.round((day(to) - asOf) / DAY);
  if (days % 7) fail(`--to must be a whole number of weeks from the as-of date, ${iso(asOf)}: ${to} is ${days} days away.`);
} else {
  const now = new Date();
  days = Math.trunc((Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()) - asOf) / DAY / 7) * 7;
}
const by = days * DAY;

// Prose dates: "8 Oct", "Tue 20 Oct" (the weekday stays right, as the shift is whole weeks),
// "16 October", "12 Sep 2026", and ranges such as "17–19 Nov" or "31 Dec–2 Jan". The month keeps
// its spelling and case. A date with no year takes the year that puts it nearest the as-of date.
const MON = '(Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|June?|July?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)';
const PROSE = new RegExp(`(?<![\\w.:-])(\\d{1,2})(?:(?: ${MON})?–(\\d{1,2}))? ${MON}(?: (\\d{4}))?(?![\\w])`, 'gi');

const monthOf = (s) => MONTHS.findIndex(n => n.slice(0, 3).toLowerCase() === s.slice(0, 3).toLowerCase());
function spell(month, like) {
  const n = like.length === 3 ? MONTHS[month].slice(0, 3) : MONTHS[month];
  return like === like.toLowerCase() ? n.toLowerCase() : like === like.toUpperCase() ? n.toUpperCase() : n;
}
function nearest(d, month) {
  const y = new Date(asOf).getUTCFullYear();
  return [y - 1, y, y + 1].map(v => Date.UTC(v, month, d)).sort((a, b) => Math.abs(a - asOf) - Math.abs(b - asOf))[0];
}

function shiftProse(all, d1, mon1, d2, mon2, year) {
  const end = year ? Date.UTC(+year, monthOf(mon2), +d2 || +d1) : nearest(+d2 || +d1, monthOf(mon2));
  const startMonth = monthOf(mon1 || mon2);
  let start = Date.UTC(new Date(end).getUTCFullYear(), startMonth, +d1);
  if (start > end) start = Date.UTC(new Date(end).getUTCFullYear() - 1, startMonth, +d1);
  const a = new Date(start + by), b = new Date(end + by);
  const y = year ? ` ${b.getUTCFullYear()}` : '';
  if (!d2) return `${b.getUTCDate()} ${spell(b.getUTCMonth(), mon2)}${y}`;
  if (a.getUTCMonth() === b.getUTCMonth()) return `${a.getUTCDate()}–${b.getUTCDate()} ${spell(b.getUTCMonth(), mon2)}${y}`;
  return `${a.getUTCDate()} ${spell(a.getUTCMonth(), mon1 || mon2)}–${b.getUTCDate()} ${spell(b.getUTCMonth(), mon2)}${y}`;
}

const shiftText = (s) => s
  .replace(/(?<![\d-])(\d{4}-\d{2}-\d{2})(?!\d)/g, (all, d) => iso(day(d) + by))
  .replace(PROSE, shiftProse);

for (const f of fs.readdirSync(dir, { recursive: true })) {
  const p = path.join(dir, f);
  if (!f.endsWith('.md') || f === 'README.md' || !fs.statSync(p).isFile()) continue;
  const was = fs.readFileSync(p, 'utf8'), now = shiftText(was);
  if (now !== was) fs.writeFileSync(p, now);
}

const n = new Date(asOf + by);
const line = `**As of:** ${WEEKDAYS[n.getUTCDay()]} ${n.getUTCDate()} ${MONTHS[n.getUTCMonth()]} ${n.getUTCFullYear()}`;
if (m) {
  const next = readmeText.replace(/^\*\*As of:\*\* \w+ \d{1,2} \w+ \d{4}/m, line);
  if (next !== readmeText) fs.writeFileSync(readme, next);
}
console.log(`Moved the dates by ${days / 7} weeks. The data is now as of ${iso(asOf + by)}.`);
