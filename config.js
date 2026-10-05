import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiCode, HiCube, HiDatabase, HiMail, HiBriefcase, HiServer } from "react-icons/hi";

export const config = {
    developer: {
        name: "Sivaranjan Dinath",
    },
    social: {
        github: "dinathsv",
        linkedin: "https://www.linkedin.com/in/dinathsivaranjan"
    },
    NAV_ITEMS: [
        { href: '/projects', label: 'Projects' },
        { href: '/contact', label: 'Contact' }
    ],
    recentTracks: true, // Enable/disable Spotify recent tracks
    projects: [
        {
            title: "ResQAI — AI-Powered Disaster & Emergency Relief Platform",
            description: "Built the Python FastAPI AI microservice powering LLM-driven situational summaries, multilingual report translation, and a trilingual first-aid chatbot. Designed the PostGIS geospatial database schema and implemented the resource-locator service.",
            image: "/projects/resqai_logo.jpeg",
            technologies: ["Python", "FastAPI", "Node.js", "Express", "React Native", "PostgreSQL/PostGIS", "Redis", "Docker", "LLM Integration"],
            github: "https://github.com/dinathsv/resqai-platform"
        },
        {
            title: "CORE — Centralized Operations & Routing Engine",
            description: "AI-augmented supply chain platform embedding a conversational AI agent into the operational layer of a microservices system. Features API gateway, Kafka event-driven messaging, demand-forecasting, and LangChain-based RAG.",
            image: "/projects/CORE_logo.png",
            technologies: ["Java", "Spring Boot", "Spring Cloud Gateway", "Apache Kafka", "Python", "FastAPI", "LangChain", "RAG"],
            github: "https://github.com/dinathsv/CORE---Centralized-Operations-Routing-Engine-AI-Augmented-Supply-Chain-Platform-"
        },
        {
            title: "ivy.lk — E-Commerce Order Management System",
            description: "Independently designed, built, and deployed a production Laravel e-commerce platform for a client. Features role-based access control, dynamic pricing, SMS notifications, and automated PDF invoicing (DomPDF).",
            image: "/projects/IVY_logo.jpeg",
            technologies: ["Laravel 12", "PHP 8.2", "MySQL", "Blade", "Alpine.js", "Tailwind CSS", "Vite", "PHPUnit"],
            demo: "https://ivy.lk"
        },
        {
            title: "vfix.lk — Service Booking & Workforce Management",
            description: "Production-ready service booking and worker management platform. Implemented role-based architecture, state-driven booking lifecycle, admin dashboards, and automated PDF invoicing.",
            image: "/projects/VFIX_logo.jpeg",
            technologies: ["Laravel 12", "PHP 8.2", "MariaDB", "Blade", "Alpine.js", "Tailwind CSS", "Vite", "PHPUnit"],
            demo: "https://vfix.lk/"
        },
        {
            title: "mamcargo.com — Dual-Brand Logistics & Export Platform",
            description: "Developed a high-performance dual-brand logistics and export platform. Features dual-frontend architecture, state-driven business logic, admin dashboards, and managed full deployment lifecycle.",
            image: "/projects/MAMcrago_logo.jpeg",
            technologies: ["Laravel 12", "PHP 8.2", "MySQL", "Blade", "Alpine.js", "Tailwind CSS", "Vite", "PHPUnit"],
            demo: "https://mamcargo.com/"
        },
        {
            title: "Complaint BOX – Digital Complaint Management System",
            description: "Web-based system supporting Complainers, Handlers, and Administrators. Focused on clean interface, secure authentication, and smooth navigation.",
            image: "/logo.jpg",
            technologies: ["PHP", "HTML", "CSS", "JavaScript", "MariaDB", "RBAC"],
            github: "https://github.com/Dinath2002/complaint-box-system.git"
        },
        {
            title: "Student Event Management System",
            description: "Dynamic web application to simplify university event coordination and registration. Features strong database integration and a modern dark-themed interface.",
            image: "/logo.jpg",
            technologies: ["HTML", "CSS", "JavaScript", "PHP", "MariaDB"],
            github: "https://github.com/Dinath2002/student-event-management.git"
        },
        {
            title: "Online Auction & E-Commerce Shopping System",
            description: "Dynamic web application combining auction bidding and e-commerce functionality. Enables users to list products, place bids, and complete secure transactions.",
            image: "/logo.jpg",
            technologies: ["Python (Django)", "SQLite", "MariaDB"],
            github: "https://github.com/Dinath2002/auction_shop"
        }
    ],
    skills: [
        {
            title: "Languages",
            icon: <HiCode />,
            description: "Programming Languages",
            bgClass: "bg-blue-500/10",
            iconClass: "text-blue-500",
            skills: [
                { name: "Java", level: "Advanced", hot: true },
                { name: "Python", level: "Advanced", hot: true },
                { name: "PHP", level: "Advanced" },
                { name: "JavaScript", level: "Advanced" },
                { name: "SQL", level: "Advanced" },
                { name: "GO", level: "Intermediate" }
            ]
        },
        {
            title: "Frameworks",
            icon: <HiCube />,
            description: "Frameworks & Libraries",
            bgClass: "bg-purple-500/10",
            iconClass: "text-purple-500",
            skills: [
                { name: "Spring Boot", level: "Advanced", hot: true },
                { name: "FastAPI", level: "Advanced", hot: true },
                { name: "LangChain", level: "Advanced" },
                { name: "Django", level: "Advanced" },
                { name: "Laravel", level: "Expert" },
                { name: "Node.js/Express", level: "Advanced" },
                { name: "Tailwind CSS", level: "Expert" },
                { name: "Blade", level: "Advanced" }
            ]
        },
        {
            title: "Databases",
            icon: <HiDatabase />,
            description: "Database Systems",
            bgClass: "bg-emerald-500/10",
            iconClass: "text-emerald-500",
            skills: [
                { name: "PostgreSQL (PostGIS)", level: "Advanced", hot: true },
                { name: "MySQL", level: "Expert" },
                { name: "MariaDB", level: "Advanced" },
                { name: "SQLite", level: "Advanced" },
                { name: "Firebase", level: "Intermediate" },
                { name: "Supabase", level: "Intermediate" }
            ]
        },
        {
            title: "Tools & Platforms",
            icon: <HiServer />,
            description: "DevOps & Infrastructure",
            bgClass: "bg-orange-500/10",
            iconClass: "text-orange-500",
            skills: [
                { name: "Git & GitHub", level: "Expert", hot: true },
                { name: "Docker", level: "Advanced", hot: true },
                { name: "Apache Kafka", level: "Advanced" },
                { name: "REST APIs", level: "Expert" },
                { name: "Redis", level: "Advanced" },
                { name: "PHPUnit", level: "Advanced" },
                { name: "Linux", level: "Advanced" },
                { name: "cPanel & DNS", level: "Advanced" }
            ]
        }
    ],
    experiences: [
        {
            position: "Backend Developer",
            company: "Freelance / Self-Employed",
            period: "Oct 2025 - Oct 2026",
            location: "Sri Lanka",
            description: "Delivered 3 production-grade platforms for independent clients, managing the full development lifecycle from scoping to deployment.",
            responsibilities: [
                "Delivered 3 production-grade platforms for independent clients (ivy.lk, vfix.lk, mamcargo.com), managing the full development lifecycle from scoping to deployment.",
                "Architected backend systems and role-based access control; handled domain purchase, DNS configuration, and secure deployment across 3 live production systems.",
                "Replaced manual, paper-based business workflows with automated booking, order, and logistics platforms for real clients."
            ],
            technologies: ["Laravel 12", "PHP 8.2", "MySQL", "MariaDB", "Blade", "Alpine.js", "Tailwind CSS", "Vite", "PHPUnit"]
        },
        {
            position: "Banking Trainee",
            company: "People's Bank",
            period: "Feb 2024 - Jun 2024",
            location: "Chenkalady",
            description: "Assisted 80+ customers daily, maintained financial records with 100% accuracy, and enforced KYC/AML compliance while mentoring 5 new trainees.",
            responsibilities: [
                "Assisted 80+ customers daily with banking operations and financial services.",
                "Maintained financial records with 100% accuracy across all transactions.",
                "Enforced KYC/AML compliance protocols and banking regulations.",
                "Mentored 5 new trainees on banking procedures and customer service standards."
            ],
            technologies: ["Banking Operations", "KYC/AML Compliance", "Financial Records", "Customer Service", "Team Mentorship"]
        }
    ],
    education: [
        {
            degree: "National Diploma in IT (NDT)",
            institution: "ITUM, University of Moratuwa",
            period: "Feb 2025 - Feb 2028",
            field: "Information Technology",
            status: "Pursuing",
            description: "Comprehensive diploma program in Information Technology focusing on modern software development, database management, and IT infrastructure."
        },
        {
            degree: "Bachelor of IT (BIT), External",
            institution: "University of Moratuwa",
            period: "Mar 2024 - Mar 2027",
            field: "Information Technology",
            status: "Pursuing",
            description: "Advanced degree program in Information Technology with emphasis on software engineering, data science, and emerging technologies."
        },
        {
            degree: "Diploma in IT & English",
            institution: "ESOFT Metro Campus",
            period: "2022 - 2023",
            field: "Information Technology & English",
            grade: "Merit",
            status: "Completed",
            description: "Professional diploma in IT and English with practical exposure to programming, database systems, web development, and communication skills."
        }
    ],
    certifications: [
        "AI/ML Engineer Certification (Stages 1–3) - SLIIT",
        "Fundamentals of Java Programming (Coursera)",
        "Java Intermediate Course (Sololearn)",
        "Prompt Design in Vertex AI Skill Badge (Google Cloud)"
    ],
    contactInfo: [
        {
            icon: <FaGithub className="w-5 h-5" />,
            label: "GitHub",
            value: "@dinathsv",
            link: `https://github.com/dinathsv`
        },
        {
            icon: <HiMail className="w-5 h-5" />,
            label: "Email",
            value: "sdinath0528@gmail.com",
            link: "mailto:sdinath0528@gmail.com"
        },
        {
            icon: <FaLinkedin className="w-5 h-5" />,
            label: "LinkedIn",
            value: "Dinath Sivaranjan",
            link: "https://www.linkedin.com/in/dinathsivaranjan"
        }
    ]
}