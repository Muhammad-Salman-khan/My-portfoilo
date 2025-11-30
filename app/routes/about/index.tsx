import { motion } from "motion/react";
const about = () => {
  const personalInfo = {
    name: "M. Salman Khan",
    title: "Frontend Web Developer",
    location: "Karachi, Pakistan",
    email: "alibinkhan465@gmail.com",
    linkedin: "linkedin.com/in/salman-khan-dev",
    github: "github.com/alibinkhan465",
    bio: "MERN Stack Developer building production-ready web applications. I architect responsive, high-performance frontends with React.js & TailwindCSS while engineering secure, real-time backends with Firebase & Node.js. My stack: APIs, Auth, Cloud DB → Vercel deployment. Clean code, optimized UX, and CI/CD are my standards. Shipping solutions at speed.",
  };

  const skills = [
    "React.js",
    "TypeScript",
    "TailwindCSS",
    "JavaScript",
    "Firebase",
    "Shadcn",
    "Git & GitHub",
    "Vercel",
    "Postman",
    "MUI",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20,
      },
    },
  };

  const cardHover = {
    rest: { scale: 1 },
    hover: {
      scale: 1.02,
      y: -4,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
      },
    },
  };
  const skillVariants = {
    hidden: { opacity: 0, scale: 0.6, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: 0.5,
        damping: 15,
      },
    }),
  };
  return (
    <>
      <div className="min-h-screen bg-[#0a0a0f] text-slate-100 antialiased selection:bg-blue-500/30 overflow-hidden">
        {/* Animated Background */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-20 -left-20 w-72 h-72 md:w-96 md:h-96 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-72 h-72 md:w-96 md:h-96 bg-purple-500/20 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#0a0a0f]/60 to-[#0a0a0f]" />
        </div>

        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Hero Section */}
          <motion.section
            variants={{ itemVariants }}
            className="relative rounded-2xl md:rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl mb-16 sm:mb-20 md:mb-24"
          >
            <div className="relative p-6 sm:p-10 md:p-14 lg:p-16">
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-4xl font-extrabold tracking-tight bg-linear-to-r text-white bg-clip-text "
                animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                style={{ backgroundSize: "200% 200%" }}
              >
                {personalInfo.name}
              </motion.h1>

              <motion.p
                className="mt-2 text-lg sm:text-xl md:text-2xl text-slate-300 font-light"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {personalInfo.title}
              </motion.p>

              <motion.p
                className="mt-4 text-sm sm:text-base md:text-lg text-slate-400 max-w-4xl leading-relaxed font-light"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {personalInfo.bio}
              </motion.p>

              {/* Contact Chips */}
              <motion.div
                className="mt-6 sm:mt-8 flex flex-wrap gap-2 sm:gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                {[
                  {
                    icon: "📧",
                    href: `mailto:${personalInfo.email}`,
                    label: personalInfo.email,
                  },
                  {
                    icon: "💼",
                    href: `https://${personalInfo.linkedin}`,
                    label: "LinkedIn",
                  },
                  {
                    icon: "",
                    href: `https://github.com/Muhammad-Salman-khan`,
                    label: "Github",
                  },
                ].map((contact, i) => (
                  <motion.a
                    key={i}
                    href={contact.href}
                    target={"_blank"}
                    rel={
                      contact.icon === "💼" ? "noopener noreferrer" : undefined
                    }
                    className="group inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-400/30 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="text-xs sm:text-sm">{contact.icon}</span>

                    <span className="text-xs sm:text-sm">{contact.label}</span>
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.section>

          {/* Skills Section */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative mb-20 sm:mb-24 md:mb-32 py-12 sm:py-16 overflow-hidden"
          >
            {/* Animated background glow */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl animate-pulse" />
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              {/* Enhanced heading with linear and glow */}
              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 inline-flex items-center gap-3"
                variants={{
                  hidden: { opacity: 0, x: -30 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.6, ease: "easeOut" },
                  },
                }}
              >
                <span className="bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Technical Skills
                </span>
                <motion.span
                  className="hidden sm:inline-block text-2xl"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  ⚡
                </motion.span>
              </motion.h2>

              {/* Skill chips with glassmorphism */}
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    custom={index}
                    variants={{ skillVariants }}
                    className="relative group"
                  >
                    {/* Glow effect on hover */}
                    <motion.div className="absolute -inset-1 bg-linear-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-xl blur-sm opacity-0 group-hover:opacity-40 transition-opacity" />

                    {/* Chip container */}
                    <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 sm:px-6 py-2.5 sm:py-3 text-slate-100 font-medium hover:border-cyan-300/30 transition-all duration-300 cursor-pointer">
                      <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-cyan-400 to-purple-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform" />

                      {/* Chip content */}
                      <span className="relative z-10 text-sm sm:text-base">
                        {skill}
                      </span>

                      {/* Shine effect */}
                      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl">
                        <div className="absolute inset-y-0 left-0 w-1/3 bg-linear-to-r from-transparent via-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Subtle bottom accent */}
              <motion.div
                className="mt-12 h-0.5 w-full bg-linear-to-r from-transparent via-cyan-400/30 to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                viewport={{ once: true }}
              />
            </div>
          </motion.section>
          {/* Awards Section */}
          <motion.section variants={{ itemVariants }}>
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 bg-linear-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent inline-block"
              whileHover={{ x: 8 }}
            >
              Recognition
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 px-6 sm:px-8 py-5 rounded-2xl bg-linear-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 backdrop-blur-sm"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-linear-to-br from-yellow-400 to-orange-400 flex items-center justify-center shrink-0">
                <svg
                  className="w-6 h-6 sm:w-7 sm:h-7 text-[#0a0a0f]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-100">
                  GitHub Student Developer Pack
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm">
                  GitHub Education • Awarded for excellence
                </p>
              </div>
            </motion.div>
          </motion.section>
        </motion.div>
      </div>
    </>
  );
};

export default about;
