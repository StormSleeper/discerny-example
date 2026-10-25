# Sources
<!-- Settings and state for source skills.
     "## defaults" holds settings every source skill shares; each skill then keeps its own
     "## <source-name>" block.
     Times here are UTC (ISO 8601, `2026-10-15T15:05:41Z`), unlike the other files, which use local time
     in `timezone` (`YYYY-MM-DD HH:MM`).
     Durations are ISO 8601 (PT2H, P1D).
     Skills change single lines through tools/discern.mjs.
     See SOURCE-SKILLS.md. -->

## defaults
- timezone: Europe/London
- priority-people: P-0007, P-0010
- personal-domains: gmail.com, outlook.com, hotmail.com, icloud.com, yahoo.com, homemail.example
- page-cap: 10
- log-runs: true

## outlook-mail
- watermark: 2026-10-15T15:05:41Z
- overlap: PT2H
- exclude-subject:
  - (?i)newsletter
  - (?i)^automatic reply
  - (?i)out of office
  - (?i)^\[Loomwise\] (scheduled|automated)
  - (?i)bake-off|lunch order|car park
- exclude-sender:
  - no-reply@
  - noreply@
  - notifications@loomwise.pennywhistle.example
  - news@puppeteersguild.example
  - digest@toyindustryweekly.example
- last-run: 2026-10-15T21:14:03Z
- last-result: fetched 11 · filtered 7 · duplicates 1 · inbox +3 (waiting +1, commitments +0)
- scan-sent-asks: true
- waiting-min-age: P1D
- waiting-max-age: P21D
- waiting-checked-through: 2026-10-14T21:14:03Z
- waiting-check-cap: 8

## teams-chat
- watermark: 2026-10-14T16:22:10Z
- overlap: PT1H
- scan-own-commitments: true
- scan-sent-asks: true
- waiting-min-age: P1D
- waiting-max-age: P14D
- waiting-checked-through: 2026-10-13T16:22:10Z
- waiting-check-cap: 6
- mention-read-cap: 8
- chat-labels:
  - QA team (19:c40e9a)
  - Academy QA (19:a8c3f1)
  - Stageworks Mk4 (19:b77d02)
- watch-channels:
  - 19:quality-team | 19:qa-general@thread.tacv2 | QA team / General
- candidate-channels:
  - Stageworks / General
- exclude-chat:
  - 19:lunch-club
- exclude-text: (?i)lunch order|cake|happy birthday
- last-run: 2026-10-15T21:16:40Z
- last-result: fetched 23 · filtered 21 · duplicates 2 · inbox +0

## outlook-calendar
- lookahead: P14D
- exclude-subject:
  - (?i)^focus time
  - (?i)fellowship
- surface-only-if-tracked: true
- prep-signals: (?i)review|go/no-go|audit|FAI|1:1
- invite-check-cap: 6
- transcripts: off
- last-run: 2026-10-15T21:18:02Z
- last-result: fetched 9 · filtered 5 · duplicates 1 · inbox +1 (derived +1)
