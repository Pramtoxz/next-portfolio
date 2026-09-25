import { ProfileData, NavLink, ProjectItem, ProcessStep, WorkExperience } from '../types/portfolio.types';

export const profileData: ProfileData = {
  fullName: 'PRAMUDITO METRA',
  monogram: 'PM',
  headlineRole: 'Fullstack & Mobile Developer',
  subHeadline: 'Engineering Scalable Backends & High-Craft Digital Interfaces',
  location: 'Padang, Indonesia',
  email: 'pramuditometra@gmail.com',
  phone: '(+62) 89672255331',
  liveUrl: 'https://portfolio-pramudito.vercel.app/',
  socials: {
    github: 'https://github.com/Pramtoxz',
    linkedin: 'https://www.linkedin.com/in/pramuditometra/',
  },
  currentStatus: 'CURRENTLY DEVELOPING FOR FOLIE A TROIS (MALAYSIA) & HONDA MENARA AGUNG',
  aboutQuote:
    'Pramudito Metra is an Indonesian Fullstack and Mobile Developer with a focus on scalable systems, clean API architectures, and crafted frontends. Balancing technical rigor with UI/UX precision, he builds solutions for enterprise operations and international cross-border products.',
  aboutExtended:
    'Holding a Bachelor of Computer Science with honors (GPA 3.50), Pramudito combines full-lifecycle software development (MERN, Laravel, Inertia, React Native) with an award-winning creative background in programming competitions and multimedia direction.',
  tickerItems: [
    'PRAMUDITO METRA',
    'FULLSTACK & MOBILE DEVELOPER',
    'ENTERPRISE ARCHITECTURE',
    'REACT NATIVE & NEXT.JS',
    'LARAVEL & INERTIA JS',
    'SCALABLE REST & GRAPHQL APIS',
    'CROSS-BORDER SOFTWARE',
  ],
  skills: {
    frontend: ['Next.js', 'React', 'Nuxt.js', 'Inertia.js', 'Tailwind CSS', 'TypeScript'],
    backend: ['Node.js', 'Laravel', 'Express.js', 'PHP / Lumen', 'Hono.js', 'GraphQL'],
    mobile: ['React Native', 'Flutter', 'Android SDK (Kotlin/Java)'],
    tools: ['PostgreSQL', 'MongoDB', 'Git / GitHub Actions', 'AWS CodePipeline', 'Docker'],
  },
};

export const navLinks: NavLink[] = [
  { label: 'ABOUT', href: '#about' },
  { label: 'WORK', href: '#work' },
  { label: 'PROCESS', href: '#process' },
  { label: 'CONTACT', href: '#contact' },
];

export const selectedWorks: ProjectItem[] = [
  {
    id: 'hkftu-training-system',
    title: 'HKFTU Training System',
    category: 'Enterprise LMS & Web Platform',
    year: '2026',
    clientOrOrg: 'Folie A Trois Solution (Malaysia)',
    description:
      'Full-lifecycle corporate training system with modular learning curricula, role-based student management, and cloud CI/CD deployment.',
    stack: ['Nuxt.js', 'Node.js', 'GraphQL', 'MongoDB', 'Tailwind CSS'],
    previewImage: '/assets/project/project-1.webp',
    demoUrl: 'https://portfolio-pramudito.vercel.app/',
    githubUrl: 'https://github.com/Pramtoxz',
  },
  {
    id: 'honda-sales-dealer-system',
    title: 'Honda Sales Tools & DMS',
    category: 'Enterprise Mobile App & ERP',
    year: '2025 - 2026',
    clientOrOrg: 'PT. Menara Agung Main Dealer Honda',
    description:
      'Enterprise sales automation mobile app and warehouse management dashboard bundling automotive H1-H3 divisions with internal WA Gateway.',
    stack: ['React Native', 'Laravel Lumen', 'Inertia.js', 'Android SDK', 'PostgreSQL'],
    previewImage: '/assets/project/project-2.webp',
    demoUrl: 'https://portfolio-pramudito.vercel.app/',
    githubUrl: 'https://github.com/Pramtoxz',
  },
  {
    id: 'trans-padang-tracker',
    title: 'Trans Padang Bus Tracker',
    category: 'Real-time Transit & Geolocation',
    year: '2024',
    clientOrOrg: 'Padang Municipal Transit Services',
    description:
      'Public transport tracking mobile application enabling real-time bus positioning, live ETA calculations, and commuter navigation.',
    stack: ['React Native', 'Google Maps API', 'REST API', 'WebSocket'],
    previewImage: '/assets/project/project-3.webp',
    demoUrl: 'https://portfolio-pramudito.vercel.app/',
    githubUrl: 'https://github.com/Pramtoxz',
  },
];

export const processSteps: ProcessStep[] = [
  {
    id: 'define',
    stepNumber: '01',
    title: 'DEFINE',
    subtitle: 'System Discovery & Domain Architecture',
    description:
      'Deconstructing complex operational workflows into clean domain models. Defining database ERDs, RESTful/GraphQL API contracts, and security boundaries before code execution.',
    visualImage: '/assets/images/process-define.webp',
    deliverables: ['SDLC Requirement Mapping', 'Database Architecture', 'API Protocol Specification'],
  },
  {
    id: 'design',
    stepNumber: '02',
    title: 'DESIGN',
    subtitle: 'Design Systems & High-Fidelity UI',
    description:
      'Designing accessible, high-contrast user interfaces with purposeful typography and layout hierarchy. Transforming design tokens into modular, reusable React & Next.js components.',
    visualImage: '/assets/images/process-design.webp',
    deliverables: ['Design Token Architecture', 'Component Library', 'Micro-Interactions & Prototyping'],
  },
  {
    id: 'deliver',
    stepNumber: '03',
    title: 'DELIVER',
    subtitle: 'Production Engineering & Scaling',
    description:
      'Writing clean, maintainable, and type-safe code. Implementing automated CI/CD pipelines, optimizing database indexes and memory footprint for snappy 60fps experiences.',
    visualImage: '/assets/images/process-deliver.webp',
    deliverables: ['Automated CI/CD Pipelines', 'Performance & Bundle Optimization', 'Production Deployment'],
  },
];

export const workExperiences: WorkExperience[] = [
  {
    company: 'Folie A Trois Solution',
    role: 'Software Developer (Contract / Remote)',
    location: 'Kuala Lumpur, Malaysia',
    period: '01/2026 - Present',
    type: 'International Remote',
    highlights: [
      'Manage complete SDLC for enterprise web and mobile platforms using MERN stack.',
      'Build and integrate high-throughput RESTful and GraphQL APIs.',
      'Implement CI/CD pipelines via GitHub Actions and AWS CodePipeline.',
    ],
  },
  {
    company: 'PT. Menara Agung Main Dealer Honda',
    role: 'Fullstack Mobile Developer',
    location: 'West Sumatera, Indonesia',
    period: '05/2025 - Present',
    type: 'Enterprise Fullstack',
    highlights: [
      'Develop scalable enterprise Android applications with Flutter, React Native, and Android SDK.',
      'Integrate Laravel Lumen backend APIs for inventory, sales, and warehouse picking.',
      'Optimize network queries, memory consumption, and cold-start latency.',
    ],
  },
  {
    company: 'STMIK JAYANUSA',
    role: 'Junior Developer & Lab Assistant',
    location: 'Padang, Indonesia',
    period: '09/2024 - 05/2025',
    type: 'Academic Systems',
    highlights: [
      'Engineered internal academic and laboratory management systems.',
      'Supervised practicum sessions for 100+ students in software engineering.',
    ],
  },
];
