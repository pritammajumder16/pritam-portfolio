import { Link } from "react-router-dom";
import { PersonalProjects } from "../../constants/personalProjects";
import { ArrowIcon } from "../../assets/staticImages";
import { CTA } from "../../components/Shared";
import { companyProjects } from "../../constants/companyProjects";

const Projects = () => {
  return (
    <section className="max-w-5xl mx-auto sm:p-16 pb-12 !pt-[126px] px-8 min-h-[calc(100vh-80px)]">
      <span className="sm:text-5xl text-3xl font-semibold sm:leading-snug font-poppins">
        My&nbsp;
        <span className="blue-gradient_text font-semibold drop-shadow">
          Projects
        </span>
      </span>

      <div className="mt-5 flex  flex-col gap-3 text-slate-500 text-justify">
        <span>
          I've embarked on numerous projects throughout the years, but these are
          the ones I hold closest to my heart. If you come across something that
          piques your interest in my personal projects, feel free to expore the
          codebase and contribute your ideas for further enhancements. Your
          collaboration is highly valued!
        </span>
      </div>
      <div className="mt-20  flex flex-col">
        <span className="font-semibold sm:text-3xl text-xl relative font-poppins blue-gradient_text  drop-shadow">
          Personal Projects
        </span>
        <div className="flex flex-wrap my-20 gap-16">
          {PersonalProjects.map((project) => (
            <div className="md:w-[400px] w-full" key={project.name}>
              <div className="block-container size-12">
                <div className={`btn-back rounded-xl ${project.theme}`} />
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img
                    src={project.iconUrl}
                    alt={"Project Icon"}
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
              <div className="mt-5 flex flex-col">
                <span className="text-2xl font-poppins font-semibold">
                  {project.name}
                </span>
                <span className="mt-2 text-slate-500 text-justify">
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
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr className="border-slate-200" />
      <div className="mt-20 flex flex-col">
        <span className=" font-semibold sm:text-3xl text-xl relative font-poppins  blue-gradient_text  drop-shadow ">
          Company Projects
        </span>
        <div className="flex flex-wrap my-20   gap-16">
          {companyProjects.map((project) => (
            <div className="lg:w-[400px] w-full" key={project.name}>
              <div className="block-container size-12">
                <div className={`btn-back rounded-xl ${project.theme}`} />
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img
                    src={project.iconUrl}
                    alt={"Project Icon"}
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
              <div className="mt-5 flex flex-col">
                <span className="text-2xl font-poppins font-semibold">
                  {project.name}
                </span>
                <span className="mt-2 text-slate-500 text-justify">
                  {project.description}
                </span>
                <span className="mt-2 text-slate-500 text-justify">
                  <span className="">Tech used:&nbsp; </span>{" "}
                  {project.tech.join(", ")}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
};

export default Projects;
