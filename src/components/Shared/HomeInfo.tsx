import { Link } from "react-router-dom";
import { ArrowIcon } from "../../assets/staticImages";

const InfoBox = ({
  text,
  link,
  btnText,
}: {
  text: string;
  link: string;
  btnText: string;
}) => {
  return (
    <div className="mx-5 relative flex text-white flex-col gap-3 max-w-2xl custom_blue pt-4 pb-12 px-8">
      <span className="sm:text-xl text-center  font-medium">{text}</span>
      <Link
        to={link}
        className="custom_white py-3 px-6 rounded-lg text-blue-500 text-center font-semibold sm:w-1/2 w-[90%] -bottom-5 absolute mx-auto right-0 left-0 flex justify-center items-center gap-3"
      >
        {btnText}
        <img src={ArrowIcon} className="size-4 object-contain" />
      </Link>
    </div>
  );
};

const renderContent = {
  1: (
    <div className="sm:text-xl sm:leading-snug text-center py-4 px-8 text-white mx-5 custom_blue">
      Hi, I am{" "}
      <span className="font-semibold ">
        Pritam <span className="animate-wave">👋</span>
      </span>
      <br />A full stack developer
    </div>
  ),
  2: (
    <InfoBox
      text={"Worked in many projects and picked up many skills along the way"}
      link={"/about"}
      btnText={"Learn more"}
    />
  ),
  3: (
    <InfoBox
      text={
        "Led many projects to success over the years. Curious to know more?"
      }
      link={"/projects"}
      btnText={"Visit my portfolio"}
    />
  ),
  4: (
    <InfoBox
      text={
        "Need a project done or looking for a dev? I'm just a few keystrokes away"
      }
      link={"/contact"}
      btnText={"Let's talk"}
    />
  ),
};

const HomeInfo = ({ currentStage }: { currentStage: number | null }) => {
  if (!currentStage) return null;
  return (
    ((currentStage == 1 ||
      currentStage == 2 ||
      currentStage == 3 ||
      currentStage == 4) &&
      renderContent[currentStage]) ||
    null
  );
};

export default HomeInfo;
