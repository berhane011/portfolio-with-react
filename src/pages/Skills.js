import React from "react";
import Row from "../components/Row";
import Col from "../components/Col";
import EachSkill from "../components/EachSkill";
import jquery from "../asset/image/jquery.png"
import express from "../asset/image/express.jpg"
import handlbars from "../asset/image/handlbars.png"
import mangoDB from "../asset/image/mangoDB.png"
import mongoose from "../asset/image/mongoose.jpg"
import mysql from "../asset/image/mysql.png"
import passportJs from "../asset/image/passportJs.png"
import sequelize from "../asset/image/sequelize.png"


//  const fontawesome =[
  //  {name:"CSS",fontawesome:<i className="fab fa-4x fa-css3 text-primary"></i>},
  //  {name:"Html5",fontawesome:<i className="fab fa-4x fa-html5 text-primary"></i>},
  // {name:"Jquery", image : "asset/image/jquery.png"}]
function Skills() {
  return (
    <div>
      <h1 style={{ textAlign: "center",paddingTop:"2rem" }}>Skills</h1>
      <h2 style={{ textAlign: "center",paddingTop:"2rem" }}>Front End</h2>
    
      <Row style={{ padding: "4rem" }}>
     
        <Col size="md-3">
          <EachSkill
            name="CSS"
            fontawesome={<i className="fab fa-4x fa-css3 text-primary"></i>}
          />
        </Col>
        <Col size="md-3">
          <EachSkill
            name="Html5"
            fontawesome={<i className="fab fa-4x fa-html5 text-primary"></i>}
          />
        </Col>
        <Col size="md-3">
          <EachSkill
            name="JavaScript"
            fontawesome={<i className="fab fa-js fa-4x text-primary"></i>}
          />
        </Col>
        <Col size="md-3">
          <EachSkill
            name="Bootstrap"
            fontawesome={<i className="fab fa-bootstrap fa-4x text-primary"></i>}
          />
        </Col>
        <Col size="md-3">
          <EachSkill
            name="React"
            fontawesome={<i className="fab fa-react fa-4x text-primary"></i>}
          />
        </Col>
        <Col size="md-3">
          <EachSkill
            name="Jquery"
           image = {jquery}
          />
        </Col>
        <Col size="md-3">
          <EachSkill
            name="Bootstrap"
            fontawesome={<i className="fab fa-bootstrap fa-4x text-primary"></i>}
          />
        </Col>
      </Row>
      <h2 style={{ textAlign: "center" }}>Back End</h2>
      <Row style={{ padding: "4rem" }}>
      <Col size="md-3">
          <EachSkill
            name="Express"
           image = {express}
          />
        </Col>
        <Col size="md-3">
          <EachSkill
            name="handlbars"
           image = {handlbars}
          />
        </Col>
        <Col size="md-3">
          <EachSkill
            name="Sequelize"
           image = {sequelize}
          />
        </Col>
        <Col size="md-3">
          <EachSkill
            name="PassportJS"
           image = {passportJs}
          />
        </Col>
        <Col size="md-3">
          <EachSkill
            name="Mysql"
           image = {mysql}
          />
        </Col>
        <Col size="md-3">
          <EachSkill
            name="MangoDB"
           image = {mangoDB}
          />
        </Col>
        <Col size="md-3">
          <EachSkill
            name="Mangoos"
           image = {mongoose}
          />
        </Col>
      </Row>
    </div>
  );
}

export default Skills;
