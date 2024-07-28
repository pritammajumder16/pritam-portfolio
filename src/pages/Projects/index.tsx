import { Link } from "react-router-dom";
import { PersonalProjects } from "../../constants/personalProjects";
import { ArrowIcon } from "../../assets/staticImages";
import { CTA } from "../../components/Shared";
import { companyProjects } from "../../constants/companyProjects";
import { useContext, useMemo, useEffect, useRef, useState } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import { motion, useAnimation } from "framer-motion";

const Projects = () => {
  const themeContext = useContext(ThemeContext);
  const [, btnBackClass] = useMemo(() => {
    if (themeContext?.theme === "dark") {
      return ["#192734", "btn-back-dark"];
    } else {
      return ["#fff", "btn-back"];
    }
  }, [themeContext?.theme]);

  const controls = useAnimation();
  const containerRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start("visible");
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const container = containerRef.current;
    if (container && !hasAnimated) {
      observer.observe(container);
    }

    return () => {
      if (container) {
        observer.unobserve(container);
      }
    };
  }, [controls, hasAnimated]);

  return (
    <motion.section
      ref={containerRef}
      className="max-w-5xl mx-auto sm:p-16 pb-12 !pt-[126px] px-8 min-h-[calc(100vh-80px)]"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <span className="sm:text-5xl text-3xl font-semibold sm:leading-snug text-black-400 dark:text-gray-100 font-poppins">
        My&nbsp;
        <span className="blue-gradient_text font-semibold drop-shadow">
          Projects
        </span>
      </span>
      <div className="mt-5 flex flex-col gap-3 text-slate-400 text-justify">
        <span>
          I've embarked on numerous projects throughout the years, but these are
          the ones I hold closest to my heart. If you come across something that
          piques your interest in my personal projects, feel free to explore the
          codebase and contribute your ideas for further enhancements. Your
          collaboration is highly valued!
        </span>
      </div>
      <div className="mt-20 flex flex-col">
        <span className="font-semibold sm:text-3xl text-xl relative font-poppins text-black-400 dark:text-gray-100 drop-shadow">
          Personal Projects
        </span>
        <motion.div
          className="flex flex-wrap mt-10 mb-20 gap-8 "
          variants={containerVariants}
        >
          {PersonalProjects.map((project) => (
            <motion.div
              className="md:w-[400px] w-full bg-white dark:bg-black-300 p-8 rounded-lg"
              key={project.name}
              variants={itemVariants}
            >
              <div className="block-container size-12">
                <div
                  className={`${btnBackClass} rounded-xl ${project.theme}`}
                />
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img
                    src={project.iconUrl}
                    alt={"Project Icon"}
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
              <div className="mt-5 flex flex-col">
                <span className="text-2xl text-black-400 dark:text-gray-100 font-poppins font-semibold">
                  {project.name}
                </span>
                <span className="mt-2 text-slate-400 text-justify">
                  {project.description}
                </span>
                <div className="mt-5 flex items-center gap-2 font-poppins">
                  <Link
                    to={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-600 flex gap-2"
                  >
                    Live Link{" "}
                    <img
                      src={ArrowIcon}
                      alt="arrow"
                      className="size-4 object-contain"
                    />
                  </Link>
                </div>
                <span className="mt-4 text-slate-400">
                  <span className="font-semibold text-black-400 dark:text-gray-100">
                    Tech used-&nbsp;
                  </span>
                  {project.tech.join(", ")}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <hr className="border-slate-200" />
      <div className="mt-20 flex flex-col">
        <span className="font-semibold sm:text-3xl text-xl relative font-poppins text-black-400 dark:text-gray-100 drop-shadow">
          Company Projects
        </span>
        <motion.div
          className="flex flex-wrap mt-10 mb-20 gap-8"
          variants={containerVariants}
        >
          {companyProjects.map((project) => (
            <motion.div
              className="lg:w-[400px] w-full p-8 bg-white dark:bg-black-300 rounded-lg"
              key={project.name}
              variants={itemVariants}
            >
              <div className="block-container size-12">
                <div
                  className={`${btnBackClass} rounded-xl ${project.theme}`}
                />
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img
                    src={project.iconUrl}
                    alt={"Project Icon"}
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
              <div className="mt-5 flex flex-col">
                <span className="text-2xl text-black-400 dark:text-gray-100 font-poppins font-semibold">
                  {project.name}
                </span>
                <span className="mt-2 text-slate-400 text-justify">
                  {project.description}
                </span>
                <span className="mt-4 text-slate-400">
                  <span className="font-semibold text-black-400 dark:text-gray-100">
                    Tech used-&nbsp;
                  </span>
                  {project.tech.join(", ")}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <hr className="border-slate-200" />
      <CTA />
    </motion.section>
  );
};

export default Projects;
