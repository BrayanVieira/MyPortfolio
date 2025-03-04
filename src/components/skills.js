import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"; // Importe os estilos CSS opcionais
import mater1 from "../assets/img/meter1.svg";
import mater2 from "../assets/img/meter2.svg";
import mater3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responseive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skils">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx"></div>
            <h2>skills</h2>
            <p>
              I am Brayan Gonçalves Vieira, a software developer with three
              years of experience in creating innovative and efficient
              solutions. My expertise spans a wide range of languages and tools,
              enabling me to deliver robust and scalable projects.
              <br />
              <br />
              <strong>Languages and Tools:</strong>
              <br />
              - Languages: Python, JavaScript (including TypeScript), HTML/CSS,
              SQL, JSON.
              <br />
              - Frameworks and Libraries: Django, Flask, Tailwind CSS, Selenium.
              <br />
              - Web Development: Building responsive web applications, intuitive
              interfaces, and customized automations.
              <br />
              - Databases: Experience with SQL for data modeling and
              manipulation.
              <br />
              - Automation: Using Selenium to automate processes and tests,
              improving operational efficiency.
              <br />
              <br />
              <strong>Professional Skills:</strong>
              <br />
              - Programming and Problem Solving: Proficient in creating
              practical and efficient solutions for complex challenges.
              <br />
              - UI/UX Design: Developing visually appealing and functional
              interfaces, focused on user experience.
              <br />
              - Collaboration and Innovation: Effective teamwork in
              multidisciplinary environments, always striving to innovate and
              deliver results aligned with market demands.
              <br />
              <br />I am committed to continuous learning and ready to apply my
              skills to challenging projects, contributing with creativity,
              precision, and technical excellence.
            </p>
            <Carousel
              responsive={responseive}
              infinite={true}
              className="skills-slider"
            >
              <div className="item">
                <img scr={mater1} alt="Image" />
                <h5>Development</h5>
              </div>
              <div className="item">
                <img scr={mater2} alt="Image" />
                <h5>Websites</h5>
              </div>
              <div className="item">
                <img scr={mater3} alt="Image" />
                <h5>Automations</h5>
              </div>
              <div className="item">
                <img scr={mater1} alt="Image" />
                <h5>Development</h5>
              </div>
            </Carousel>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" scr={colorSharp} />
    </section>
  );
};
