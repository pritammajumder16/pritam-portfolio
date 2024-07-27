import { skills } from "../../constants/skills";

const About = () => {
  return (
    <section className="max-w-5xl mx-auto sm:p-16 pb-12 !pt-[126px] px-8 min-h-[calc(100vh-80px)]">
      <span className="sm:text-5xl text-3xl font-semibold sm:leading-snug font-poppins">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Pritam Majumder
        </span>
      </span>
      <div className="mt-5 flex  flex-col gap-3 text-slate-500 ">
        <span>
          Full stack developer, specializing in technical education through
          hands-on learning adn building applications.
        </span>
      </div>
      <div className="py-10 flex flex-col">
        <span className="font-semibold sm:text-3xl text-xl relative font-poppins">
          My skills
        </span>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container size-20" key={skill.name}>
              <div className="btn-back rounded-xl"></div>
              <div className="btn-front rounded-xl flex flex-col justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="size-1/2 object-contain"
                />
                <span className="text-xs text-center">{skill.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-16">
        <span className="font-semibold sm:text-3xl text-xl relative font-poppins">
          Work Experience
        </span>
        <div className="mt-5 flex  flex-col gap-3 text-slate-500 ">
          <span>
            I've worked with all sorts of companies, leveling up my skills and
            teaming up with smart people. Here's the rundown:
          </span>
        </div>
        <div className="mt-12 flex"></div>
      </div>
    </section>
  );
};

export default About;
