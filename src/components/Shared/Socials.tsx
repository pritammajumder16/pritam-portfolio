import { Link } from "react-router-dom";
import { socialLinks } from "../../constants/socialLinks";

const Socials = () => {
  return (
    <section className=" flex justify-center gap-8 pb-2 flex-wrap">
      {socialLinks.map((social) => {
        return (
          <Link
            to={social.link}
            key={social.name}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-center transition-transform transform hover:scale-105"
          >
            <img
              src={social.iconUrl}
              alt={social.name}
              className="size-8 object-contain mb-1 text-black-300 dark:text-gray-100"
            />
            <span className="text-black-400 text-xs dark:text-gray-100 font-poppins font-semibold">
              {social.name}
            </span>
          </Link>
        );
      })}
    </section>
  );
};

export default Socials;
