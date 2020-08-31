import React from "react";
import Hero from "../components/Hero";
import Link from "../components/Link";

function About() {
  return (
    <div>
      <Hero backgroundImage="/asset/image/c1.jpg">
        <h1>About</h1>
        <h3 className="container h4">
          I am Berhane from Oakland, CA, a motivated junior web developer,
          currently learning full stack web development in UC Berkeley extension
          I enjoy taking complex problems and turning them into simple and
          beautiful interface design. I also love the logic and structure of
          coding and always strive to write elegant and efficient code, like
          HTML, CSS and JavaScript. If I am not coding you will find me in
          natural park enjoying myself with natures beauty
        </h3>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <Link
                url="https://www.linkedin.com/in/berhane-teklemariam-a92813178"
                name="Linkedin"
                fontawesome = {<i className="fab fa-linkedin-in fa-4x"></i>}
               
              />
            </div>
            <div className="col-sm">
              <Link
                url="https://github.com/berhane011" 
                name="Github"
                fontawesome = {<i className="fab fa-github fa-4x"></i>}
              />
            </div>
            <div className="col-sm">
              <Link url="#" 
              name="resume"
              fontawesome = {<i className="far fa-file fa-4x"></i>}
              />
            </div>
          </div>
        </div>
      </Hero>
    </div>
  );
}

export default About;
