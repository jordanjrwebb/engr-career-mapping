# Engineering Career Neural Map

A lightweight, client-side prototype website for undergraduate engineering students to explore interdisciplinary career pathways.

## What this includes

- Neural-network style visualization connecting **11 engineering-focused majors** to career nodes.
- Filter controls by major.
- Career detail panel that includes:
  - O*NET-style occupation tasks
  - O*NET technology skills
  - O*NET work activities
  - BLS Occupational Outlook snapshot (median pay + growth)
- Source links for each career node to O*NET and BLS.

## Included majors

1. Aerospace Engineering
2. Biochemical and Biomolecular Engineering
3. Bioengineering
4. Chemical Engineering
5. Civil Engineering
6. Computer Science and Engineering
7. Data Science and Analytics
8. Electrical Engineering
9. Environmental Engineering
10. Materials Science and Engineering
11. Mechanical Engineering

## Run locally

Because this is a static site, you can open `index.html` directly, or run a simple server:

```bash
python -m http.server 4173
```

Then open `http://localhost:4173`.

## Data note

This prototype stores a static snapshot of BLS values and curated occupation summaries in `data.js`. Refresh values periodically from:

- O*NET Online: https://www.onetonline.org/
- BLS Occupational Outlook Handbook: https://www.bls.gov/ooh/
