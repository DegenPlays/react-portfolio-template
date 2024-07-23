import React from "react";
import Button from "../Button";
import { useTheme } from "next-themes";

import yourData from "../../data/portfolio.json";

const Socials = ({ className }) => {
  const { theme } = useTheme();
  return (
    <div>
      <div className="flex justify-center mt-5">
        <h1 className="text-2xl text-bold">
          Join the community
        </h1>
      </div>
      <div className={`${className} flex flex-wrap mob:flex-nowrap link  `}>
        {yourData.socials.map((social, index) => (
          <Button 
          classes={`${theme === "dark"
            ? "bg-white text-black hover:bg-slate-600"
          : "bg-black text-white hover:bg-slate-100"
            }`} 
            key={index} onClick={() => window.open(social.link)}>
            {social.title}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Socials;
