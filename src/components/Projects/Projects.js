import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import emotion from "../../Assets/Projects/emotion.png";
import agrobot from "../../Assets/Projects/agrobot.png";
import knowshare from "../../Assets/Projects/knowshare.jpg"
import meme from "../../Assets/Projects/meme.jpg"
import derby from "../../Assets/Projects/derby.jpg"
import AtmaNirbhar from "../../Assets/Projects/atmanirbhar.png"
import textplug from "../../Assets/Projects/textplug.png"
import discordbot from "../../Assets/Projects/discordbot.jpg"
import phish from "../../Assets/Projects/phish.jpg"
import crime from "../../Assets/Projects/crime.jpg"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={agrobot}
              isBlog={false}
              title="AgroBot"
              description="An AI-powered full stack chat application empowering farmers to optimize crop selection, detect plant
              diseases early, fertilizer prediction and forecast crop prices trend in market.
              "
              ghLink="https://github.com/ShubhamGarg9060/agribot-b1"
              demoLink="https://t.me/magneto_agro_bot"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={knowshare}
              isBlog={false}
              title="The KnowShare"
              description="A dynamic Book Swap application connecting book enthusiasts to search, browse, and request book
              swaps, enhancing their reading collections and minimizing waste."
              ghLink="https://github.com/ShubhamGarg9060/KnowShare"
              demoLink="https://www.loom.com/share/953f338dde074e9c987e05a6bbc8a98a?sid=9413ccd1-b21d-4ed6-8e28-2b92548ffde4"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={meme}
              isBlog={false}
              title="memeCDN"
              description="A custom Content Delivery Network (CDN) infrastructure specializing in efficient global meme distribution,
              atop TiDB to optimize cache management, load balancing, and content replication."
              ghLink="https://github.com/ShubhamGarg9060/memeCDN"
              demoLink="https://devpost.com/software/meme-delivery-network"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={derby}
              isBlog={false}
              title="Big Data Derby"
              description="A comprehensive analysis of horse racing data in refining betting strategies and predicting odds of winning for
              individual horses to improve decision-making during Big Data kaggle challenge 2022"
              ghLink="https://github.com/ShubhamGarg9060/Big-Data-Derby"
              demoLink="https://github.com/ShubhamGarg9060/Big-Data-Derby"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AtmaNirbhar}
              isBlog={false}
              title="AtmaNirbhar Web Portal"
              description="Atmanirbhar is a user-centric web app using ML algorithms such as KMeans and RandomForest
               to predict job titles for disabled individuals based on their qualifications with a user-friendly interface built on Flask, Firebase for security, and a 24/7 Chatbot for support."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              demoLink="https://www.youtube.com/watch?v=1vv7E05mSmM&ab_channel=ShrutiGarg"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crime}
              isBlog={false}
              title="Purvanuman"
              description="A Time Series Forecasting Model that
              predicts the crimes in India with an accuracy of 94%
              using ARIMA time series forecasting model and visualised 
              the crime distribution on the India map
              using India shapefiles and then clustered them into
              safer & unsafer zones using K-Means Clustering.
              "
              ghLink="https://github.com/ShubhamGarg9060/Crime-Forecasting-in-INDIA"
              demoLink="https://blogs.soumya-jit.tech/" 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={textplug}
              isBlog={false}
              title="TextbasePlug"
              description="A fantastic chatbot, powered by the cutting-edge Textbase framework contains various plugins 
              such as Weather, time and date, calculator and task reminder functionalities! 
              Textbase is an innovative and easy-to-use library designed to create chatbots swiftly 
              and efficiently, requiring minimal coding. Even if you're new to programming, 
              you can effortlessly build and interact with chatbots using this powerful framework.
              "
              ghLink="https://github.com/ShubhamGarg9060/textbase"
              demoLink="https://youtu.be/vzUtKqxfaog?si=5JESwP8hYsXrXlpH" 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={discordbot}
              isBlog={false}
              title="Discord Bot for Stocks"
              description="The Discord Bot for Stocks project is a Python-based bot designed 
              for Discord, offering real-time stock market information,
               historical stock data plotting, and automated daily updates, 
               enhancing users' trading capabilities and insights. 
              "
              ghLink="https://github.com/ShubhamGarg9060/DiscordbotStock"
              demoLink="https://coderspacket.com/discord-bot-for-stocks-in-python" 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={phish}
              isBlog={false}
              title="Phishtico"
              description="A Machine learning model that predicts
              various phishing websites with an accuracy of 93% which compared different 
              classifiers like Logistic Regression, Support Vector Machine, Naive Bayes
              Classifier, Decision Trees and Multilayer Perceptron. 
              "
              ghLink="https://github.com/ShubhamGarg9060/PHISHTICO"
              demoLink="https://github.com/ShubhamGarg9060/PHISHTICO" 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
