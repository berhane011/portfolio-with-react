import React from "react";
import Row from "../components/Row";
import Col from "../components/Col";
import EachSkill from "../components/EachSkill";
 const fontawesome =[
   {name:"CSS",fontawesome:<i class="fab fa-4x fa-css3 text-primary"></i>},
   {name:"Html5",fontawesome:<i class="fab fa-4x fa-html5 text-primary"></i>},
  {name:"Jquery", image : "asset/image/jquery.png"}]
function Skills() {
  return (
    <div>
      <h1 style={{ textAlign: "center",paddingTop:"2rem" }}>Skills</h1>
      <h2 style={{ textAlign: "center",paddingTop:"2rem" }}>Front End</h2>
    
      <Row style={{ padding: "4rem" }}>
      { fontawesome.map((item)=>(
        <Col size="md-3">
        <EachSkill
         name ={item.name}
         fontawesome = {item.fontawesome}
         image ={item.image}
         
        />
      </Col>
     ))}
        <Col size="md-3">
          <EachSkill
            name="CSS"
            fontawesome={<i class="fab fa-4x fa-css3 text-primary"></i>}
          />
        </Col>
        <Col size="md-3">
          <EachSkill
            name="Html5"
            fontawesome={<i class="fab fa-4x fa-html5 text-primary"></i>}
          />
        </Col>
        <Col size="md-3">
          <EachSkill
            name="JavaScript"
            fontawesome={<i class="fab fa-js fa-4x text-primary"></i>}
          />
        </Col>
        <Col size="md-3">
          <EachSkill
            name="Bootstrap"
            fontawesome={<i class="fab fa-bootstrap fa-4x text-primary"></i>}
          />
        </Col>
        <Col size="md-3">
          <EachSkill
            name="React"
            fontawesome={<i class="fab fa-react fa-4x text-primary"></i>}
          />
        </Col>
        <Col size="md-3">
          <EachSkill
            name="Jquery"
           image = "asset\image\jquery.png"
          />
        </Col>
        <Col size="md-3">
          <EachSkill
            name="Bootstrap"
            fontawesome={<i class="fab fa-bootstrap fa-4x text-primary"></i>}
          />
        </Col>
      </Row>
      <h2 style={{ textAlign: "center" }}>Back End</h2>
      <Row style={{ padding: "4rem" }}>
      <Col size="md-3">
          <EachSkill
            name="Express"
           image = "asset/image/express.jpg"
          />
        </Col>
        <Col size="md-3">
          <EachSkill
            name="handlbars"
           image = "asset/image/handlbars.png"
          />
        </Col>
        <Col size="md-3">
          <EachSkill
            name="Sequelize"
           image = "asset\image\sequelize.png"
          />
        </Col>
        <Col size="md-3">
          <EachSkill
            name="PassportJS"
           image = "asset\image\passportJs.png"
          />
        </Col>
        <Col size="md-3">
          <EachSkill
            name="Mysql"
           image = "asset\image\mysql.png"
          />
        </Col>
        <Col size="md-3">
          <EachSkill
            name="MangoDB"
           image = "\asset\image\mangoDB.png"
          />
        </Col>
        <Col size="md-3">
          <EachSkill
            name="Mangoos"
           image = "asset\image\mongoose.jpg"
          />
        </Col>
      </Row>
    </div>
  );
}

export default Skills;
