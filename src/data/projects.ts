export const projects = [
  {
    id: "1",
    title: "College Discovery Platform",
    slug: "college-discovery-platform",

    description:
      "Search and compare colleges using real educational datasets and advanced filtering.",

    overview:
      "A full-stack platform that helps students discover and compare colleges through searchable datasets, filtering, and detailed college information.",

    problem:
      "Students often rely on scattered sources of information while researching colleges, making it difficult to compare institutions effectively.",

    solution:
      "Built a centralized discovery platform with advanced search, filtering, authentication, and detailed college profiles to simplify decision making.",

    challenges:
      "Handling large datasets efficiently, designing flexible filters, and creating a user-friendly experience while maintaining performance.",

    learnings:
      "Learned full-stack architecture, database design, Prisma ORM, authentication, deployment, and performance optimization.",

    imageUrl: "/projects/college-discovery.jpeg",

    githubUrl: "#",
    liveUrl: "#",

    techStack: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
    ],

    featured: true,
  },

  {
    id: "2",
    title: "JobFinderAgent",
    slug: "jobfinder-agent",

    description:
      "Autonomous job-hunting assistant built using CrewAI and LLM workflows.",

    overview:
      "An AI-powered multi-agent system that automates job searching, resume analysis, matching, ranking, and outreach generation.",

    problem:
      "Job seekers spend significant time searching opportunities, tailoring applications, and researching companies.",

    solution:
      "Built an autonomous workflow that parses resumes, extracts skills, searches opportunities, ranks matches, performs risk checks, and generates personalized outreach emails.",

    challenges:
      "Designing reliable agent workflows, integrating multiple tools, and handling varying job data sources.",

    learnings:
      "Learned CrewAI, multi-agent orchestration, workflow automation, prompt engineering, and LLM-based application design.",

    imageUrl: "/projects/jobfinder-agent.jpeg",

    githubUrl: "#",
    liveUrl: "#",

    techStack: [
      "Python",
      "CrewAI",
      "LLMs",
      "Automation",
    ],

    featured: true,
  },

  {
    id: "3",
    title: "Book Recommendation System",
    slug: "book-recommendation-system",

    description:
      "Recommendation engine helping users discover books based on interests and preferences.",

    overview:
      "A recommendation platform that suggests books based on user interests and reading preferences.",

    problem:
      "Users often struggle to discover relevant books among thousands of available choices.",

    solution:
      "Created a recommendation engine that analyzes preferences and provides personalized book suggestions.",

    challenges:
      "Designing recommendation logic and managing book datasets efficiently.",

    learnings:
      "Learned recommendation system fundamentals, data handling, backend development, and API integration.",

    imageUrl: "/projects/book-recommendation.jpeg",

    githubUrl: "#",
    liveUrl: "#",

    techStack: [
      "React",
      "Node.js",
      "MongoDB",
    ],

    featured: true,
  },
];