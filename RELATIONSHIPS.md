# Relationships
<!-- One line per Relationship, stored once (shown on both):
     `- A ~ B {kind: related}` (symmetric) or `- A -> B {kind: <kind>}` (involves, concerns, owns, uses).
     Validate: both IDs exist, no duplicates, nothing related to itself.
     `dependencies` on Items are separate. -->

- T-0007 ~ T-0017 {kind: related}
- T-0009 ~ T-0026 {kind: related}
- T-0011 ~ T-0025 {kind: related}
- T-0011 ~ T-0021 {kind: related}
- T-0019 ~ T-0022 {kind: related}
- T-0001 -> SYS-0002 {kind: concerns}
- T-0009 -> SYS-0005 {kind: concerns}
- T-0012 -> SYS-0003 {kind: concerns}
- T-0014 -> SYS-0004 {kind: concerns}
- T-0015 -> SYS-0001 {kind: concerns}
- T-0024 -> SYS-0004 {kind: concerns}
- T-0007 -> P-0004 {kind: involves}
- T-0013 -> P-0018 {kind: involves}
- T-0020 -> P-0009 {kind: involves}
- P-0001 -> SYS-0001 {kind: owns}
- P-0016 -> SYS-0002 {kind: owns}
- P-0003 -> SYS-0003 {kind: owns}
- P-0014 -> SYS-0004 {kind: owns}
- P-0010 -> SYS-0005 {kind: owns}
- PRJ-0001 -> SYS-0002 {kind: uses}
- PRJ-0002 -> SYS-0005 {kind: uses}
- PRJ-0003 -> SYS-0001 {kind: uses}
