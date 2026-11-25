import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiCode, HiCube, HiDatabase, HiDeviceMobile, HiMail, HiServer, HiLightningBolt, HiPhone } from "react-icons/hi";
import { SiOpenai } from "react-icons/si";

export const config = {
    developer: {
        name: "Sivaranjan Dinath",
    },
    social: {
        github: "dinathsv",
        linkedin: "https://www.linkedin.com/in/dinath-sivaranjan"
    },
    NAV_ITEMS: [
        { href: '/projects', label: 'Projects' },
        { href: '/contact', label: 'Contact' }
    ],
    recentTracks: true, // Enable/disable Spotify recent tracks
    projects: [
        {
            title: "ResQAI — AI-Powered Disaster & Emergency Relief Platform",
            description: "Trained random forest models on 30 years of data from 25 Sri Lankan districts to predict flood risk. Built FastAPI and PostGIS services that find the nearest hospital in under a second, and a Vertex AI service that extracts crisis reports in Sinhala, Tamil and English for ambulance dispatch.",
            image: "/projects/resqai_logo.jpeg",
            technologies: ["Python", "FastAPI", "scikit-learn", "SQLAlchemy", "PostgreSQL/PostGIS", "Redis", "Google Vertex AI", "Docker", "React Native"],
            github: "https://github.com/dinathsv/resqai-platform"
        },
        {
            title: "CORE — Centralized Operations & Routing Engine",
            description: "Building a supply chain platform that connects inventory, order and supplier services through Kafka. Designed the Spring Cloud Gateway for authentication, rate limiting and routing. Operators can ask Assist, a LangChain agent, to investigate gateway logs, check stock and look up demand forecasts.",
            image: "/projects/CORE_logo.png",
            technologies: ["Java", "Spring Boot", "Spring Cloud Gateway", "Apache Kafka", "Python", "FastAPI", "LangChain", "RAG"],
            github: "https://github.com/dinathsv/CORE"
        },
        {
            title: "ivy.lk — E-Commerce Order Management System",
            description: "Built and deployed a Laravel order management platform for a retail client. Staff manage orders and pricing, send SMS updates and generate PDF invoices. I handled hosting and production support through handover.",
            image: "/projects/IVY_logo.jpeg",
            technologies: ["Laravel 12", "PHP 8.2", "MySQL", "Blade", "Alpine.js", "Tailwind CSS", "Vite", "PHPUnit"],
            demo: "https://ivy.lk"
        },
        {
            title: "vfix.lk — Service Booking & Workforce Management",
            description: "Moved a service business’s booking and workforce records off paper. Built a Laravel dashboard to manage workers, track bookings through each stage and generate PDF invoices, then deployed and supported the live system.",
            image: "/projects/VFIX_logo.jpeg",
            technologies: ["Laravel 12", "PHP 8.2", "MariaDB", "Blade", "Alpine.js", "Tailwind CSS", "Vite", "PHPUnit"],
            demo: "https://vfix.lk/"
        },
        {
            title: "mamcargo.com — Dual-Brand Logistics & Export Platform",
            description: "Built a logistics and export platform with separate frontends for two brands. Client administrators manage workflows from a shared backend. I configured the domain and hosting, diagnosed production issues and documented the handover.",
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
    articles: [
        {
            slug: "agent-management",
            title: "Beyond the Prototype: Managing AI Agents in Production with Choreo Agent Manager",
            topic: "Agent operations",
            description: "A look at how Choreo Agent Manager brings observability, evaluation, governance, and identity together for running agents in production.",
            image: "/AI Agent Governance Network.png",
            url: "https://www.linkedin.com/pulse/beyond-prototype-managing-ai-agents-production-choreo-sivaranjan-pgicc"
        },
        {
            slug: "agent-identity",
            title: "Your AI Agent Is Not the User: Giving Agents Their Own Identity with Choreo Labs",
            topic: "Agent identity",
            description: "Why agents need their own identities and how OAuth delegation lets them act on a user’s behalf.",
            image: "/AI Agent Identity and Secure Delegation.png",
            url: "https://www.linkedin.com/pulse/your-ai-agent-user-giving-agents-own-identity-choreo-labs-sivaranjan-w0kvc"
        },
        {
            slug: "ai-gateways",
            title: "Taming the LLM Wild West: Why Your AI Traffic Needs a Gateway",
            topic: "AI gateways",
            description: "How an AI gateway can protect sensitive data, control token costs, route across providers, and monitor LLM traffic.",
            image: "/Taming the LLM Wild West.png",
            url: "https://www.linkedin.com/pulse/taming-llm-wild-west-why-your-ai-traffic-needs-dinath-sivaranjan-caj8c"
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
                { name: "Go", level: "Intermediate" },
                { name: "Ballerina", level: "Intermediate" },
                { name: "JavaScript", level: "Advanced" },
                { name: "SQL", level: "Advanced" },
                { name: "PHP", level: "Advanced" }
            ]
        },
        {
            title: "Backend & Frameworks",
            icon: <HiCube />,
            description: "Frameworks & Libraries",
            bgClass: "bg-purple-500/10",
            iconClass: "text-purple-500",
            skills: [
                { name: "Spring Boot", level: "Advanced", hot: true },
                { name: "Spring Cloud Gateway", level: "Advanced", hot: true },
                { name: "FastAPI", level: "Advanced", hot: true },
                { name: "SQLAlchemy", level: "Advanced" },
                { name: "Django" },
                { name: "Node.js/Express", level: "Advanced" },
                { name: "Laravel", level: "Expert" }
            ]
        },
        {
            title: "APIs & Architecture",
            icon: <HiLightningBolt />,
            description: "API Design & System Architecture",
            bgClass: "bg-cyan-500/10",
            iconClass: "text-cyan-500",
            skills: [
                { name: "REST APIs", level: "Expert", hot: true },
                { name: "API Gateway", level: "Advanced" },
                { name: "Microservices", level: "Advanced", hot: true },
                { name: "Event-Driven Architecture", level: "Advanced" },
                { name: "Apache Kafka", level: "Advanced" },
                { name: "OAuth2 / JWT", level: "Advanced" },
                { name: "RBAC", level: "Advanced" },
                { name: "Rate Limiting", level: "Advanced" }
            ]
        },
        {
            title: "AI & Machine Learning",
            icon: <SiOpenai />,
            description: "AI/ML Engineering & Integration",
            bgClass: "bg-pink-500/10",
            iconClass: "text-pink-500",
            skills: [
                { name: "Scikit-Learn", level: "Advanced", hot: true },
                { name: "Random Forest" },
                { name: "Google Vertex AI / Gemini", level: "Advanced", hot: true },
                { name: "LLM Integration", level: "Advanced" },
                { name: "RAG", level: "Advanced" },
                { name: "LangChain", level: "Advanced" },
                { name: "Prompt Engineering", level: "Advanced" }
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
                { name: "Redis", level: "Advanced", hot: true },
                { name: "MariaDB", level: "Advanced" },
                { name: "ChromaDB (vector database)" },
                { name: "DBeaver" },
                { name: "SQLite", level: "Advanced" },
                { name: "Firebase", level: "Intermediate" },
                { name: "Supabase", level: "Intermediate" }
            ]
        },
        {
            title: "DevOps & Operations",
            icon: <HiServer />,
            description: "DevOps & Infrastructure",
            bgClass: "bg-orange-500/10",
            iconClass: "text-orange-500",
            skills: [
                { name: "Docker", level: "Advanced", hot: true },
                { name: "Kubernetes", level: "Intermediate" },
                { name: "Docker Compose", level: "Advanced", hot: true },
                { name: "Git & GitHub", level: "Expert" },
                { name: "Linux", level: "Advanced" },
                { name: "Bash" },
                { name: "Production Support" },
                { name: "Troubleshooting" },
                { name: "Log Analysis" },
                { name: "Pytest", level: "Advanced" },
                { name: "PHPUnit", level: "Advanced" },
                { name: "cPanel & DNS", level: "Advanced" }
            ]
        },
        {
            title: "Frontend & Mobile",
            icon: <HiDeviceMobile />,
            description: "Web & Mobile Development",
            bgClass: "bg-teal-500/10",
            iconClass: "text-teal-500",
            skills: [
                { name: "React" },
                { name: "Next.js" },
                { name: "React Native" },
                { name: "Tailwind CSS" }
            ]
        }
    ],
    experiences: [
        {
            position: "Backend Developer",
            company: "Freelance / Self-Employed",
            period: "Oct 2025 - Oct 2026",
            location: "Sri Lanka",
            description: "Built and supported three live platforms for retail, service booking and logistics clients. Traced production issues through logs and database records, and wrote handover guides for each client’s administrators.",
            responsibilities: [
                "Deployed and supported ivy.lk, vfix.lk and mamcargo.com, diagnosed issues using application logs and database behavior, and documented procedures for client administrators.",
                "Designed backend systems and role-based access controls, registered domains, configured DNS and managed secure deployments.",
                "Automated paper-based booking, order and logistics workflows for three client businesses."
            ],
            technologies: ["Laravel 12", "PHP 8.2", "MySQL", "MariaDB", "Blade", "Alpine.js", "Tailwind CSS", "Vite", "PHPUnit"]
        },
        {
            position: "Banking Trainee",
            company: "People's Bank",
            period: "Feb 2024 - Jun 2024",
            location: "Chenkalady",
            description: "Resolved more than 80 customer queries a day, maintained accurate financial records and mentored five trainees in banking procedures and KYC/AML compliance.",
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
        "Agent Control and Management: Foundations (WSO2)",
        "AI/ML Engineer Certification (Stages 1–3) - SLIIT",
        "Fundamentals of Java Programming (Coursera)",
        "Java Intermediate Course (Sololearn)",
        "Prompt Design in Vertex AI Skill Badge (Google Cloud)"
    ],
    awards: [
        {
            title: "First place, Best Poster Award in Information Technology",
            event: "5th International Research Conference of ITUM (ITUMIRC 2026)",
            date: "Nov 2026"
        }
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
            icon: <HiPhone className="w-5 h-5" />,
            label: "Phone",
            value: "+94 757241062",
            link: "tel:+94757241062"
        },
        {
            icon: <FaLinkedin className="w-5 h-5" />,
            label: "LinkedIn",
            value: "Dinath Sivaranjan",
            link: "https://www.linkedin.com/in/dinath-sivaranjan"
        }
    ]
}
