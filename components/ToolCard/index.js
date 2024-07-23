import React from "react";

const ToolCard = ({ img, video, name, logo, description, onClick }) => {
  return (
    <div
      className="work-card overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link"
      style={{ cursor: 'pointer' }}
      onClick={onClick}
    >
      {logo ? (<div
        className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-48 mob:h-auto"
        style={{ height: "50px", width: "200px" }}
      >
        <img
          alt={name}
          className="h-full w-full object-cover hover:scale-110 transition-all ease-out duration-300"
          src={logo}
          style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }}
        />
      </div>) : (
        <h1 className="mt-5 text-3xl font-medium">
          {name ? name : "Tool Name"}
        </h1>
      )}
      {img ? (<div
        className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-48 mob:h-auto"
        style={{ height: "400px" }}
      >
        <img
          alt={name}
          className="h-full w-full object-cover hover:scale-110 transition-all ease-out duration-300"
          src={img}
          style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }}
        />
      </div>)
        : null}
      {video ? (
        <iframe
          title="Pool Funding Overview"
          width={600}
          height={400}
          src={video}
          frameBorder="1"
          allowFullScreen
          loading="lazy"
        />
      ) : null}
      {/* <h2 className="text-xl opacity-50" dangerouslySetInnerHTML={{ __html: description ? description.replace(/\n/g, '<br />') : "Description" }}>
        {description ? (
          description.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))
        ) : (
          "Description"
        )}
      </h2> */}
      <h2 
        className="text-xl opacity-50" 
        dangerouslySetInnerHTML={{ 
          __html: description ? description.replace(/\n/g, '<br />') : "Description" 
        }}
      />
    </div>
  );
};

export default ToolCard;
