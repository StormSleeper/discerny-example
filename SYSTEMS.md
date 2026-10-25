# Systems
<!-- One record per system or platform. IDs are permanent and never reused. -->
<!-- next-id: 6 -->

## Business systems
- QualiTrack eQMS {id: SYS-0001; type: platform; owner: Imogen Hartley; status: in build}
  - description: Cloud eQMS replacing the SharePoint procedures library, the CAPA spreadsheet and the complaints register. Batch 1 (procedures) migrated in September; batch 2 (work instructions) pending. Go-live target December 2026.
  - link: [QualiTrack (pilot)](https://qualitrack.pennywhistle.example)
- Loomwise ERP {id: SYS-0002; type: platform; owner: Callum Fraser; status: live}
  - description: Orders, bills of materials, stock and lot traceability for puppets and stages. Supplier OTIF/PPM dashboard added Oct 2026.
  - link: [Loomwise](https://loomwise.pennywhistle.example)
- Goods-In Inspection App {id: SYS-0003; type: application; owner: Meera Ilangovan; part-of: SYS-0002; status: live}
  - description: Tablet app at goods-in that records inspection results against Loomwise purchase-order lines. Sampling plans are set per material group.
- Academy LMS {id: SYS-0004; type: application; owner: Ravi Chandrasekar; status: live}
  - description: Hosts the Pennywhistle Academy online courses and issues completion certificates. Upgrade scheduled for 27 Oct 2026.
  - link: [Academy LMS](https://learn.pennywhistle.example)

## Test equipment
- Stage load test rig {id: SYS-0005; type: instrument; owner: Declan Moss; status: live}
  - description: Hydraulic rig with four load cells for static and racking load tests on stage decks and frames. Calibration certificate expired 7 Oct 2026; recalibration being booked.
