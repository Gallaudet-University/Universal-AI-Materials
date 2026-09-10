// Universal AI NRT — event list.
// To add an event, append an object to this array. Fields:
//   title     (required) short name
//   start     (required) YYYY-MM-DD
//   end       (optional) YYYY-MM-DD for multi-day events
//   time      (optional) e.g. "2:00 – 2:30 PM"
//   location  (optional)
//   category  (optional) one of: talk, conference, recruitment, program, governance
//   description (optional) one or two sentences
//   link      (optional) URL for more info / registration
//   tbd       (optional) true if the exact date is not yet set; `start` is then a placeholder used only for sorting
//   season    (optional) label shown instead of the date when tbd is true, e.g. "Fall 2026"
window.EVENTS = [
  // ---------- Upcoming / planned ----------
  {
    title: "Open House & Participant Information Session",
    start: "2026-09-16",
    time: "11:00 AM – 12:00 Noon",
    location: "HMB Colaboratory (S329), Gallaudet University",
    category: "recruitment",
    description: "Learn how to get involved in accessible AI research with Gallaudet and RIT — as a full trainee or as a participant in selected activities. Trainees apply via NSF ETAP; participants via the sign-up form.",
    link: "https://gallaudet.edu/accessibility/universal-ai-nrt-at-gallaudet-university/"
  },
  {
    title: "AI Hackathon (Fall)",
    start: "2026-11-01",
    tbd: true,
    season: "Fall 2026",
    category: "program",
    description: "One-day hackathon: teams build and demo a deployable AI system exemplifying inclusiveness, accountability, and accessibility."
  },
  {
    title: "Winter Retreat Tutorials",
    start: "2027-01-05",
    tbd: true,
    season: "January 2027 intersession",
    category: "program",
    description: "Four days of technical tutorials on Universal AI best practices and ML trends; trainees present mid-year research status talks."
  },
  {
    title: "Spring Roundtables on Advanced Practices",
    start: "2027-02-01",
    tbd: true,
    season: "Spring 2027, monthly",
    category: "program",
    description: "Faculty-moderated panels on ML trends, inclusive AI, data collection, privacy, and grant writing."
  },
  {
    title: "AI Hackathon (Spring)",
    start: "2027-04-01",
    tbd: true,
    season: "Spring 2027",
    category: "program",
    description: "Two-day extended hackathon to build and demo a deployable inclusive-AI system."
  },

  // ---------- Past ----------
  {
    title: "Accessible AI and Law — Scott Van Nice (Procter & Gamble)",
    start: "2026-09-04",
    time: "2:00 – 2:30 PM",
    location: "HMB W328, Gallaudet University",
    category: "talk",
    description: "How law, policy, and responsible AI shape accessible technology — from privacy to compliance. Scott Van Nice is Privacy & Responsible AI Project Manager at Procter & Gamble."
  },
  {
    title: "ICCHP 2026",
    start: "2026-07-15",
    end: "2026-07-17",
    location: "Brno, Czech Republic",
    category: "conference",
    description: "International Conference on Computers Helping People with Special Needs."
  },
  {
    title: "RIT Summer Research Lab Rotation",
    start: "2026-06-08",
    end: "2026-07-30",
    location: "Rochester Institute of Technology, Rochester, NY",
    category: "program",
    description: "Eight-week lab rotation for NRT trainees with RIT faculty and PhD near-peer mentors, including a human-robot interaction study comparing robot vs. human facilitators and ASL vs. English-text response modalities."
  },
  {
    title: "DeafTech 2026",
    start: "2026-05-26",
    end: "2026-05-27",
    location: "TU Wien, Vienna, Austria",
    category: "conference",
    description: "Trainees co-authored and presented “XR for Whom? A Critical Review of Extended Reality Research on Deaf and Hard of Hearing Users.”"
  },
  {
    title: "Guest Talk — Samantha Johnson, Tatum Robotics",
    start: "2026-05-08",
    location: "Gallaudet University",
    category: "talk",
    description: "Visiting practitioner presentation from Tatum Robotics."
  },
  {
    title: "Independent Advisory Committee (IAC) — Spring Meeting",
    start: "2026-05-08",
    category: "governance",
    description: "Second meeting of the IAC (Deloitte, Procter & Gamble, AppTek, SignSpeak, University of Washington)."
  },
  {
    title: "Internal Advisory Board — Spring Meeting",
    start: "2026-04-23",
    category: "governance",
    description: "Semester review with senior Gallaudet leadership."
  },
  {
    title: "GIEI Bison Talks — Networking and Bootstrapping",
    start: "2026-04-22",
    location: "Gallaudet Innovation & Entrepreneurship Institute",
    category: "program",
    description: "Entrepreneurship session for trainees."
  },
  {
    title: "Advancing Deaf Access through Technology and AI — SignGPT",
    start: "2026-04-20",
    location: "Gallaudet University",
    category: "talk",
    description: "Manuel Gnerlich and Uta Meissner (SignGPT, Germany)."
  },
  {
    title: "CHI 2026",
    start: "2026-04-13",
    end: "2026-04-17",
    location: "Barcelona, Spain",
    category: "conference",
    description: "Program faculty presented papers and co-organized two workshops: “Sign-Up on Deaf Technologies” and “Speech AI for All.”"
  },
  {
    title: "Visit — Dr. Laleh Nourian Crowe (RIT AWARE-AI NRT)",
    start: "2026-04-03",
    location: "Gallaudet University",
    category: "talk",
    description: "Exchange with RIT's AWARE-AI NRT program."
  },
  {
    title: "AI for Everyone: Designing Technology That Includes Us All — Dr. Richard Ladner",
    start: "2026-04-01",
    location: "Gallaudet University",
    category: "talk",
    description: "Guest lecture by Dr. Richard Ladner, University of Washington."
  },
  {
    title: "NSF NRT Annual Meeting",
    start: "2026-03-23",
    end: "2026-03-24",
    location: "Golden, CO",
    category: "conference",
    description: "Poster and joint Gallaudet/RIT presentation by the Universal AI team."
  },
  {
    title: "NRT+ Summit",
    start: "2026-03-22",
    end: "2026-03-24",
    location: "Madison, WI",
    category: "conference"
  },
  {
    title: "CSUN Assistive Technology Conference",
    start: "2026-03-09",
    end: "2026-03-13",
    location: "Anaheim, CA",
    category: "conference",
    description: "Two trainee presentations and an exhibitor booth."
  },
  {
    title: "Spring Open House",
    start: "2026-03-06",
    location: "Gallaudet University",
    category: "recruitment",
    description: "Recruitment event for the 2026–27 cohort."
  },
  {
    title: "Applicant Workshop",
    start: "2026-02-26",
    location: "Gallaudet University",
    category: "recruitment",
    description: "Workshop for prospective trainees preparing applications."
  },
  {
    title: "NICHE Career Fair",
    start: "2026-02-05",
    location: "Gallaudet University",
    category: "recruitment"
  },
  {
    title: "Independent Advisory Committee (IAC) — Inaugural Meeting",
    start: "2025-12-04",
    category: "governance",
    description: "First meeting of the industry and academic advisory committee."
  },
  {
    title: "STAMP Day — Trainee Presentations",
    start: "2025-10-31",
    location: "Gallaudet University",
    category: "program",
    description: "Trainees presented their research at Gallaudet's annual STAMP Day."
  },
  {
    title: "Internal Advisory Board — Fall Meeting",
    start: "2025-10-31",
    category: "governance"
  },
  {
    title: "Fall Open House",
    start: "2025-10-15",
    location: "Gallaudet University",
    category: "recruitment",
    description: "Recruitment event for the 2026–27 cohort."
  },
  {
    title: "Gallaudet–RIT Kickoff Summit",
    start: "2025-10-10",
    location: "Rochester Institute of Technology, Rochester, NY",
    category: "governance",
    description: "Program kickoff with the RIT partner team; RIT began sharing its AWARE-AI training framework."
  }
];
