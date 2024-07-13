import React, { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import ProjectDescription from "../../components/ProjectDescription/ProjectDescription";
import projectsData from "../../projectsData";

import ColoredLines from "../../components/ColoredLines/ColoredLines";
import Arrows from "../../components/Arrows/Arrows";
import SwiperComponent from "../../components/ImageSlider/ImageSlider";

import "./Projects.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Projects() {
  const [enlargedImg, setEnlargedImg] = useState(null);

  const swiperRefs = useRef(projectsData.map(() => React.createRef()));
  const { mode } = useSelector((state) => state.darkMode);

  const handleImageClick = (img) => {
    setEnlargedImg(img);
  };

  const handleCloseClick = () => {
    setEnlargedImg(null);
  };

  return (
    <Container>
      <Row>
        <Col>
          <div className="portfolio" id="projects">
            <ColoredLines />
            <div className="project-header">
              <span style={{ color: mode ? "white" : "black" }}>My</span>{" "}
              Projects
            </div>
            {projectsData.map((project, index) => (
              <React.Fragment key={index}>
                <ProjectDescription
                  title={project.title}
                  description={project.description}
                  usedTechnologies={project.usedTechnologies}
                  additionalDescription={project.additionalDescription}
                  sourceCodeLink={project.sourceCodeLink}
                  mode={mode}
                  buttonLink={project.buttonLink?.url}
                  buttonText={project.buttonLink?.buttonText}
                />
                <SwiperComponent
                  images={project.images}
                  swiperRef={swiperRefs.current[index]}
                  enlargeImage={handleImageClick}
                />
                <Arrows swiperRef={swiperRefs.current[index]} />
              </React.Fragment>
            ))}

            {enlargedImg && (
              <div
                className="enlarged-image-overlay"
                onClick={handleCloseClick}
              >
                <div className="enlarged-image-container">
                  <img src={enlargedImg} alt="pic" className="enlarged-image" />
                </div>
              </div>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
}
