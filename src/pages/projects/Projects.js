import React, { useEffect } from "react";
import ProjectCard from "../../pages/projects/index.js";
import weatherapp from "../../assets/weather-app.png";
import passwordgen from "../../assets/passwordgen.png";
import workdaysche from "../../assets/workdayschedule.png";
import webflow from "../../assets/webflow.png";
import photoapp from "../../assets/photo-app.png";



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
      desc: "This project involves building a weather dashboard using the OpenWeatherMap third-party API. The user is able to search the weather using a zip-code or the city name. Previous city searches are stored in the local history for the users convenience.",
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
      desc: "Work day scheduler calender is an application that allows users to add and save events for each hour of a work day. The app was created using HTML, CSS and JQuery. It uses Day.js libraries to easily handle time and dates in JavaScript.",
      github: "https://github.com/christian1512-FE/DevCM-WDS-2022",
      website: "https://christian1512-fe.github.io/DevCM-WDS-2022/",
    },
    {
      id: 4,
      title: "Webflow Design",
      image: webflow,
      desc: "This is a simple web design I created using Webflow, this is my first application using this platform. Webflow offers a completely visual canvas, eliminating the need for manual coding. It's an excellent tool for translating design ideas into functional web applications",
      github: "https://github.com/christian1512-FE",
      website: "https://christians-spectacular-site-d15146.webflow.io/",
    },
    {
    id: 5,
    title: "Photo Application",
    image: photoapp,
    desc: "I have developed a captivating photo application utilizing a combination of React, HTML, CSS, and JavaScript. This engaging platform is dedicated to showcasing a collection of photos I have creatively edited of my friends.",
    github: "https://github.com/christian1512-FE/DevCM-photo-app",
    website: "https://christian1512-fe.github.io/DevCM-photo-app",
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
