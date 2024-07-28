import { Link } from "react-router-dom";
import { PersonalProjects } from "../../constants/personalProjects";
import { ArrowIcon } from "../../assets/staticImages";
import { CTA } from "../../components/Shared";
import { companyProjects } from "../../constants/companyProjects";
import { useContext, useMemo } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import RevealOnScroll from "../../components/Ui/RevealOnScroll";

const Projects = () => {
  const themeContext = useContext(ThemeContext);
  const [, btnBackClass] = useMemo(() => {
    if (themeContext?.theme == "dark") {
      return ["#192734", "btn-back-dark"];
    } else {
      return ["#fff", "btn-back"];
    }
  }, [themeContext?.theme]);
  return (
    <section className="max-w-5xl mx-auto sm:p-16 pb-12 !pt-[126px] px-8 min-h-[calc(100vh-80px)]">
      <RevealOnScroll>
        <span className="sm:text-5xl text-3xl font-semibold sm:leading-snug text-black-400 dark:text-gray-100 font-poppins">
          My&nbsp;
          <span className="blue-gradient_text font-semibold drop-shadow">
            Projects
          </span>
        </span>
      </RevealOnScroll>

      <RevealOnScroll>
        <div className="mt-5 flex  flex-col gap-3 text-slate-500 dark:text-slate-400 text-justify">
          <span className="font-semibold">
            I've embarked on numerous projects throughout the years, but these
            are the ones I hold closest to my heart. If you come across
            something that piques your interest in my personal projects, feel
            free to expore the codebase and contribute your ideas for further
            enhancements. Your collaboration is highly valued!
          </span>
        </div>
      </RevealOnScroll>
      <div className="mt-20  flex flex-col">
        <span className="font-semibold text-3xl  relative font-poppins text-black-400 dark:text-gray-100  drop-shadow">
          Personal Projects
        </span>
        <div className="flex flex-wrap mt-10 mb-20 gap-8">
          {PersonalProjects.map((project) => (
            <RevealOnScroll
              key={project.name}
              className=" self-stretch md:w-[400px] w-full"
            >
              <div
                className={`md:w-[400px] w-full bg-white dark:bg-black-300 p-8 rounded-lg border-b-4 border-black-300 dark:border-gray-100 `}
                key={project.name}
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
                  <span className="mt-2 text-slate-500 dark:text-slate-400 font-semibold text-justify">
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
                        className="sizze-4 object-contain"
                      />
                    </Link>
                  </div>
                  <span className="mt-4 text-slate-500 dark:text-slate-400">
                    <span className="font-semibold  text-black-400 dark:text-gray-100  ">
                      Tech used-&nbsp;{" "}
                    </span>{" "}
                    <span className="font-semibold">
                      {" "}
                      {project.tech.join(", ")}
                    </span>
                  </span>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
      <RevealOnScroll>
        <hr className="border-slate-200" />
      </RevealOnScroll>
      <div className="mt-20 flex flex-col">
        <RevealOnScroll>
          <span className=" font-semibold sm:text-3xl text-xl relative font-poppins  text-black-400 dark:text-gray-100   drop-shadow ">
            Company Projects
          </span>
        </RevealOnScroll>
        <div className="flex flex-wrap my-20   gap-8">
          {companyProjects.map((project) => (
            <RevealOnScroll key={project.name} className="md:w-[400px] w-full">
              <div
                className="lg:w-[400px] w-full p-8 rounded-lg bg-white dark:bg-black-300"
                key={project.name}
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
                  <span className="mt-2 text-slate-500 dark:text-slate-400 text-justify font-semibold">
                    {project.description}
                  </span>
                  <span className="mt-4 text-slate-500 dark:text-slate-400">
                    <span className="font-semibold text-black-400 dark:text-gray-100">
                      Tech used-&nbsp;{" "}
                    </span>{" "}
                    <span className="font-semibold">
                      {project.tech.join(", ")}
                    </span>
                  </span>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
      <RevealOnScroll>
        <hr className="border-slate-200" />
      </RevealOnScroll>

      <RevealOnScroll className="w-full">
        <CTA />
      </RevealOnScroll>
    </section>
  );
};

export default Projects;
