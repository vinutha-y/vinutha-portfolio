// Single source of truth for project content — both Work (the grid) and
// CaseStudy (the per-project template) read from this array, which is how
// the two pages stay wired together for the click-through flow.
//
// Content here is ported from the real portfolio at the repo root
// (index.html) — same two case studies, same problem/process/outcome
// copy, same screenshots (extracted from index.html's embedded images).
export const projects = [
  {
    slug: 'amrita-feast',
    title: 'Amrita Feast — skip the canteen queue',
    oneLiner: 'Scan your college ID, browse the menu, pay via UPI, and skip the queue with a token.',
    tags: ['END-TO-END UX', 'MOBILE-FIRST', 'FIGMA'],
    thumb: '/images/work/img-04.jpg',
    thumbAlt: 'Amrita Feast home screen with canteen selection',
    problem:
      'Students lose valuable time between classes standing in canteen queues, with no way to know wait times or order ahead.',
    approach:
      'Designed an end-to-end flow: scan college ID to log in, browse menu, pay via UPI, and receive a token that lets students skip the queue entirely — mapped across home, menu, checkout, and profile screens.',
    outcome:
      'A complete high-fidelity prototype covering onboarding, canteen selection, checkout with a live payment timer, and profile management — ready to hand off for development.',
    screens: [
      { file: '/images/work/img-03.jpg', alt: 'Amrita Feast onboarding and login screen' },
      { file: '/images/work/img-04.jpg', alt: 'Amrita Feast home screen with canteen selection' },
      { file: '/images/work/img-05.jpg', alt: 'Amrita Feast checkout screen with payment timer' },
      { file: '/images/work/img-06.jpg', alt: 'Amrita Feast profile screen' },
    ],
  },
  {
    slug: 'sakra-appointment-booking',
    title: 'Sakra — doctor appointment booking',
    oneLiner: 'Search by specialist category, compare doctors, and confirm a booking on a calendar.',
    tags: ['WIREFRAMING', 'MOBILE UX', 'ANDROID'],
    thumb: '/images/work/img-07.jpg',
    thumbAlt: 'Sakra doctor appointment booking wireframes',
    problem:
      'Patients need a fast, low-friction way to find the right specialist and book an appointment without confusion.',
    approach:
      'Sketched low-fidelity Android wireframes exploring category-based doctor search, a browsable doctor list with ratings, and a calendar-based booking confirmation step.',
    outcome:
      'A validated core flow — search, compare, book — used as the foundation before moving into high-fidelity visual design.',
    screens: [
      { file: '/images/work/img-07.jpg', alt: 'Sakra doctor appointment booking wireframes' },
    ],
  },
];
