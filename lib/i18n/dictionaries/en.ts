import { withBasePath } from "@/lib/base-path"
import type { Dictionary } from "./tr"

export const en = {
  meta: {
    title: "Guarda — Bookmark & Personal Knowledge Planner",
    description:
      "A modern personal knowledge library that turns any article, video, or job post you save into an action, a task, and a calendar plan with one click.",
  },
  nav: {
    brandName: "Guarda",
    brandBadge: "LIBRARY",
    links: {
      nasilCalisir: "How It Works",
      ozellikler: "Features",
      premium: "Premium",
      karsilastirma: "Comparison",
      ekranlar: "Screens",
    },
    freeModeBadge: "Free Local Mode",
    demoCta: "Open Demo ↗",
  },
  hero: {
    announcement: {
      text: "Guarda v1.0 — Fully in the Browser & Zero Signup",
      storageLabel: "IndexedDB",
    },
    headlineLine1: "Don't just hoard the links you save.",
    headlineLine2: "Take action and finish.",
    subtitleTag: "Save → Organize → Plan → Complete",
    subtitleText:
      "A modern personal knowledge library that turns any article, video, or job post you save into an action, a task, and a calendar plan with one click.",
    ctaPrimary: "Try It Free (Open Demo) ↗",
    ctaSecondary: "Explore Features ↓",
    trustIndicators: ["No signup required", "No credit card", "Your data stays on your device"],
    windowAddressPath: "/planner",
    windowOs: "macOS • Safari",
    imageAlt: "Guarda Planner Screen - Weekly tasks and notes for the selected day",
    badge1: {
      title: "Quick Save",
      subtitle: "Inbox • #backend",
    },
    badge2: {
      title: "Action Scheduled",
      tag: "Read • 18 min",
      subtitle: "Monday, 09:00 • PostgreSQL Indexing",
    },
  },
  workflow: {
    eyebrow: "Interactive Process Simulator",
    title: "Put an end to the link-hoarding graveyard.",
    description:
      "Experience the 4-step flow that turns every link into an action instantly. Click through the steps or just watch the live simulation.",
    autoplayLabelPlaying: "Autoplay Active",
    autoplayLabelPaused: "Loop Paused",
    steps: [
      {
        tag: "📥 INBOX",
        title: "Save",
        description:
          "Forget the tab hoarding. Instantly drop anything from the web into a raw inbox.",
        footer: "⌘K & Quick Capture",
      },
      {
        tag: "🗂️ TAXONOMY",
        title: "Organize",
        description:
          "Put content in the right drawer with nested folders and a clean tag taxonomy.",
        footer: "Hierarchical Tree",
      },
      {
        tag: "🗓️ TIMELINE",
        title: "Plan",
        description:
          'Turn every link into a task: assign a "Read", "Watch", "Apply" action and a calendar slot.',
        footer: "Action & Calendar",
      },
      {
        tag: "✓ COMPLETE",
        title: "Done",
        description:
          "Finish it in today's focus, archive it with one click, and clear your mental load.",
        footer: "Zero Mental Load",
      },
    ],
    stage: {
      shortcutLabel: "Shortcut:",
      articleTitle: "PostgreSQL Indexing: An In-Depth Performance Guide",
      articleUrl: "https://highscalability.com/postgresql-indexing-guide",
      step1: {
        statusTitle: "Stage 1: Raw Content Captured Straight to Inbox",
        statusChip: "Unsorted (Raw)",
        droppedBadge: "Dropped into Inbox (0 min ago)",
        articleDescription:
          "The differences between B-Tree, GiST, and BRIN index types, and strategies to cut query times by 80% in large-scale databases.",
        statusLabel: "Status:",
        statusValue: "Inbox (1 Item)",
        actionButton: "Move to Collection & Tag →",
      },
      step2: {
        statusTitle: "Stage 2: Taxonomy & Hierarchical Folder Match",
        statusChip: "Learning > Backend",
        catalogedBadge: "Cataloged",
        targetFolderLabel: "Target Folder:",
        targetFolder: "📁 Learning / Backend",
        tagsLabel: "Automatic & Manual Taxonomy Tags:",
        tags: ["#database", "#postgres", "#backend-architecture"],
        addTagLabel: "+ Add Tag",
        folderCount: "Folder: contains 14 bookmarks",
        actionButton: "Plan Action & Schedule →",
      },
      step3: {
        statusTitle: "Stage 3: Action Type Set & Calendar Slotted",
        statusChip: "Mon 09:00 • 18 min",
        breadcrumb: "Learning / Backend • #postgres",
        scheduleBadge: "🗓️ Monday, 09:00 - 09:30",
        actionTypeLabel: "Action Type Selected:",
        actionSelected: "✓ Read",
        actionOption2: "Watch",
        actionOption3: "Apply",
        durationLabel: "Estimated Duration & Time Blocking:",
        durationValue: "⏱ 18 min read",
        durationTarget: "Added to Weekly Calendar",
        priorityLabel: "Priority: High",
        actionButton: "Complete Task (Done) ✓",
      },
      step4: {
        completedLine: "Completed • Read and noted in 18 minutes",
        completedBadge: "🎉 Completed",
        mentalStateLabel: "Mental State",
        mentalStateValue: "Zero Load (Clear)",
        archiveLabel: "Archive Location",
        archiveValue: "Archive / 2026-Q1",
        progressLabel: "Weekly Progress",
        progressValue: "100% Success",
        restartHint: "Save something new to restart the loop.",
        restartButton: "Back to Start & Restart ↺",
      },
    },
  },
  features: {
    badge: "Free & Ready to Use",
    title: "A personal library that runs at the speed of thought.",
    description:
      "Desktop-grade architecture, zero lag, and a minimalist interface language that doesn't distract you.",
    products: [
      {
        eyebrow: "Tasks & Calendar",
        path: "/planner",
        title: "Tasks & Planner",
        description:
          'Turn bookmarks into actions (Read, Watch, Apply). Schedule them by the hour in weekly calendar columns or the "Today" panel.',
        imageKey: "planlayici" as const,
        imageAlt: "Planner — weekly calendar and notes for the selected day",
      },
      {
        eyebrow: "Hierarchy",
        path: "/collections",
        title: "Collections & Subfolders",
        description:
          "Set up nested folders like Learning › Backend, Frontend. See your whole library at a glance with subcollection previews and link counts.",
        imageKey: "koleksiyonlar" as const,
        imageAlt: "Collections — folder tree and subcollection previews",
      },
      {
        eyebrow: "Quick Capture",
        path: "/inbox",
        title: "Smart Inbox",
        description:
          "Save now, decide later. Review what's pending, move it to a collection, or turn it into a calendar task with one click.",
        imageKey: "gelenkutusu" as const,
        imageAlt: "Inbox — unsorted saves and quick actions",
      },
      {
        eyebrow: "Table View",
        path: "/bookmarks",
        title: "Advanced Bookmarks Table",
        description:
          "Every link in one list — by type, collection, tag, and date. Instant search, filtering, and bulk actions with ⌘K.",
        imageKey: "bookmarks" as const,
        imageAlt: "Bookmarks — filterable table view",
      },
    ],
    capabilities: [
      {
        title: "Tag Taxonomy & Hygiene",
        description:
          "Sort by usage frequency, rename tags, and clear unused ghost tags with one click.",
      },
      {
        title: "⌘K Command Menu & Keyboard-First Flow",
        description:
          "Search from anywhere with ⌘K, jump between pages, open quick save. Compact list mode and light/dark theme adapt to your rhythm.",
      },
      {
        title: "Fully Local & Offline",
        description:
          "Your data never leaves your device — it stays in your browser's own secure storage. Works offline, zero tracking, zero forced subscription.",
        stats: [
          { label: "Server requests", value: "0 KB" },
          { label: "Local storage", value: "Active" },
          { label: "Export", value: "JSON · HTML" },
        ],
      },
    ],
  },
  extension: {
    badge: "Browser Extension",
    chromeLabel: "Chrome",
    firefoxLabel: "Firefox",
    title: "Save without leaving the page, using your own shortcut.",
    description:
      "Press your own key combo on any page; the title and site are filled in automatically. Type a tag, pick a collection, hit Enter. If the page is already in your library, the extension warns you.",
    shortcutNote: "example — you set the combination yourself in settings",
    checklist: [
      "Custom shortcut recording",
      "Collection picker & tags",
      '"Already saved" warning',
      "Queues saves while the app is closed",
    ],
    popup: {
      pageTitle: "System Design for Frontend Engineers",
      domain: "medium.com",
      alreadySaved: "Already saved ✓",
      collectionSelected: "Backend",
      enterHint: "ENTER: SAVE · ESC: CANCEL",
    },
  },
  premium: {
    badge: "Coming Soon — Premium",
    title: "Cloud and AI capabilities that will multiply your power.",
    description:
      "The local, free mode stays forever, while we build advanced modules for teams and power users.",
    comingSoonLabel: "Soon",
    cards: [
      {
        icon: "☁️",
        title: "Cloud Sync",
        description:
          "Instant, end-to-end encrypted (E2EE) sync across your phone, tablet, and work computer.",
        footer: "End-to-End Encrypted",
      },
      {
        icon: "⚡",
        title: "AI Summary & Taxonomy",
        description:
          "One-click 3-bullet article summaries, automatic collection and keyword suggestions (with your approval).",
        footer: "Personal AI",
      },
      {
        icon: "🔍",
        title: "Semantic & Vector Search",
        description:
          "Search like \"that postgres indexing article I saw last month\" even if you don't remember the exact URL or title.",
        footer: "Vector Database",
      },
      {
        icon: "🔔",
        title: "Calendar Integration & Email",
        description:
          "Google Calendar / Apple Calendar integration and a smart morning digest for your weekly planned content.",
        footer: "iCal & Digest",
      },
    ],
    waitlist: {
      title: "Join the Premium Early Access Waitlist",
      description: "The first 500 people will get lifetime discounted early access.",
      placeholder: "you@example.com",
      button: "Notify Me",
      successMessage: "Thanks! You've been added to the early access list.",
    },
  },
  comparison: {
    badge: "Transparent Plans",
    title: "Choose the right Guarda edition for you.",
    description: "All the essentials are available in the free local edition.",
    free: {
      badgeTop: "Available Now",
      name: "FREE (Local Mode)",
      priceBadge: "Unlimited",
      price: "$0",
      priceNote: "/ forever free",
      description:
        "Built for anyone who wants full privacy, no ads, and unlimited info management on a single device.",
      includedFeatures: [
        "Local Browser Storage (IndexedDB)",
        "No Signup or Email Required",
        "Unlimited Bookmarks & Subcollections",
        "Planner, Tasks & Weekly Calendar",
        "Tag Taxonomy & Hygiene Cleanup",
      ],
      excludedFeatures: [
        "Automatic cross-device cloud sync",
        "AI-generated automatic summaries",
      ],
      cta: "Use It Now ↗",
    },
    premium: {
      badgeTop: "In Development",
      name: "PREMIUM",
      priceBadge: "Early Stage",
      price: "Early Access",
      priceNote: "/ coming very soon",
      description:
        "The fully-loaded edition that runs seamlessly across all your devices and saves you time with AI summaries.",
      includedFeatures: [
        "Everything in the FREE edition",
        "Unlimited Multi-Device Cloud Sync",
        "AI-Powered Summaries, Auto-Tagging",
        "Semantic & Vector Natural-Language Search",
        "Email & Calendar (iCal) Integration",
        "Priority Support & Early Access to New Releases",
      ],
      cta: "🔒 Coming Soon",
    },
  },
  showcase: {
    badge: "Product Gallery",
    title: "Every screen is designed to speed up your workflow.",
    description: "Click the tabs below to explore the app's real interface modules.",
    liveScreenLabel: "Live Screen",
    autoplayLabelPlaying: "Auto-Advance Active",
    autoplayLabelPaused: "Auto-Advance Paused",
    tabs: [
      {
        id: "planlayici",
        label: "Planner (Weekly & Daily)",
        path: "guarda.local/planner",
        imageKey: "planlayici" as const,
        imageAlt: "Guarda Planner Screen",
      },
      {
        id: "gelen-kutusu",
        label: "Inbox",
        path: "guarda.local/inbox",
        imageKey: "gelenkutusu" as const,
        imageAlt: "Guarda Inbox Screen",
      },
      {
        id: "koleksiyonlar",
        label: "Collections (Folder Tree)",
        path: "guarda.local/collections/learning",
        imageKey: "koleksiyonlar" as const,
        imageAlt: "Guarda Collections Screen",
      },
      {
        id: "bookmarks",
        label: "Bookmarks (Table List)",
        path: "guarda.local/bookmarks",
        imageKey: "bookmarks" as const,
        imageAlt: "Guarda Bookmarks Screen",
      },
      {
        id: "etiketler",
        label: "Tags & Taxonomy",
        path: "guarda.local/tags",
        imageKey: "etiketler" as const,
        imageAlt: "Guarda Tags Screen",
      },
    ],
  },
  finalCta: {
    badge: "No Install — Straight in the Browser",
    title: "Start saving and finishing today.",
    description:
      "No signup, no credit card, no install hassle. Open Guarda in seconds and run your own personal library.",
    cta: "Open Free Demo ↗",
    footerNote: "JSON Export Supported • Zero Trackers • Secured by IndexedDB",
  },
  footer: {
    tagline: "Save → Organize → Plan → Complete.",
    liveDemo: "Live Demo",
    copyright: "© 2026 Guarda. A local-first knowledge library.",
    privacyLabel: "Privacy Policy",
    copyrightLabel: "Copyright",
  },
  legal: {
    backToHome: "← Home",
    privacy: {
      metaTitle: "Privacy Policy & Data Protection Notice — Guarda",
      title: "Privacy Policy & Data Protection Notice",
      updatedLabel: "Last updated:",
      updatedDate: "September 15, 2026",
      sections: [
        {
          heading: "Data Controller",
          paragraphs: [
            'Under Turkey\'s Law No. 6698 on the Protection of Personal Data ("KVKK") and applicable data protection law, the data controller is [COMPANY/PERSON NAME]. For questions about this notice, contact us at [CONTACT EMAIL].',
          ],
        },
        {
          heading: "What We Process in Guarda's Free Version",
          paragraphs: [
            "Guarda's free local edition doesn't require an account or an email address. The bookmarks, collections, tags, and planner data you save are stored only in your browser's own secure storage (IndexedDB) and are never sent to a server.",
            "This website (including the guarda.local demo) uses no analytics or tracking tools beyond the standard web server logs (IP address, browser info, visit time) kept by our hosting provider.",
          ],
        },
        {
          heading: "Early Access Waitlist",
          paragraphs: [
            "The email address you leave to join the Premium early access waitlist is processed and stored solely to notify you about early access and product updates. We do not share it with third parties.",
          ],
        },
        {
          heading: "A Note on the Upcoming Premium Edition",
          paragraphs: [
            "The Premium edition we're building will require account information and processing of your bookmark data on our servers to enable cloud sync. Once Premium ships, an updated notice detailing what data is processed and why will be published here.",
          ],
        },
        {
          heading: "Your Rights",
          paragraphs: [
            "You have the right to learn whether your personal data is processed, request information about it, learn whether it's used consistently with its purpose, know the third parties it's transferred to, request correction of inaccurate data, request its deletion, and request that these actions be notified to any third parties it was transferred to.",
            "To exercise these rights, write to us at [CONTACT EMAIL].",
          ],
        },
      ],
    },
    copyright: {
      metaTitle: "Copyright & Intellectual Property — Guarda",
      title: "Copyright & Intellectual Property",
      updatedLabel: "Last updated:",
      updatedDate: "September 15, 2026",
      sections: [
        {
          heading: "Ownership",
          paragraphs: [
            "The Guarda name, logo, interface design, and the text, images, and screenshots on this website belong to [COMPANY/PERSON NAME] and are protected under applicable intellectual property law.",
          ],
        },
        {
          heading: "Usage Restrictions",
          paragraphs: [
            "Content on this site may not be reproduced, distributed, or used commercially without prior written permission. The Guarda name and logo may not be used in a way that associates them with another product, service, or piece of content without [COMPANY/PERSON NAME]'s written consent.",
          ],
        },
        {
          heading: "Open Source Components",
          paragraphs: [
            "Guarda uses a number of open source software components, including React and Next.js. These components are governed by their own license terms and fall outside the scope of this copyright notice.",
          ],
        },
        {
          heading: "Contact",
          paragraphs: ["For copyright-related notices or questions, reach us at [CONTACT EMAIL]."],
        },
      ],
    },
  },
  images: {
    planlayici: withBasePath("/planlayici-en.png"),
    koleksiyonlar: withBasePath("/koleksiyonlar-en.png"),
    gelenkutusu: withBasePath("/gelenkutusu-en.png"),
    bookmarks: withBasePath("/bookmarks-en.png"),
    etiketler: withBasePath("/etiketler-en.png"),
  },
} satisfies Dictionary
