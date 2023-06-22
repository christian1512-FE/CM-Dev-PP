import React, { useEffect } from "react";
import ProjectCard from "../../pages/projects/index.js";
import weatherapp from "../../assets/weather-app.png";
import passwordgen from "../../assets/passwordgen.png";
import workdaysche from "../../assets/workdayschedule.png";

import AOS from "aos";
import "aos/dist/aos.css";

import "./projects.css";

function Projects() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const myprojects = [
    {
      id: 1,
      title: "Weather Dashboard",
      image: weatherapp,
      desc: "This project involves building a weather dashboard using the OpenWeatherMap third-party API. The user is able to search the weather using a zip-code or the city name.",
      github: "https://github.com/christian1512-FE/DevCM-WA-3API",
      website: "https://christian1512-fe.github.io/DevCM-WA-3API/",
    },
    {
      id: 2,
      title: "Password Generator",
      image: passwordgen,
      desc: "Password generator is an application that allows users to generate a random password based on criteria they've selected. The user has the option to choose to include numbers, lowercase & upper case letters, symbols and numbers.",
      github: "https://github.com/christian1512-FE/DevCM-Secure-PWD",
      website: "https://christian1512-fe.github.io/DevCM-Secure-PWD/",
    },

    {
      id: 3,
      title: "Work Day Scheduler",
      image: workdaysche,
      desc: "Lorem ipsum dolor sit amet consectetur porro ipsum commodi nemo recusandae cupiditate minima ut, ullam praesentium ipsa eum et quia voluptate nobis. Unde, magni",
      github: "https://github.com/christian1512-FE/DevCM-WDS-2022",
      website: "https://christian1512-fe.github.io/DevCM-WDS-2022/",
    },

  ];

  return (
    <div>
      <div className="heading" id="portfolio">
        <h2>PORTFOLIO</h2>
      </div>
      {myprojects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          image={project.image}
          desc={project.desc}
          website={project.website}
          github={project.github}
        />
      ))}
    </div>
  );
}

export default Projects;
