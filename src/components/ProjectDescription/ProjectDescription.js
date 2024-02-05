import React from "react";

const ProjectCard = ({
  title,
  description,
  used,
  additional,
  specialFeature,
  buttonLink,
  buttonText,
  sourceLink,
  mode,
}) => {
  return (
    <div>
      <div className="project-title">{title}</div>
      <div
        className={
          mode ? "portfolio-project-text" : "portfolio-project-text-light"
        }
      >
        <div>
          {description}
          <br />
          <br />
          <span
            className={mode ? "used-additional-white" : "used-additional-black"}
          >
            Used:&nbsp;
          </span>
          {used.map((tech, index) => (
            <span key={index} className={tech.className}>
              {tech.name}
              {index < used.length - 1 ? "," : ""}&nbsp;
            </span>
          ))}
          <br />
          <span
            className={mode ? "used-additional-white" : "used-additional-black"}
          >
            Additional:&nbsp;
          </span>
          {additional}
          <br />
          {specialFeature && (
            <span>
              {specialFeature}
              <br />
            </span>
          )}
        </div>
      </div>
      <br />

      {buttonLink && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <a
            href={buttonLink.url}
            target="_blank"
            rel="noreferrer"
            className=""
          >
            <button className="project-play-btn">{buttonText}</button>
          </a>
        </div>
      )}
      {sourceLink && (
        <div className="link-content">
          Source code:
          <a href={sourceLink.url} target="_blank" rel="noreferrer">
            <img src={sourceLink.icon} alt="Github" />
          </a>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
