import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Menu,
  X,
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Download,
  Linkedin,
  Github,
  Code2,
  Database,
  Cloud,
  Briefcase,
  FolderKanban,
  User2,
  Sparkles,
  CheckCircle2,
  Trophy,
  Rocket,
  Layers3,
} from "lucide-react";

export default function ManikandanPortfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = useMemo(
    () => [
      { label: "About", href: "#about" },
      { label: "Experience", href: "#experience" },
      { label: "Projects", href: "#projects" },
      { label: "Skills", href: "#skills" },
      { label: "Contact", href: "#contact" },
    ],
    []
  );

  const skills = {
    Languages: ["PHP", "Python", "JavaScript", "HTML5", "CSS3"],
    Frameworks: ["Laravel", "React.js", "Django", "Bootstrap", "jQuery"],
    Databases: ["MySQL", "SQL Server", "Amazon DynamoDB"],
    Cloud: ["AWS EC2", "AWS Lambda", "Amazon S3", "IAM", "Cloudflare", "Cloudways"],
    Tools: ["Git", "GitHub", "GitHub Actions", "Postman", "DBeaver", "SSMS", "FileZilla"],
  };

  const stats = [
    { value: "3+", label: "Years Experience" },
    { value: "8+", label: "Major Projects" },
    { value: "60K+", label: "Users Served" },
    { value: "30%", label: "Latency Improved" },
  ];

  const services = [
    "Backend Development",
    "Full-Stack Web Apps",
    "REST API Development",
    "ERP / CRM Systems",
    "AWS Deployment",
    "Database Optimization",
  ];

  const achievements = [
    "Built ERP, CRM, healthcare, logistics, and e-commerce solutions",
    "Worked on scalable Laravel + MySQL applications with AWS deployment",
    "Improved system performance using query optimization and modular architecture",
    "Designed APIs and business workflows used by large user bases",
  ];

  const experiences = [
    {
      company: "Handletechlabs",
      role: "Software Developer",
      duration: "Aug 2025 – Present",
      location: "Chennai",
      points: [
        "Building Zlaata, an e-commerce platform for online fashion purchasing.",
        "Developing scalable Laravel + MySQL backend services for catalog, inventory, and order workflows.",
        "Managing operational modules through Laravel Backpack-based admin systems.",
        "Improving product discovery through Typesense search and responsive UI integration.",
      ],
    },
  ];

  const projects = [
    {
      title: "Freshma ERP",
      tag: "ERP / Commerce",
      description:
        "A large-scale ERP and order management ecosystem with inventory, dashboards, wallet logic, analytics, and cloud-hosted operations.",
      stack: ["Laravel", "MySQL", "AWS EC2", "S3", "Razorpay"],
      outcomes: ["60K+ users", "Role-based workflows", "Business dashboards"],
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">
      <h1 className="text-4xl font-bold">Manikandan Portfolio</h1>
      <p className="mt-4 text-slate-300">React + Tailwind portfolio template ready for deployment.</p>
    </div>
  );
}
