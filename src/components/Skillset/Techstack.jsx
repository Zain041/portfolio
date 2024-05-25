import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiReact, DiNodejs, DiGit } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";
import { FaBootstrap, FaVuejs } from "react-icons/fa";
import {
  SiMaterialui,
  SiGraphql,
  SiRedux,
  SiMongodb,
  SiHtml5,
  SiApollographql,
  SiTailwindcss,
  SiExpress,
  SiFirebase,
} from "react-icons/si";

const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
        <p className="skill-name">HTML5</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p className="skill-name">JavaScript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <p className="skill-name">Node.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p className="skill-name">React.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandNextjs />
        <p className="skill-name">Next.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
        <p className="skill-name">Redux</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb />
        <p className="skill-name">MongoDB</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGraphql />
        <p className="skill-name">Graphql</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMaterialui />
        <p className="skill-name">Material-UI</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <p className="skill-name">Git</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApollographql />
        <p className="skill-name">Apollo</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
        <p className="skill-name">TailwindCSS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
        <p className="skill-name">Express.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaVuejs />
        <p className="skill-name">Vue.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaBootstrap />
        <p className="skill-name">Bootstrap</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <p className="skill-name">Firebase</p>
      </Col>
    </Row>
  );
};

export default Techstack;
