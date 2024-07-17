import React from "react";

const WorkCard = ({ img,video, name, description, onClick }) => {
  return (
    <div
      className="overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link"
      onClick={onClick}
    >
    <h1 className="mt-5 text-3xl font-medium">
      {name ? name : "Project Name"}
    </h1>
      {img ? (<div
        className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-48 mob:h-auto"
        style={{ height: "600px" }}
      >
        <img
          alt={name}
          className="h-full w-full object-cover hover:scale-110 transition-all ease-out duration-300"
          src={img}
        />
      </div>)
      : null}
      {video?(
         <iframe 
            title="Pool Funding Overview"
            width="700"
            height="500"
            src={video}
            frameBorder="1"
            allowFullScreen
            loading="lazy"
          />
        ):null}
      <h2 className="text-xl opacity-50">
        {description ? description : "Description"}
      </h2>
    </div>
  );
};

export default WorkCard;
