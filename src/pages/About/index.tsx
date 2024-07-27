const About = () => {
  return (
    <div className="max-w-5xl mx-auto sm:p-16 pb-12 !pt-[126px] px-8 min-h-[calc(100vh-80px)]">
      <span className="sm:text-5xl text-3xl font-semibold sm:leading-snug font-poppins">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Pritam Majumder
        </span>
        <div>
          <span className="mt-5 flex flex-col gap-3 text-slate-500 ">
            Full stack developer, specializing in technical education through
            hands-on learning adn building applications.
          </span>
        </div>
        <div className="py-10 flex flex-col">
          <span className="font-semibold sm:text-3xl text-xl relative font-poppins">
            My skills
          </span>
          <div className="mt-16 flex flex-wrap gap-12"></div>
        </div>
      </span>
    </div>
  );
};

export default About;
