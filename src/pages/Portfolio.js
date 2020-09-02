import React, { Component } from "react";
import Card from "../components/Card";
import Row from "../components/Row"
import Col from "../components/Col"
import p1 from "../asset/portofiloImage/7.png"
import p2 from "../asset/portofiloImage/8.png"
import p3 from "../asset/portofiloImage/9.png"
import p4 from "../asset/portofiloImage/10.png"




class Portfolio extends Component {
  render() {
    return (
     <div>
       <h1 style ={{textAlign:"center"}}>Portfolio</h1>
        <Row  style ={{padding:"4rem"}}>
          <Col size="md-4" >
          <Card
          name ="weather dash board "
          image ={p3}
          link =" https://berhane011.github.io/A-timed-quiz-application-in-javascript/"/>
          </Col>
          <Col size="md-4" style ={{width:"10%"}}>
          <Card
          name ="covid-19 survey "
          image ={p2}
          link ="https://frozen-chamber-98897.herokuapp.com/"/>
          </Col><Col size="md-4">
          <Card
          name ="Quiz quesgtion"
          image ={p4}
          link ="https://berhane011.github.io/A-timed-quiz-application-in-javascript/"/>
          </Col><Col size="md-4">
          <Card
          name ="Da Burger"
          image ={p1}
          link =" https://berhane011.github.io/A-timed-quiz-application-in-javascript/"/>
          </Col>
        </Row>
      
     </div>
    
    );
  }
}

export default Portfolio;
