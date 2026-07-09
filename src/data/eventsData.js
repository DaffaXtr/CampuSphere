// ===== Featured Events (FeaturedEvent.jsx carousel) =====
export const featuredEvents = [
  {
    id: 1,
    title: "Sistem Informasi Creative Expo 2026",
    date: "25 Juni 2026",
    location: "Airlangga Convention Center",
    description: "Pameran proyek sistem informasi kreatif, showcase software inovatif, dan talkshow teknologi dari HIMA D3 Sistem Informasi.",
    imageSrc: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1000&auto=format&fit=crop",
    participants: "1.000+"
  },
  {
    id: 2,
    tag: "SEMINAR",
    title: "Banking & Financial Technology Seminar",
    date: "10 Agustus 2026",
    location: "Auditorium Utama Kampus B",
    description: "Seminar nasional persembahan HIMA D4 Manajemen Perbankan dan Keuangan tentang masa depan industri FinTech dan literasi keuangan digital.",
    imageSrc: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 3,
    tag: "WORKSHOP",
    title: "Workshop Kesehatan & Kesejahteraan Hewan",
    date: "5 September 2026",
    location: "Student Center Plaza",
    description: "Workshop penanganan klinis, pemeriksaan hewan gratis, dan edukasi kesejahteraan hewan peliharaan dari HIMA D3 Paramedik Veteriner.",
    imageSrc: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=1000&auto=format&fit=crop"
  }
];

// ===== Upcoming Events (ExplorePage event cards) =====
export const upcomingEvents = [
  {
    title: "Workshop Web Development & UI/UX",
    subtitle: "HIMA D4 Teknik Informatika",
    imageSrc: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=600&auto=format&fit=crop",
    icon: "computer",
    iconColor: "text-primary",
    tags: ["IT", "Workshop"],
    timeRemaining: "Tutup dalam 2 hari"
  },
  {
    title: "Webinar Strategi Perpajakan UMKM",
    subtitle: "HIMA D4 Akuntansi Perpajakan",
    imageSrc: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=600&auto=format&fit=crop",
    icon: "co_present",
    iconColor: "text-tertiary",
    tags: ["Bisnis", "Webinar"],
    timeRemaining: "Tutup dalam 5 hari"
  },
  {
    title: "Seminar Nasional K3",
    subtitle: "HIMA D4 Keselamatan & Kesehatan Kerja",
    imageSrc: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=600&auto=format&fit=crop",
    icon: "health_and_safety",
    iconColor: "text-warning",
    tags: ["Kesehatan", "Seminar"],
    timeRemaining: "Tutup dalam 7 hari"
  }
];

// ===== Recruitments (ExplorePage recruitment cards) =====
export const recruitments = [
  {
    title: "HIMA Teknik Informatika",
    subtitle: "Penerimaan Staf 2026",
    imageSrc: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop",
    icon: "groups",
    iconColor: "text-primary",
    tags: ["Front-End", "UI/UX"],
    timeRemaining: "2 hari"
  },
  {
    title: "Laskar Vokasi 2026",
    subtitle: "Penerimaan Staff dan Koordinator",
    imageSrc: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop",
    icon: "rocket_launch",
    iconColor: "text-tertiary",
    tags: ["Staff", "Koordinator"],
    timeRemaining: "5 hari"
  },
  {
    title: "Kepanitiaan PKKMB UNAIR 2026",
    subtitle: "Open Recruitment Panitia",
    imageSrc: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600&auto=format&fit=crop",
    icon: "event",
    iconColor: "text-warning",
    tags: ["Acara", "Humas", "Pubdok"],
    timeRemaining: "7 hari"
  }
];

// ===== All Events (AllEventsPage full list) =====
export const allEvents = [
  {
    id: 1,
    title: 'Web Development & UI/UX Bootcamp 2026',
    subtitle: 'Bootcamp intensif pemrograman web dan desain antarmuka dari HIMA D4 Teknik Informatika.',
    imageSrc: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=600',
    icon: 'code',
    iconColor: 'text-primary',
    tags: ['Teknologi', 'Bootcamp', 'Informatika'],
    timeRemaining: 'Mulai dalam 5 hari',
    category: 'Teknologi',
    price: 'Berbayar',
    format: 'Online'
  },
  {
    id: 2,
    title: 'Interactive Design & Prototyping Workshop',
    subtitle: 'Lokakarya pembuatan prototype interaktif aplikasi mobile dari HIMA D3 Sistem Informasi.',
    imageSrc: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=600',
    icon: 'palette',
    iconColor: 'text-secondary',
    tags: ['Desain', 'Lokakarya', 'Sistem Informasi'],
    timeRemaining: 'Mulai dalam 2 minggu',
    category: 'Desain',
    price: 'Gratis',
    format: 'Online'
  },
  {
    id: 3,
    title: 'Tax & Financial Youth Conference 2026',
    subtitle: 'Kompetisi presentasi studi kasus perpajakan dan keuangan nasional oleh HIMA D4 Akuntansi Perpajakan.',
    imageSrc: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=600',
    icon: 'rocket_launch',
    iconColor: 'text-tertiary',
    tags: ['Bisnis', 'Kompetisi', 'Perpajakan'],
    timeRemaining: 'Mulai besok',
    category: 'Bisnis',
    price: 'Gratis',
    format: 'Offline'
  },
  {
    id: 4,
    title: 'Cloud Computing Infrastructure Workshop',
    subtitle: 'Seminar dan praktik deployment arsitektur cloud server menggunakan AWS dari HIMA D4 Teknik Informatika.',
    imageSrc: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600',
    icon: 'cloud',
    iconColor: 'text-primary',
    tags: ['Teknologi', 'Workshop', 'Cloud'],
    timeRemaining: 'Mulai dalam 3 hari',
    category: 'Teknologi',
    price: 'Gratis',
    format: 'Hybrid'
  },
  {
    id: 5,
    title: 'Financial Technology & Digital Banking Summit',
    subtitle: 'KTT yang membahas perkembangan inovasi perbankan digital dan teknologi finansial dari HIMA D4 Manajemen Perbankan dan Keuangan.',
    imageSrc: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=600',
    icon: 'trending_up',
    iconColor: 'text-success',
    tags: ['Bisnis', 'Fintech', 'Perbankan'],
    timeRemaining: 'Mulai dalam 1 bulan',
    category: 'Bisnis',
    price: 'Berbayar',
    format: 'Online'
  },
  {
    id: 6,
    title: 'Futsal League Vocational Cup 2026',
    subtitle: 'Turnamen futsal antar program studi lingkup Fakultas Vokasi yang diselenggarakan oleh HIMA Paramedik Veteriner.',
    imageSrc: 'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?q=80&w=600',
    icon: 'sports_soccer',
    iconColor: 'text-warning',
    tags: ['Olahraga', 'Turnamen', 'Futsal'],
    timeRemaining: 'Mulai dalam 2 minggu',
    category: 'Olahraga',
    price: 'Gratis',
    format: 'Offline'
  }
];

// ===== Filter Options (AllEventsPage) =====
export const eventCategories = ['All', 'Teknologi', 'Bisnis', 'Desain', 'Olahraga'];
export const eventPrices = ['All', 'Gratis', 'Berbayar'];
export const eventFormats = ['All', 'Online', 'Offline', 'Hybrid'];
