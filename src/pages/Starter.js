import React from "react";
import Hero from "../components/Hero";


function Starter() {
  return (
    <div>
      <Hero backgroundImage="https://img.freepik.com/free-vector/abstract-technology-particle-background_52683-25766.jpg?size=626&ext=jpg&ga=GA1.2.1629007400.1595980800">
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
