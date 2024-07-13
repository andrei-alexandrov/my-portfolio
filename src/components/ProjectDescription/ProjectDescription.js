import React from "react";
import classNames from "classnames";

const ProjectCard = ({
  title,
  description,
  usedTechnologies,
  additionalDescription,
  buttonLink,
  buttonText,
  sourceCodeLink,
  mode,
}) => {
  return (
    <div>
      <div className="project-title">{title}</div>
      <div
        className={classNames({
          "portfolio-project-text": mode,
          "portfolio-project-text-light": !mode,
        })}
      >
        <div className="global-text-description">
          {description}
          <br />
          <br />
          <span
            className={classNames({
              "use-white": mode,
              "use-black": !mode,
            })}
          >
            Used:&nbsp;
          </span>
          {usedTechnologies.map((tech, index) => (
            <span key={index} className={tech.className}>
              {tech.name}
              {index < usedTechnologies.length - 1 ? "," : ""}&nbsp;
            </span>
          ))}
          <br />
          <span
            className={classNames({
              "use-white": mode,
              "use-black": !mode,
            })}
          >
            Additional:&nbsp;
          </span>
          {additionalDescription}
          <br />
        </div>
        <br />

        {buttonLink && (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <a href={buttonLink} target="_blank" rel="noreferrer" className="">
              <button className="project-play-btn">{buttonText}</button>
            </a>
          </div>
        )}

        {sourceCodeLink && (
          <div className="link-content">
            Source code:
            <a href={sourceCodeLink.url} target="_blank" rel="noreferrer">
              <img src={sourceCodeLink.icon} alt="Github" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
