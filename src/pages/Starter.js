import React from "react";
import Hero from "../components/Hero";
import bg2 from "../asset/image/bg2.jpg"

function Starter() {
  return (
    <div>
      <Hero backgroundImage={bg2}>
        <h1>About</h1>
        <h3 className = "container h4">
          
          I am Berhane from Oakland, CA, a motivated junior web developer,
          currently learning full stack web development in UC Berkeley extension
          I enjoy taking complex problems and turning them into simple and
          beautiful interface design. I also love the logic and structure of
          coding and always strive to write elegant and efficient code, like
          HTML, CSS and JavaScript. If I am not coding you will find me in
          natural park enjoying myself with natures beauty
        </h3>
      </Hero>
    </div>
  );
}

export default Starter;
