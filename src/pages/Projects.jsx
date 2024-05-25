import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import veva from "../assets/projects/veva.PNG";
import simpleasido from "../assets/projects/do.PNG";
import pg from "../assets/projects/pg.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={simpleasido}
              isBlog={false}
              title="Simple As I Do"
              description="Simple As I Do (SAID) is revolutionizing wedding planning by providing an intuitive platform for couples to 
              discover vendors effortlessly. Our user-friendly interface streamlines the vendor selection process, eliminating 
              the need for accounts and simplifying the journey towards the big day"
              ghLink="#"
              demoLink="http://simpleasido.com.au/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={veva}
              isBlog={false}
              title="Veva Collect"
              description="Veva Collect is tailored for the music industry, offering specialized tools for audio management, file sharing, 
              credit attribution, and metadata organization. Musicians can store, share, collaborate, and manage their music 
              releases seamlessly, whether they're published or unreleased."
              ghLink="#"
              demoLink="https://vevacollect.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pg}
              isBlog={false}
              title="Messenger Clone"
              description="Veva Collect is tailored for the music industry, offering specialized tools for audio management, file sharing, 
              credit attribution, and metadata organization. Musicians can store, share, collaborate, and manage their music 
              releases seamlessly, whether they're published or unreleased."
              ghLink=""
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  )
}

export default Projects