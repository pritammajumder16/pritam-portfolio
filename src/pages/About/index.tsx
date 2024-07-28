import { skills } from "../../constants/skills";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../../constants/experiences";
import { CTA } from "../../components/Shared";
import { useContext, useMemo } from "react";
import { ThemeContext } from "../../Context/ThemeContext";

const About = () => {
  const themeContext = useContext(ThemeContext);
  const [bgColor, btnBackClass] = useMemo(() => {
    if (themeContext?.theme == "dark") {
      return ["#192734", "btn-back-dark"];
    } else {
      return ["#fff", "btn-back"];
    }
  }, [themeContext?.theme]);
  console.log(bgColor, themeContext?.theme);
  return (
    <section className="max-w-5xl mx-auto sm:p-16 pb-12 !pt-[126px] px-8 min-h-[calc(100vh-80px)]">
      <span className="sm:text-5xl text-3xl font-semibold sm:leading-snug font-poppins dark:text-gray-100">
        Hello, I'm&nbsp;
        <span className="blue-gradient_text font-semibold drop-shadow">
          Pritam
        </span>
      </span>
      <div className="mt-5 flex  sm:text-base text-sm text-justify flex-col gap-3 text-slate-400 ">
        <span>
          Full stack developer, specializing in technical education through
          hands-on learning and building applications.
        </span>
      </div>
      <div className="py-10 flex flex-col">
        <span className="font-semibold sm:text-3xl text-xl relative font-poppins dark:text-gray-100">
          My skills
        </span>
        <div className="mt-16 flex flex-wrap gap-12 items-center justify-center">
          {skills.map((skill) => (
            <div className="block-container size-20" key={skill.name}>
              <div className={`${btnBackClass} rounded-xl`}></div>
              <div className="btn-front rounded-xl flex flex-col gap-2 justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="size-1/2 object-contain"
                />
                <span className="text-xs text-center dark:text-gray-100">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-16">
        <span className="font-semibold sm:text-3xl text-xl relative font-poppins dark:text-gray-100">
          Work experience
        </span>
        <div className="mt-5 flex  flex-col gap-3 text-slate-400 ">
          <span>
            I've worked with all sorts of companies, leveling up my skills and
            teaming up with smart people. Here's the rundown:
          </span>
        </div>
        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.date}
                date={experience.date}
                dateClassName="dark:text-gray-100 text-black-400"
                icon={
                  <div className="flex justify-center items-center size-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                iconStyle={{ background: experience.iconBg }}
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                  backgroundColor: bgColor,
                }}
              >
                <div className="">
                  <span className="text-black-400 text-xl font-poppins font-semibold dark:text-gray-100">
                    {experience.title}
                  </span>
                  <p
                    className="text-black-400 dark:text-gray-100 font-medium font-base"
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                  <ul className="my-5 list-disc ml-5 space-y-2">
                    {experience.points.map((point, index) => (
                      <li
                        key={index}
                        className="text-black-500/50 dark:text-slate-400 font-normal pl-1 text-sm"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
      <hr className="border-slate-200 dark:border-slate-500" />
      <CTA />
    </section>
  );
};

export default About;
