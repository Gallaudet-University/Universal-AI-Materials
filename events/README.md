# Universal AI NRT — Events

A single-page site listing upcoming and past events of the NSF Universal AI National Research Traineeship (NRT-IPP, DGE-2440601) at Gallaudet University and Rochester Institute of Technology.

The page is served by GitHub Pages from the `main` branch.

## Adding or editing an event

All events live in [`events.js`](events.js). Add an object to the array:

```js
{
  title: "Guest Talk — Jane Doe",
  start: "2026-10-14",              // YYYY-MM-DD
  end: "2026-10-15",                // optional, for multi-day events
  time: "2:00 – 3:00 PM",           // optional
  location: "HMB W328, Gallaudet",  // optional
  category: "talk",                 // talk | conference | recruitment | program | governance
  description: "One or two sentences.",
  link: "https://example.org"       // optional
}
```

For an event whose date is not set yet, add `tbd: true` and a `season` label (e.g. `"Fall 2026"`); `start` is then only used for sorting.

The page sorts events automatically: anything ending today or later appears under **Upcoming** (soonest first); everything else under **Past** (most recent first). No build step — commit the change and GitHub Pages redeploys within a minute or two.

## Local preview

Open `index.html` in a browser, or run `python3 -m http.server` in this folder and visit http://localhost:8000.
