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
    projects: [],
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
                { name: "HTML", level: "Intermediate" }
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
                { name: "Node.js", level: "Advanced" },
                { name: "MariaDB", level: "Advanced" },
                { name: "Java", level: "Intermediate" },
                { name: "PHP", level: "Intermediate" }
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