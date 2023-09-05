import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shubham Garg </span>
            from <span className="purple"> Hisar, India.</span>
            <br /> I'm a passionate and dedicated computer science engineering graduate,
             recently completed my <span className="purple">B.Tech</span> from 
             <span className="purple">Jaypee Institute of Information Technology, Noida </span>
             with a strong foundation in software development, data science, machine learning and cybersecurity. 
            Throughout my academic journey and professional experiences, 
            I've had the opportunity to work on a diverse range of projects and acquire a wide array of skills.
            <br />
            Additionally, I am currently employed as a Technology Analyst at
            Deloitte India(Offices of the US).
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring Astronomy, Geology and Mathematics
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Persist until succeed!"{" "}
          </p>
          <footer className="blockquote-footer">Shuinspirer</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
