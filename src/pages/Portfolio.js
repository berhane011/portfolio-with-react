import React, { Component } from "react";
import Card from "../components/Card";
import Row from "../components/Row"
import Col from "../components/Col"



class Portfolio extends Component {
  render() {
    return (
     <div>
       <h1 style ={{textAlign:"center"}}>Portfolio</h1>
        <Row  style ={{padding:"4rem"}}>
          <Col size="md-4" >
          <Card
          name ="weather dash board "
          image ="\asset\9.png"
          link =" https://berhane011.github.io/A-timed-quiz-application-in-javascript/"/>
          </Col>
          <Col size="md-4" style ={{width:"10%"}}>
          <Card
          name ="covid-19 survey "
          image ="\asset\8.png"
          link ="https://frozen-chamber-98897.herokuapp.com/"/>
          </Col><Col size="md-4">
          <Card
          name ="Quiz quesgtion"
          image ="\asset\10.png"
          link ="https://berhane011.github.io/A-timed-quiz-application-in-javascript/"/>
          </Col><Col size="md-4">
          <Card
          name ="Da Burger"
          image ="/asset/7.png"
          link =" https://berhane011.github.io/A-timed-quiz-application-in-javascript/"/>
          </Col>
        </Row>
      
     </div>
    
    );
  }
}

export default Portfolio;
