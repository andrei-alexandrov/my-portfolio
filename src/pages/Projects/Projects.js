import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import ProjectDescription from "../../components/ProjectDescription/ProjectDescription";
import projectsData from "../../projectsData";

import ColoredLines from "../../components/ColoredLines/ColoredLines";
import SwiperComponent from "../../components/ImageSlider/ImageSlider";

import "./Projects.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Projects() {
  const { mode } = useSelector((state) => state.darkMode);

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
                <div className="project-gallery-title">Gallery</div>
                <SwiperComponent
                  images={project.images}
                />
              </React.Fragment>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}
