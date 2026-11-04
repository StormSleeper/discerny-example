# Interactions
<!-- The log the Interaction score is worked out from, keyed by P-ID. One line per event, written as it gets past the Inbox:
     `- YYYY-MM-DD P-#### <kind> T-####`, the kind being message, comment, linked, reply or done.
     One line per decision about a Priority person, with the score and breakdown at that moment:
     `- YYYY-MM-DD P-#### decision <yes|no|promote|demote|start> {score: …; message: …; half-life-days: …}`.
     `{inferred: yes}` marks a line an Upgrade inferred from older data. discerny.html and tools/discern.mjs write this file. -->

- 2026-08-24 P-0003 message T-0001 {inferred: yes}
- 2026-08-26 P-0010 message T-0002 {inferred: yes}
- 2026-09-02 P-0022 message T-0003 {inferred: yes}
- 2026-09-03 P-0021 message T-0004 {inferred: yes}
- 2026-09-07 P-0004 message T-0005 {inferred: yes}
- 2026-09-09 P-0019 message T-0006 {inferred: yes}
- 2026-09-10 P-0021 done T-0004 {inferred: yes}
- 2026-09-11 P-0010 done T-0002 {inferred: yes}
- 2026-09-16 P-0020 reply T-0007 {inferred: yes}
- 2026-09-16 P-0004 linked T-0007 {inferred: yes}
- 2026-09-22 P-0004 message T-0008 {inferred: yes}
- 2026-09-26 P-0019 done T-0006 {inferred: yes}
- 2026-10-01 P-0010 message T-0009 {inferred: yes}
- 2026-10-02 P-0004 done T-0008 {inferred: yes}
- 2026-10-09 P-0011 message T-0011 {inferred: yes}
- 2026-10-13 P-0006 message T-0012 {inferred: yes}
- 2026-10-15 P-0002 message T-0013 {inferred: yes}
- 2026-10-15 P-0018 linked T-0013 {inferred: yes}
- 2026-10-16 P-0013 message T-0014 {inferred: yes}
- 2026-10-19 P-0017 message T-0015 {inferred: yes}
- 2026-10-22 P-0020 message T-0017 {inferred: yes}
- 2026-10-23 P-0021 message T-0019 {inferred: yes}
- 2026-10-26 P-0007 message T-0020 {inferred: yes}
- 2026-10-26 P-0015 message T-0021 {inferred: yes}
- 2026-10-26 P-0021 reply T-0022 {inferred: yes}
- 2026-10-26 P-0009 linked T-0020 {inferred: yes}
- 2026-10-27 P-0022 reply T-0023 {inferred: yes}
- 2026-10-28 P-0014 message T-0024 {inferred: yes}
- 2026-10-28 P-0018 message T-0025 {inferred: yes}
- 2026-10-29 P-0012 linked T-0026 {inferred: yes}
- 2026-10-30 P-0003 message T-0031 {inferred: yes}
- 2026-11-02 P-0007 decision start {score: 1.7; message: 1.7; comment: 0; linked: 0; reply: 0; done: 0; half-life-days: 30; inferred: yes}
- 2026-11-02 P-0010 decision start {score: 1.7; message: 1.4; comment: 0; linked: 0; reply: 0; done: 0.3; half-life-days: 30; inferred: yes}
