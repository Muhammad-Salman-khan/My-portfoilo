import { Link } from "react-router";
import { Mail, ArrowRight, Download } from "lucide-react";
import Pro from "../../public/My_profilepic.jpeg";
const HeroSection = () => {
  return (
    <>
      <section className="relative min-h-screen bg-slate-950 flex items-center justify-center overflow-hidden pt-20 lg:pt-0">
        <div className="absolute inset-0 w-full h-full">
          {/* Main Gradient Splash */}
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-purple-800/20 blur-[100px]" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-stone-600/10 blur-[100px]" />

          {/* Subtle Grid Pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
            {/* 2. Text Content */}
            <div className="flex-1 text-center lg:text-left space-y-8">
              {/* Badge / Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-blue-400 text-sm font-medium mx-auto lg:mx-0">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Available for Hire
              </div>

              {/* Headline */}
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white tracking-tight leading-tight">
                  Hello, I'm <br />
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-purple-400 to-pink-400">
                    Salman Khan
                  </span>
                </h1>
                <h2 className="text-xl sm:text-2xl text-slate-400 font-medium">
                  Front-end Developer
                </h2>
              </div>

              {/* Description */}
              <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                I craft responsive, high-performance web apps with clean
                architecture and zero compromise. Focused on building scalable
                solutions that solve real-world problems.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <Link
                  to="/project"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-blue-500/25"
                >
                  View My Work
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 border border-slate-700 hover:border-slate-600 text-white font-medium rounded-xl transition-all duration-300 hover:bg-slate-800"
                >
                  Contact Me
                </Link>
              </div>
            </div>

            {/* 3. Hero Image with Glow Effect */}
            <div className="flex-1 relative flex justify-center lg:justify-end">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px]">
                {/* Spinning Gradient Ring */}
                <div className="absolute -inset-1 bg-linear-to-tr from-blue-500 via-purple-500 to-pink-500 rounded-full blur opacity-70 animate-pulse"></div>

                {/* Image Container */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-slate-950 shadow-2xl">
                  <img
                    src={Pro}
                    alt="Muhammed Salman Khan"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/50 to-transparent opacity-60"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
