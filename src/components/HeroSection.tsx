import { Button } from "./ui/button.tsx";
import { Github, Linkedin, Mail, Download, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ImageWithFallback } from "./figma/ImageWithFallback.tsx";
import { useState, useEffect } from "react";
import { BubbleBackground } from "./ui/shadcn-io/bubble-background";
import { track } from "../lib/analytics";



// import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);

  const titles = [
    "Fullstack Developer",
      // "Wordpress Specialist",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % titles.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [titles.length]);

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
      <section
          id="hero"
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Wavy animated background */}
        <div className="absolute inset-0 z-0">
          <BubbleBackground
              // containerClassName="w-full h-full"
              className="w-full h-full"
              interactive={false}
          />
        </div>
        {/* Floating elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
              className="absolute top-24 left-24 w-60 h-60 bg-blue-300/30 rounded-full blur-3xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
              className="absolute bottom-24 right-24 w-80 h-80 bg-purple-300/30 rounded-full blur-3xl"
              animate={{ scale: [1.1, 1, 1.1], opacity: [0.4, 0.2, 0.4] }}
              transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-1 lg:gap-12 items-center">
            <motion.div
                className="relative w-40 h-40 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl mx-auto
"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
            >
              {/* Lottie іконка перед фото, внизу */}
              {/*<div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 w-12 h-12">*/}
              {/*  <DotLottieReact*/}
              {/*      src="https://lottie.host/7582e168-2885-41d2-b0aa-d3575c861d3a/sPupT57AtH.lottie"*/}
              {/*      loop*/}
              {/*      autoplay*/}
              {/*  />*/}
              {/*</div>*/}

              {/* Фото */}
              <ImageWithFallback
                  src="/portfolio.dev/images/image1.webp"
                  alt="Profile picture"
                  className="w-full h-full object-cover rounded-full"
              />
            </motion.div>
            {/* Left - Text */}
            <motion.div
                className="text-center lg:text-center"
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
            >
              <motion.p
                  className="text-lg text-muted-foreground mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
              >
               👋  Hey, I'm
              </motion.p>

              <motion.h1
                  className="text-4xl sm:text-5xl font-bold mb-4 text-foreground"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
              >
                Olha Halaiba
              </motion.h1>

              {/* Dynamic Title */}
              <div className="h-10 flex items-center justify-center lg:justify-center mb-6">
                <AnimatePresence mode="wait">
                  <motion.h2
                      key={roleIndex}
                      className="text-4xl sm:text-5xl  font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -40 }}
                      transition={{ duration: 0.6 }}
                  >
                    {titles[roleIndex]}
                  </motion.h2>
                </AnimatePresence>
              </div>

              <motion.p
                  className="text-base sm:text-lg text-muted-foreground mb-4 lg:mb-8 max-w-xl lg:max-w-none leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
              >
                  I deliver <span className="font-semibold text-blue-600 dark:text-blue-400">end-to-end web solutions</span> using React, Laravel, PHP,
                  and WordPress — combining <span className="font-semibold text-purple-600 dark:text-purple-400">strong front-end development</span> with
                  <span className="font-semibold text-purple-600 dark:text-purple-400"> practical back-end experience</span>,
                  <span className="font-semibold text-purple-600 dark:text-purple-400"> API integration</span>, and
                  <span className="font-semibold text-purple-600 dark:text-purple-400"> performance optimization</span>.
              </motion.p>

              {/* Stats */}
              <motion.div
                  className="grid grid-cols-3 sm:grid-cols-3 gap-1 mb-5 lg:mb-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
              >
                <div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">3+</div>
                  <div className="text-sm text-muted-foreground">Years in Dev</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">20+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">100%</div>
                  <div className="text-sm text-muted-foreground">Love what i do</div>
                </div>
              </motion.div>

              {/* Buttons */}
                <motion.div
                    className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-center mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    {/* Explore */}
                    <Button
                        data-track="explore_work"
                        size="lg"
                        className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-8 shadow-md hover:scale-105 transition-transform"
                        onClick={() => handleScroll("projects")}
                    >
                        Explore Work
                    </Button>

                    {/* Resume */}
                    <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="w-full sm:w-auto px-8 font-semibold border hover:border-blue-500 hover:text-blue-500 transition-colors"
                    >
                        <a
                            href="/portfolio.dev/Resume.pdf"
                            download
                            target="_blank"
                            rel="noopener noreferrer"
                            data-track="resume_download"
                            onClick={() => track("download_resume")}
                        >
                            <Download className="mr-2 h-4 w-4" />
                            Get Resume
                        </a>
                    </Button>
                </motion.div>

                {/* Social Links */}
              <motion.div
                  className="flex justify-center lg:justify-center space-x-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
              >
                <a href="https://github.com/galayba-stack/"  data-track="github" target="_blank" rel="noopener noreferrer">
                  <Github className="hover:text-blue-600 transition-transform hover:scale-110" />
                </a>
                <a href="https://www.linkedin.com/in/olha-h-dev/" data-track="linkedin" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="hover:text-blue-700 transition-transform hover:scale-110" />
                </a>
                <a href="mailto:galayba.work@gmail.com" data-track="mail">
                  <Mail className="hover:text-red-500 transition-transform hover:scale-110" />
                </a>
              </motion.div>
            </motion.div>

            {/* Right - Image */}

          </div>
        </div>

        {/* Scroll Down */}
        <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
        >
          <motion.button
              onClick={() => handleScroll("about")}
              className="text-muted-foreground hover:text-primary"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown size={28} />
          </motion.button>
        </motion.div>
      </section>
  );
}
