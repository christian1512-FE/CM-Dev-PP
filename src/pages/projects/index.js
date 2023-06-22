import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import "./projects.css";


function ProjectCard({ title, desc, image, website, github }) {
  return (
    <div className="portfolio-container"  data-aos="fade-up-right" data-aos-duration="1000">
      <div className="projects">
        <div className="img">
        <img src={image} alt="working" />
        </div>
        <div className="content">
          <h2>{title}</h2>
          <p>{desc}</p>
          <div className="links">
            <button>
              <a href={github}>
                Code
                <FaGithub />
              </a>
            </button>
            <button>
              <a href={website}>
                Live Demo
                <BiLinkExternal />
              </a>
            </button>
          </div>
        </div>
      </div>


    </div>
  );
}

export default ProjectCard;
