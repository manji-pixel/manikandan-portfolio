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
      company: "Handletech labs",
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
    {
      company: "SAARC Masts Tech",
      role: "Associate Back-End Engineer",
      duration: "Oct 2024 – Aug 2025",
      location: "Coimbatore",
      points: [
        "Developed Controller of Examination modules with Laravel, JWT, and MFA-based security.",
        "Designed AWS Lambda microservices for result generation and download flows.",
        "Built scalable CRM dashboards, task systems, notes, and role-based access workflows.",
        "Reduced latency and infrastructure overhead through modular architecture and optimized queries.",
      ],
    },
    {
      company: "CodeTez Technologies ",
      role: "Software Engineer",
      duration: "Oct 2022 – Aug 2024",
      location: "Chennai",
      points: [
        "Worked across ERP, logistics, e-commerce, healthcare, and school management platforms.",
        "Contributed to large-scale products including Freshma ERP serving 60K+ users.",
        "Built ordering systems, wallet integrations, dashboards, and real-time operational workflows.",
        "Delivered practical full-stack modules with strong backend architecture and deployment support.",
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
    {
      title: "School ERP & CRM",
      tag: "Education / CRM",
      description:
        "Secure academic operations platform covering examination workflows, attendance, reports, role controls, and serverless result generation.",
      stack: ["Laravel", "JWT", "MFA", "AWS Lambda", "DynamoDB"],
      outcomes: ["Secure downloads", "Faster results", "Scalable modules"],
    },
    {
      title: "AramMilk",
      tag: "Subscriptions / Delivery",
      description:
        "Subscription-based ordering and delivery automation system with partner assignment, wallet recharge, and admin insights.",
      stack: ["Laravel", "MySQL", "JavaScript", "Razorpay"],
      outcomes: ["Automated workflows", "Realtime dashboards", "Optimized SQL"],
    },
    {
      title: "Zlaata",
      tag: "Fashion E-commerce",
      description:
        "Modern commerce experience with scalable admin flows, product catalog management, and fast search-driven browsing.",
      stack: ["Laravel", "Backpack", "Typesense", "Bootstrap"],
      outcomes: ["Fast search", "Admin productivity", "Responsive UI"],
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-950 text-white">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_22%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.14),transparent_26%),radial-gradient(circle_at_bottom,rgba(16,185,129,0.10),transparent_24%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:34px_34px]" />
        <motion.div
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
          className="absolute left-[-4rem] top-10 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 24, 0], x: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
          className="absolute right-[-2rem] top-24 h-80 w-80 rounded-full bg-fuchsia-500/15 blur-3xl"
        />
        <motion.div
          animate={{ y: [0, -18, 0] }}
          transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
          className="absolute bottom-[-4rem] left-1/3 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl"
        />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-cyan-300 via-sky-300 to-fuchsia-400 font-black text-slate-950 shadow-lg shadow-cyan-500/20">
              MA
            </div>
            <div>
              <div className="text-sm font-bold tracking-[0.24em] text-cyan-300">MANIKANDAN A</div>
              <div className="text-xs text-slate-400">Full-Stack & Backend Developer</div>
            </div>
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-slate-300 transition hover:text-cyan-300">
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-2xl bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5"
            >
              Let’s Talk
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-xl border border-white/10 bg-white/5 p-2 text-slate-200 md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-slate-950/95 px-4 py-4 backdrop-blur-xl md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-3 py-2 text-slate-300 transition hover:bg-white/5 hover:text-cyan-300"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main id="top">
        <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-28">
          <motion.div initial="hidden" animate="show" variants={fadeUp} transition={{ duration: 0.7 }} className="flex flex-col justify-center">
            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.28em] text-cyan-200 sm:text-xs">
              <Sparkles className="h-4 w-4" /> Available for strong software opportunities
            </div>

            <h1 className="max-w-5xl text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">
              I build <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-fuchsia-400 bg-clip-text text-transparent">scalable business products</span> with premium UI, solid backend systems, and cloud-ready architecture.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Full-Stack Developer focused on Laravel, MySQL, AWS, APIs, and business-centric applications across ERP, CRM, healthcare, logistics, e-commerce, and education domains.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#projects" className="rounded-2xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-2xl shadow-cyan-500/30 transition hover:-translate-y-0.5">
                View Projects
              </a>
              <a href="#contact" className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/50 hover:bg-white/10">
                Hire Me
              </a>
              <a href="/resume.pdf" className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/50 hover:bg-white/10">
                <Download className="h-4 w-4" /> Resume
              </a>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {[
                "Laravel Expert",
                "AWS Lambda",
                "Microservices",
                "REST APIs",
                "MySQL Optimization",
                "ERP / CRM Systems",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 backdrop-blur-xl">
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial="hidden" animate="show" variants={fadeUp} transition={{ duration: 0.8, delay: 0.12 }} className="relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-r from-cyan-500/20 via-transparent to-fuchsia-500/20 blur-2xl" />
            <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-2xl shadow-cyan-950/40 backdrop-blur-xl">
              <div className="rounded-[1.6rem] border border-white/10 bg-slate-900/90 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-sm uppercase tracking-[0.32em] text-cyan-300">Developer Snapshot</div>
                    <h2 className="mt-2 text-2xl font-bold">Manikandan A</h2>
                    <p className="text-slate-400">SOfteware Engineer</p>
                  </div>
                  <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-cyan-400 to-fuchsia-500 text-xl font-black text-slate-950 shadow-lg shadow-fuchsia-500/20">
                    MA
                  </div>
                </div>

                <div className="mt-6 grid gap-3 text-sm text-slate-300">
                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"><MapPin className="h-4 w-4 text-cyan-300" /> Cuddalore, Tamil Nadu</div>
                  <a href="mailto:amanikandan141@gmail.com" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition hover:border-cyan-400/30"><Mail className="h-4 w-4 text-cyan-300" /> amanikandan141@gmail.com</a>
                  <a href="tel:+919025583807" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition hover:border-cyan-400/30"><Phone className="h-4 w-4 text-cyan-300" /> +91 9025583807</a>
                  <a href="https://www.linkedin.com/in/manikandan-a-b15343241" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition hover:border-cyan-400/30 hover:text-cyan-300"><Linkedin className="h-4 w-4 text-cyan-300" /> LinkedIn Profile</a>
                  <a href="#" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition hover:border-cyan-400/30 hover:text-cyan-300"><Github className="h-4 w-4 text-cyan-300" /> GitHub Profile</a>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  {stats.map((item) => (
                    <div key={item.label} className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-4">
                      <div className="text-2xl font-black text-cyan-300">{item.value}</div>
                      <div className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-400">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                icon: <Code2 className="h-5 w-5 text-cyan-300" />,
                title: "Clean Engineering",
                text: "Maintainable code, modular architecture, and business-first software execution.",
              },
              {
                icon: <Database className="h-5 w-5 text-cyan-300" />,
                title: "Optimized Data Layer",
                text: "Strong SQL design, query tuning, and backend performance improvements.",
              },
              {
                icon: <Cloud className="h-5 w-5 text-cyan-300" />,
                title: "Cloud Deployment",
                text: "Hands-on experience with AWS Lambda, EC2, S3, and scalable deployment flows.",
              },
            ].map((card, index) => (
              <motion.div
                key={card.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: index * 0.08 }}
                className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10">{card.icon}</div>
                <h3 className="text-lg font-bold">{card.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{card.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-cyan-200">
                <User2 className="h-4 w-4" /> About Me
              </div>
              <h2 className="text-3xl font-bold">Turning business needs into reliable digital products.</h2>
              <p className="mt-5 leading-8 text-slate-300">
                I specialize in building secure, scalable, and production-ready applications. My experience covers backend architecture, API development, cloud services, business dashboards, admin systems, and real-time operational workflows.
              </p>
              <p className="mt-4 leading-8 text-slate-300">
                I enjoy solving complex workflows and converting them into simple, maintainable, and performance-focused software systems.
              </p>
            </motion.div>

            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.1 }} className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-cyan-200">
                <Layers3 className="h-4 w-4" /> Services
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {services.map((service) => (
                  <div key={service} className="rounded-2xl border border-white/10 bg-slate-900/60 p-4 text-slate-200">
                    {service}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-cyan-500/10 via-slate-900 to-fuchsia-500/10 p-8 backdrop-blur-xl">
            <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-cyan-200">
                  <Trophy className="h-4 w-4" /> Highlights
                </div>
                <h2 className="text-3xl font-bold">Why recruiters should notice me</h2>
                <p className="mt-4 leading-8 text-slate-300">
                  I combine backend depth, product thinking, database optimization, and deployment knowledge to ship business-focused applications that actually work in production.
                </p>
              </div>
              <div className="grid gap-3">
                {achievements.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-slate-200">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        <section id="experience" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mb-10 max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-cyan-200">
              <Briefcase className="h-4 w-4" /> Experience
            </div>
            <h2 className="text-3xl font-bold sm:text-4xl">Professional Journey</h2>
          </motion.div>

          <div className="space-y-6">
            {experiences.map((item, index) => (
              <motion.div
                key={item.company}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: index * 0.08 }}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
              >
                <div className="grid gap-6 lg:grid-cols-[230px_1fr]">
                  <div>
                    <div className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-cyan-200">
                      Role {index + 1}
                    </div>
                    <h3 className="mt-4 text-2xl font-bold">{item.role}</h3>
                    <p className="mt-1 text-slate-300">{item.company}</p>
                    <p className="text-sm text-slate-400">{item.duration}</p>
                    <p className="text-sm text-slate-500">{item.location}</p>
                  </div>
                  <div className="grid gap-3">
                    {item.points.map((point) => (
                      <div key={point} className="rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3 text-slate-300">
                        {point}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mb-10 max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-cyan-200">
              <FolderKanban className="h-4 w-4" /> Featured Projects
            </div>
            <h2 className="text-3xl font-bold sm:text-4xl">Projects That Show My Range</h2>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="group rounded-[2rem] border border-white/10 bg-white/5 p-6 transition duration-300 hover:border-cyan-300/30 hover:bg-white/10"
              >
                <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-6">
                  <div className="flex items-center justify-between gap-4">
                    <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-cyan-200">
                      {project.tag}
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-slate-500 transition group-hover:text-cyan-300" />
                  </div>
                  <h3 className="mt-4 text-2xl font-bold">{project.title}</h3>
                  <p className="mt-4 leading-8 text-slate-300">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    {project.outcomes.map((item) => (
                      <div key={item} className="rounded-xl bg-gradient-to-br from-cyan-500/15 to-fuchsia-500/10 px-3 py-3 text-sm text-slate-200">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mb-10 max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-cyan-200">
              <Code2 className="h-4 w-4" /> Skills
            </div>
            <h2 className="text-3xl font-bold sm:text-4xl">Technical Stack</h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {Object.entries(skills).map(([key, values], index) => (
              <motion.div
                key={key}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: index * 0.05 }}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
              >
                <h3 className="text-lg font-bold text-white">{key}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {values.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-slate-900/70 px-3 py-2 text-sm text-slate-300">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-cyan-500/10 via-slate-900 to-fuchsia-500/10 p-8 backdrop-blur-xl">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-cyan-200">
                  Education
                </div>
                <h2 className="text-2xl font-bold">Mahendra Institute of Engineering and Technology</h2>
                <p className="mt-2 text-slate-300">Bachelor of Mechanical Engineering • 2016 – 2020 • GPA 6.74</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-slate-300">
                Strong in practical product development, APIs, backend architecture, cloud deployment, and business-focused software systems.
              </div>
            </div>
          </motion.div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="grid gap-4 md:grid-cols-3">
            {[
              { icon: <Rocket className="h-5 w-5 text-cyan-300" />, title: "Production Mindset", text: "Not just design — this portfolio presents you as someone who can ship real systems." },
              { icon: <Trophy className="h-5 w-5 text-cyan-300" />, title: "Recruiter Friendly", text: "Clear sections, strong value messaging, and fast contact access for hiring managers." },
              { icon: <Sparkles className="h-5 w-5 text-cyan-300" />, title: "Premium Visuals", text: "Glassmorphism, gradients, motion, and modern layout give it a standout feel." },
            ].map((item) => (
              <div key={item.title} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10">{item.icon}</div>
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{item.text}</p>
              </div>
            ))}
          </motion.div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:pb-24">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-cyan-200">
                  Let’s Connect
                </div>
                <h2 className="text-3xl font-bold sm:text-4xl">Let’s build something powerful together.</h2>
                <p className="mt-4 max-w-2xl leading-8 text-slate-300">
                  I’m open to backend, full-stack, Laravel, AWS, and product-focused software opportunities. Whether it’s a full-time role, freelance work, or a strong software collaboration, I’d love to connect.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a href="mailto:amanikandan141@gmail.com" className="rounded-2xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-2xl shadow-cyan-500/30 transition hover:-translate-y-0.5">
                  Email Me
                </a>
                <a href="tel:+919003993474" className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/50 hover:bg-white/10">
                  Call Me
                </a>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950/60">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-sm text-slate-400 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© 2026 Manikandan A. Crafted to stand out.</p>
          <div className="flex items-center gap-4">
            <a href="mailto:amanikandan141@gmail.com" className="transition hover:text-cyan-300">Email</a>
            <a href="https://www.linkedin.com/in/manikandan-a-b15343241" target="_blank" rel="noreferrer" className="transition hover:text-cyan-300">LinkedIn</a>
            <a href="#" className="transition hover:text-cyan-300">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
