export const accounts = {
  mib: { handle: "@makeinbvb", url: "https://www.instagram.com/makeinbvb/" },
};

export const posts = {
  pupa: "https://www.instagram.com/reel/DShqF1pDUI1/",
  ticket: "https://www.instagram.com/makeinbvb/reel/DRV3a72kvv7/",
  buildathon: "https://www.instagram.com/makeinbvb/reel/DRXpe6aEyKW/",
  venture: "https://www.instagram.com/p/DIJBHxpSvr9/",
  spin: "https://www.instagram.com/reel/DXb_V4jk4z0/",
  pupaPage: "https://www.kletech.ac.in/events-detail/pupa/415",
};

const campus = "Campus photograph from the public KLE Tech Hubballi gallery.";
const nightCredit = "Night view of the BVB entrance by Mallu Bhairamatti, Hubballi Times.";

export const shots = {
  logo: "/media/make%20in%20bvb%20logo.jpeg",
  ticket: "/media/ticket%20to%20pupa.jpeg",
  ticket2026: "/media/ticket%20to%20pupa%202026.jpg",
  pupa9: "/media/pupa%209.jpeg",
  pupa10: "/media/pupa%2010.jpg",
  spinPoster: "/media/spin%20pitch%20(pliedes%20event)1.jpeg",
  spinFloor: "/media/spin%20pitch%20(pliedes%20event)2.jpeg",
  venturePoster: "/media/venture%20vibe%202.0%201.jpeg",
  ventureGuests: "/media/venture%20vibe%202.0%202.jpeg",
};

export const heroFrames = [
  {
    src: "/media/night.jpg",
    alt: "The BVB entrance lit at night, with a statue in front",
    kicker: "After dark",
    caption: "The entrance after dark. Photograph by Mallu Bhairamatti.",
  },
  {
    src: "/media/quad.jpg",
    alt: "Wide view of the white main block at KLE Tech Hubballi",
    kicker: "Main block",
    caption: "B. V. Bhoomaraddi Campus, Vidyanagar. Ticket to PUPA meets on the quadrangle.",
  },
  {
    src: "/media/front.jpg",
    alt: "The main block and the statue on the lawn",
    kicker: "The front",
    caption: "The statue lawn in front of the main block.",
  },
  {
    src: "/media/gate.jpg",
    alt: "The campus gate and a white pavilion",
    kicker: "The gate",
    caption: "The gate on the way into campus.",
  },
];

export const stories = [
  {
    id: "quadrangle",
    label: "Ticket",
    account: accounts.mib,
    eventId: "ticket-2025",
    frames: [
      {
        src: shots.ticket,
        alt: "Ticket to PUPA poster",
        caption: "25 November 2025, Main Quadrangle, 5 PM onwards. Orientation for PUPA.",
        credit: "Poster from Make in BVB.",
        kind: "poster",
      },
      {
        src: "/media/quad.jpg",
        alt: "Wide view of the white main block at KLE Tech Hubballi",
        caption: "The quadrangle sits in front of this block.",
        credit: campus,
      },
      {
        src: "/media/night.jpg",
        alt: "The BVB entrance lit at night",
        caption: "The campus after dark. The cut of that night is on @makeinbvb.",
        credit: nightCredit,
      },
    ],
  },
  {
    id: "pupa",
    label: "PUPA",
    account: accounts.mib,
    eventId: "pupa",
    frames: [
      {
        src: shots.pupa10,
        alt: "PUPA 10th edition poster",
        caption: "10th edition demo day, 14 March 2027, 9:30 AM, Dr. Prabhakar Kore Sports Arena.",
        credit: "Poster from Make in BVB.",
        kind: "poster",
      },
      {
        src: shots.pupa9,
        alt: "PUPA 9th edition poster",
        caption: "The 9th demo day was 14 March 2026, in the same arena.",
        credit: "Poster from Make in BVB.",
        kind: "poster",
      },
      {
        src: "/media/gate.jpg",
        alt: "The campus gate",
        caption: "PUPA Day is the public end: a working prototype, on this campus.",
        credit: campus,
      },
    ],
  },
  {
    id: "pitch",
    label: "Spin Pitch",
    account: accounts.mib,
    eventId: "spin-pitch",
    frames: [
      {
        src: shots.spinPoster,
        alt: "Spin Pitch poster for Pleiades 2026",
        caption: "Pleiades 2026. A failed startup, then a comeback. Prize pool ₹22,000.",
        credit: "Poster from Make in BVB.",
        kind: "poster",
      },
      {
        src: shots.spinFloor,
        alt: "Spin Pitch wheel and the Make in BVB lion cutout",
        caption: "Spin it. Pitch it. Win it. The wheel and the lion, on the floor at Pleiades.",
        credit: "Photograph from Spin Pitch.",
      },
    ],
  },
  {
    id: "venture",
    label: "VentureVibe",
    account: accounts.mib,
    eventId: "venturevibe",
    frames: [
      {
        src: shots.venturePoster,
        alt: "VentureVibe 2.0 poster welcoming Mr. Anurag Kumar",
        caption: "Tech solutions for societal problems. Chief guest Mr. Anurag Kumar, MeitY.",
        credit: "Poster from KLE-CTIE and Make in BVB.",
        kind: "poster",
      },
      {
        src: shots.ventureGuests,
        alt: "VentureVibe 2.0 guests of honour",
        caption: "The guests of honour from industry, on the second sheet.",
        credit: "Poster from Make in BVB.",
        kind: "poster",
      },
    ],
  },
  {
    id: "campus",
    label: "Campus",
    account: accounts.mib,
    eventId: null,
    frames: [
      {
        src: "/media/gate.jpg",
        alt: "The campus gate and pavilion",
        caption: "MIB’s room is Startup Street, R. H. Kulkarni Building, BVB Campus.",
        credit: campus,
      },
      {
        src: "/media/quad.jpg",
        alt: "The main block of KLE Tech Hubballi",
        caption: "The main block, in daylight, on the way to the quadrangle.",
        credit: campus,
      },
      {
        src: "/media/night.jpg",
        alt: "The BVB entrance at night",
        caption: "The entrance after dark. The event posts live on @makeinbvb.",
        credit: nightCredit,
      },
    ],
  },
];

export const season = [
  {
    when: "November",
    name: "Ticket to PUPA",
    note: "25 Nov 2026, 5 PM, Main Quadrangle.",
    href: "#event/ticket-to-pupa",
  },
  {
    when: "March",
    name: "PUPA demo day",
    note: "Sports Arena, 9:30 AM. The 10th edition is 14 Mar 2027.",
    href: "#event/pupa",
  },
  {
    when: "April",
    name: "VentureVibe",
    note: "Industry room. Edition 2.0 was 8 Apr 2025.",
    href: "#event/venturevibe",
  },
  {
    when: "May",
    name: "Spin Pitch",
    note: "Inside Pleiades. Last round was 9 May 2026.",
    href: "#event/spin-pitch",
  },
];

export const events = [
  {
    id: "ticket-to-pupa",
    name: "Ticket to PUPA",
    edition: "Orientation · PUPA 2k27",
    status: "upcoming",
    category: "Showcase",
    sort: "2026-11-25",
    dateLabel: "25 November 2026",
    dateDetail: "Locked on the 2026 one-sheet. The 2025 night was the same evening, one year earlier.",
    time: "5:00 PM onwards",
    venue: "Main Quadrangle, KLE Technological University, Hubballi",
    summary:
      "The night that opens the PUPA season: orientation on the quadrangle, then a cultural evening.",
    description:
      "The 2026 one-sheet puts Ticket to PUPA on the Main Quadrangle on 25 November, from 5:00 PM. It is the orientation for PUPA 2k27, with games and a cultural evening. The 2025 night had the same shape, and Buildathon sat beside it: make something from waste and sell it across campus.",
    eligibility: [
      "KLE Tech students. Bring a friend who has not been to an MIB night yet.",
      "Buildathon teams can be small. The 2025 call was to make, sell, and show up at 5:00 PM.",
      "No prior startup is required. This is the orientation, before the long build.",
    ],
    registerNote:
      "Registering interest saves your name on this browser. It does not hold a seat. Seats, if MIB caps them, are confirmed when the post goes up.",
    images: [
      {
        src: shots.ticket2026,
        alt: "Ticket to PUPA 2026 poster",
        caption: "25 November 2026, Main Quadrangle, 5 PM. Orientation for PUPA 2k27.",
        credit: "Poster from Make in BVB.",
        kind: "poster",
      },
      {
        src: "/media/quad.jpg",
        alt: "The main block of KLE Tech Hubballi",
        caption: "B. V. Bhoomaraddi Campus, where the quadrangle night is held.",
        credit: campus,
      },
      {
        src: "/media/night.jpg",
        alt: "The BVB entrance lit at night",
        caption: "The entrance after dark.",
        credit: nightCredit,
      },
    ],
    storyId: "quadrangle",
    instagram: posts.ticket,
    source: { label: "Ticket to PUPA post on @makeinbvb", url: posts.ticket },
  },
  {
    id: "pupa",
    name: "PUPA",
    edition: "10th edition · 2026–27",
    status: "upcoming",
    category: "Build",
    sort: "2027-03-14",
    dateLabel: "14 March 2027",
    dateDetail: "10th edition demo day, on the poster. The 9th demo day was 14 March 2026.",
    time: "9:30 AM onwards",
    venue: "Dr. Prabhakar Kore Sports Arena, KLE Technological University, Hubballi",
    summary:
      "MIB’s flagship. A team, an original idea, mentorship, then a working thing the campus can try.",
    description:
      "PUPA is named for the stage before a butterfly flies. The 10th edition poster sets demo day on 14 March 2027, from 9:30 AM, at Dr. Prabhakar Kore Sports Arena. The path is the same one the 9th edition used: a team, one original idea, mentorship, a build, then a day when other students can see the thing, try it, and vote. The 9th demo day was 14 March 2026 in that same arena.",
    eligibility: [
      "Open to all students. Technical and non-technical ideas are both welcome.",
      "Team size 2–4. One original, feasible idea per team.",
      "Hardware and software projects are allowed.",
      "Selected teams build a working prototype and attend reviews plus the final showcase.",
    ],
    registerNote:
      "This form is an interest list for the next edition. The 9th edition’s public form is closed with that showcase. Watch the KLE Tech event page and @makeinbvb for the official link.",
    images: [
      {
        src: shots.pupa10,
        alt: "PUPA 10th edition poster for 14 March 2027",
        caption: "10th edition demo day. 14 March 2027, 9:30 AM, Sports Arena.",
        credit: "Poster from Make in BVB.",
        kind: "poster",
      },
      {
        src: "/media/quad.jpg",
        alt: "The main block from the drive",
        caption: "The month before the showcase is the actual work.",
        credit: campus,
      },
      {
        src: "/media/gate.jpg",
        alt: "The campus gate",
        caption: "Teams build in public. That is part of the point.",
        credit: campus,
      },
    ],
    storyId: "pupa",
    instagram: posts.pupa,
    source: { label: "PUPA on the KLE Tech events page", url: posts.pupaPage },
  },
  {
    id: "spin-pitch",
    name: "Spin Pitch",
    edition: "Pleiades 2026",
    status: "past",
    category: "Pitch",
    sort: "2026-05-09",
    dateLabel: "9 May 2026",
    dateDetail: "Held. BT Seminar Hall, during Pleiades 2026.",
    time: "Competition day",
    venue: "BT Seminar Hall, KLE Technological University",
    summary:
      "Take a failed startup and make the room believe it can live again. Press conference, then investor pitch.",
    description:
      "Spin Pitch at Pleiades 2026 asked a team to take a failed startup, defend the decisions that sank it, and rebuild it in the room. Round 1 was a press conference. Round 2 was an investor pitch. The poster put ₹22,000 on the table and sent registration to pleiades.kletech.ac.in. The line under the wheel was spin it, pitch it, win it. The round itself is over. The form below asks to hear when MIB runs the next one.",
    eligibility: [
      "Teams of 2–4.",
      "Both rounds were mandatory: press conference, then investor pitch.",
      "The brief rewarded fast thinking, a clear story, and a revival plan.",
    ],
    registerNote:
      "This edition has wrapped. Leave your name if you want the next Spin Pitch called out to you from this board.",
    images: [
      {
        src: shots.spinPoster,
        alt: "Spin Pitch poster for Pleiades Techno Cultural Fest 2026",
        caption: "The Pleiades one-sheet. Prize pool ₹22,000.",
        credit: "Poster from Make in BVB.",
        kind: "poster",
      },
      {
        src: shots.spinFloor,
        alt: "A colour wheel of failed startups beside the Make in BVB lion",
        caption: "The wheel on the floor, and the lion: Inspiring minds to innovate.",
        credit: "Photograph from Spin Pitch at Pleiades.",
      },
    ],
    storyId: "pitch",
    instagram: posts.spin,
    source: { label: "Spin Pitch post on @makeinbvb", url: posts.spin },
  },
  {
    id: "pupa-9",
    name: "PUPA 9",
    edition: "Makers’ movement",
    status: "past",
    category: "Build",
    sort: "2026-03-14",
    dateLabel: "14 March 2026",
    dateDetail: "Held. 9th edition demo day.",
    time: "9:30 AM onwards",
    venue: "Dr. Prabhakar Kore Sports Arena, KLE Technological University, Hubballi",
    summary:
      "The ninth PUPA. A demo day of things you could see, try, and vote on.",
    description:
      "The 9th edition ran under Make in BVB with the Institution’s Innovation Council and the Student Hub for Innovation and Entrepreneurship. The demo-day poster set it for 14 March 2026, from 9:30 AM, at Dr. Prabhakar Kore Sports Arena, and invited the campus to walk through tech products, non-tech work, and service websites, then vote. Teams were 2–4 students, one original idea, with a working prototype at the end.",
    eligibility: [
      "Was open to all students, one idea per team, team size 2–4.",
      "Hardware and software were both allowed.",
      "Attendance at reviews and the final showcase was mandatory.",
    ],
    registerNote:
      "The showcase has happened. Register interest here only if you want the 10th edition, which is the card named PUPA.",
    images: [
      {
        src: shots.pupa9,
        alt: "PUPA 9th edition poster",
        caption: "9th edition demo day, 14 March 2026, Sports Arena.",
        credit: "Poster from Make in BVB.",
        kind: "poster",
      },
      {
        src: "/media/quad.jpg",
        alt: "The main block from across the drive",
        caption: "The build month is what the showcase is made of.",
        credit: campus,
      },
    ],
    storyId: "pupa",
    instagram: posts.pupa,
    source: { label: "Official PUPA page", url: posts.pupaPage },
  },
  {
    id: "ticket-2025",
    name: "Ticket to PUPA 2025",
    edition: "Orientation",
    status: "past",
    category: "Showcase",
    sort: "2025-11-25",
    dateLabel: "25 November 2025",
    dateDetail: "Held. 5:00 PM onwards.",
    time: "5:00 PM onwards",
    venue: "Main Quadrangle, KLE Technological University",
    summary:
      "The orientation that opened the 2026 PUPA cycle, with Buildathon on the same ground.",
    description:
      "MIB called this the start of the journey rather than a standalone fest. The post set it at the Main Quadrangle on 25 November 2025, from 5:00 PM. Buildathon, announced with it, asked students to turn waste into something they could sell across campus and carry to the quadrangle. The next orientation is the upcoming Ticket to PUPA card.",
    eligibility: [
      "Campus night, aimed at students who had not yet joined a PUPA team.",
      "Buildathon was a make-and-sell challenge inside the same programme.",
    ],
    registerNote:
      "This night is over. The interest form on the upcoming Ticket to PUPA card is the one that matters now.",
    images: [
      {
        src: shots.ticket,
        alt: "Ticket to PUPA poster",
        caption: "25 November 2025. Main Quadrangle. 5 PM onwards.",
        credit: "Poster from Make in BVB.",
        kind: "poster",
      },
      {
        src: "/media/night.jpg",
        alt: "The BVB entrance at night",
        caption: "The campus after the lights come on.",
        credit: nightCredit,
      },
      {
        src: "/media/quad.jpg",
        alt: "The main block in daylight",
        caption: "The quadrangle is in front of this block.",
        credit: campus,
      },
    ],
    storyId: "quadrangle",
    instagram: posts.buildathon,
    source: { label: "Buildathon post on @makeinbvb", url: posts.buildathon },
  },
  {
    id: "venturevibe",
    name: "VentureVibe 2.0",
    edition: "Industry room",
    status: "past",
    category: "Network",
    sort: "2025-04-08",
    dateLabel: "8 April 2025",
    dateDetail: "Held.",
    time: "11:00 AM",
    venue: "KLE Tech Auditorium, Hubballi",
    summary:
      "A sitting between students, faculty researchers, and people who already run companies in this region.",
    description:
      "VentureVibe 2.0 was MIB and KLE-CTIE’s room for tech aimed at societal problems. The chief guest on the poster is Mr. Anurag Kumar, Scientist-D and Joint Director at the Ministry of Electronics and Information Technology. The second sheet names the guests of honour from manufacturing, automotive supply, nutraceuticals, biotech, and climate work. It ran at 11:00 AM on 8 April 2025 in the KLE Tech Auditorium.",
    eligibility: [
      "Aimed at students, faculty researchers, and people from industry.",
      "Useful if you wanted a conversation, not a competition slot.",
    ],
    registerNote:
      "Edition 2.0 is over. Leave a note if a later VentureVibe should reach you from this board.",
    images: [
      {
        src: shots.venturePoster,
        alt: "VentureVibe 2.0 poster",
        caption: "Hearty welcome for Mr. Anurag Kumar. Tech solutions for societal problems.",
        credit: "Poster from KLE-CTIE and Make in BVB.",
        kind: "poster",
      },
      {
        src: shots.ventureGuests,
        alt: "Nine guests of honour for VentureVibe 2.0",
        caption: "The guest sheet from the same announcement.",
        credit: "Poster from Make in BVB.",
        kind: "poster",
      },
    ],
    storyId: "venture",
    instagram: posts.venture,
    source: { label: "VentureVibe post on @makeinbvb", url: posts.venture },
  },
];

export const highlights = [
  {
    id: "incub8",
    title: "InCUB8 at NITK",
    when: "January 2025",
    result: "Prizes in six of eight competitions.",
    detail:
      "Under KLE-CTIE, Team MIB came back from InCUB8 at NITK Surathkal with a spread of results: 1st in Pitch Dunk, 2nd in Case Link, 2nd in Anunada, a consolation in Arambh, Best Problem-Solving Startup for Ayush Kabbur’s Offix at the Startup Expo, and a Top 8 finish in Pitch to VC for Siddhant Rolli.",
    image: "/media/front.jpg",
    alt: "The main block and statue at KLE Tech",
    href: "https://www.kletech.ac.in/hubballi/events-details/incub8/335",
  },
  {
    id: "pupa-day",
    title: "PUPA Day",
    when: "14 March 2026",
    result: "Ninth showcase. Ideas that had to work in someone’s hands.",
    detail:
      "A month of build, then a day of exhibiting and selling. The public record is on the KLE Tech events page.",
    image: "/media/quad.jpg",
    alt: "The main block of the Hubballi campus",
    href: "#event/pupa-9",
  },
  {
    id: "spin-highlight",
    title: "Spin Pitch",
    when: "9 May 2026",
    result: "A failed company, a live room, ₹22,000 on the table.",
    detail:
      "Press conference, then investor pitch, inside Pleiades at BT Seminar Hall.",
    image: shots.spinFloor,
    alt: "Spin Pitch wheel and the Make in BVB lion",
    href: "#event/spin-pitch",
  },
  {
    id: "quad-highlight",
    title: "Ticket to PUPA",
    when: "25 November 2025",
    result: "The quadrangle, 5 PM, and a waste-to-cash build beside it.",
    detail:
      "Orientation for the cycle that ended at PUPA 9. Buildathon asked teams to sell what they made.",
    image: "/media/night.jpg",
    alt: "The BVB entrance at night",
    href: "#event/ticket-2025",
  },
];

export const filters = ["All", "Upcoming", "Past", "Build", "Pitch", "Network", "Showcase"];

export function getEvent(id) {
  return events.find((event) => event.id === id) || null;
}

export function getStory(id) {
  return stories.find((story) => story.id === id) || null;
}
