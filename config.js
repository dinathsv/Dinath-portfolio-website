import { FaDiscord, FaGithub, FaMapPin } from "react-icons/fa";
import { HiCode, HiCube, HiDatabase, HiMail, HiBriefcase } from "react-icons/hi";

export const config = {
    developer: {
        name: "Dinath Sivaranjan",
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
            title: "Foreign Shop System",
            description: "Designed and developed a Laravel-based product and order management system for a foreign food retail business. Features manual payment workflows, SMS notifications, and clean UI.",
            image: "/projects/IVY_logo.jpeg",
            technologies: ["Laravel", "Asynchronous Processing"],
            demo: "https://ivy.lk"
        },
        {
            title: "MAMcargo — Dual-Frontend Logistics",
            description: "Developed a high-performance logistics and e-commerce ecosystem using Laravel 12 and Vite. The platform features a dual-frontend architecture managing MAMcargo and ClickLanka.",
            image: "/projects/MAMcrago_logo.jpeg",
            technologies: ["PHP 8.2", "Laravel 12", "Blade", "Vite", "MySQL", "PHPUnit", "Asynchronous Processing"],
            demo: "https://mamcargo.com/"
        },
        {
            title: "VFIX – Service Booking Platform",
            description: "Production-ready service booking and worker management platform. Implemented backend using Laravel with a role-based architecture and state-driven booking lifecycle.",
            image: "/projects/VFIX_logo.jpeg",
            technologies: ["Laravel", "MariaDB / MySQL", "Database Design & Integration"],
            demo: "https://vfix.lk/"
        },
        {
            title: "Complaint BOX – Digital Complaint Management System",
            description: "Web-based system supporting Complainers, Handlers, and Administrators. Focused on clean interface, secure authentication, and smooth navigation.",
            image: "/logo.jpg",
            technologies: ["PHP", "HTML", "CSS", "JavaScript", "MariaDB", "Role-Based Access Control (RBAC)"],
            github: "https://github.com/Dinath2002/complaint-box-system.git"
        },
        {
            title: "Student Event Management System",
            description: "Dynamic web application to simplify university event coordination and registration. Features strong database integration and a modern dark-themed interface.",
            image: "/logo.jpg",
            technologies: ["HTML", "CSS", "JavaScript", "PHP", "MariaDB", "UI/UX Design", "Full Stack Web Development"],
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
            title: "Frontend",
            icon: <HiCode />,
            description: "Modern web interfaces",
            bgClass: "bg-blue-500/10",
            iconClass: "text-blue-500",
            skills: [
                { name: "JavaScript", level: "Advanced", hot: true },
                { name: "React", level: "Advanced" },
                { name: "TailwindCSS", level: "Expert" },
                { name: "HTML", level: "Intermediate" },
                { name: "UI/UX Design", level: "Advanced" },
                { name: "Full Stack Web Development", level: "Advanced" }
            ]
        },
        {
            title: "Backend",
            icon: <HiDatabase />,
            description: "Server & Database",
            bgClass: "bg-emerald-500/10",
            iconClass: "text-emerald-500",
            skills: [
                { name: "Python (Django)", level: "Advanced", hot: true },
                { name: "Laravel", level: "Advanced", hot: true },
                { name: "Node.js", level: "Advanced" },
                { name: "MariaDB / MySQL", level: "Advanced" },
                { name: "Java", level: "Intermediate" },
                { name: "PHP", level: "Intermediate" },
                { name: "Asynchronous Processing", level: "Intermediate" },
                { name: "Role-Based Access Control (RBAC)", level: "Advanced" }
            ]
        },
        {
            title: "Programs & Tools",
            icon: <HiCube />,
            description: "Development & Productivity Tools",
            bgClass: "bg-orange-500/10",
            iconClass: "text-orange-500",
            skills: [
                { name: "VS Code", level: "Expert", hot: true },
                { name: "IntelliJ IDEA", level: "Advanced" },
                { name: "PyCharm", level: "Intermediate" },
                { name: "Git", level: "Advanced" },
                { name: "React", level: "Intermediate" },
                { name: "PyTorch", level: "Intermediate" }
            ]
        }
    ],
    experiences: [
        {
            position: "Full Stack Developer",
            company: "Inncome Developers",
            period: "Dec 2025 - Present",
            location: "Sri Lanka (Remote)",
            description: "Developed end-to-end web and software solutions, managing the complete development lifecycle. Contributed to digital transformation initiatives through scalable web applications.",
            responsibilities: [
                "Developed end-to-end web and software solutions, managing the complete development lifecycle.",
                "Translated client requirements into intuitive UI/UX designs, enhancing user engagement.",
                "Architected robust back-end systems and managed cloud deployments, ensuring high performance.",
                "Contributed to digital transformation initiatives through scalable web applications at Inncome Developers."
            ],
            technologies: ["Full Stack Development", "UI/UX Design", "Backend Systems", "Cloud Deployment", "Web Applications"]
        },
        {
            position: "Banking Trainee",
            company: "People's Bank",
            period: "Feb 2024 - Jun 2024",
            location: "Chenkalady, Remote",
            description: "Completed a comprehensive 5-month banking trainee program focused on financial operations, client relationship management, and banking fundamentals. Gained hands-on experience in banking services, customer support, and operational excellence.",
            responsibilities: [
                "Learned and implemented banking operations and financial service protocols",
                "Developed client management skills and maintained exceptional customer relationships",
                "Understood core banking systems and operational procedures",
                "Provided professional customer support in the financial services sector",
                "Contributed to delivering high-quality customer experiences",
                "Gained practical knowledge of banking products and services"
            ],
            technologies: ["Banking Operations", "Customer Service", "Financial Services", "Client Management", "Banking Systems"]
        }
    ],
    education: [
        {
            degree: "National Diploma in Information Technology (NDT)",
            institution: "Institute of Technology, University of Moratuwa",
            period: "Feb 2025 - Feb 2028",
            field: "Information Technology",
            status: "Pursuing",
            description: "Comprehensive diploma program in Information Technology focusing on modern software development, database management, and IT infrastructure."
        },
        {
            degree: "Bachelor of Information Technology (BIT) - External",
            institution: "University of Moratuwa",
            period: "Mar 2024 - Mar 2027",
            field: "Information Technology",
            status: "Pursuing",
            description: "Advanced degree program in Information Technology with emphasis on software engineering, data science, and emerging technologies."
        },
        {
            degree: "Diploma in Information Technology",
            institution: "ESOFT Metro Campus",
            period: "Mar 2022 - Mar 2023",
            field: "Information Technology",
            grade: "Merit",
            status: "Completed",
            description: "Professional diploma in IT with practical exposure to programming, database systems, and web development."
        },
        {
            degree: "Diploma in English",
            institution: "ESOFT Metro Campus",
            period: "Mar 2022 - Mar 2023",
            field: "English",
            grade: "Merit",
            status: "Completed",
            description: "Professional qualification in English language and communication skills."
        },
        {
            degree: "Advanced Level - Physical Science",
            institution: "Methodist Central College",
            period: "Jan 2013 - Jan 2022",
            field: "Physical Science",
            status: "Completed",
            description: "Advanced level education with specialization in Physical Science. Active participant in sports and student leadership (Cricketer | Prefect).",
            activities: ["Cricketer", "Prefect"]
        },
        {
            degree: "Ordinary Level Education",
            institution: "Chenkalady Central College",
            period: "Jan 2008 - Dec 2012",
            field: "General Education",
            status: "Completed",
            description: "Foundation education with active participation in student leadership and extracurricular activities (Junior Prefect).",
            activities: ["Junior Prefect"]
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
            icon: <HiMail className="w-5 h-5" />,
            label: "LinkedIn",
            value: "Dinath Sivaranjan",
            link: "https://www.linkedin.com/in/dinath-sivaranjan"
        }
    ]
}