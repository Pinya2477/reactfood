import React from "react";
import { Footer, Menu } from ".";
import { Container,Row, Col } from "react-bootstrap";


export default function Contact(){
    return(
        <>
       
        <Menu />
        <Container/>
        <Avatar />
        <Intro />
        <SkillList />  

        
      <Footer />
        </>
    );
    
}
function SkillList() {
    return (
      
      <div className="skill-list">
        <Container />
          <Row />
          <Col className="" />
           <Skill skill="Unity" emoji="😁 "  color="Cyan" />
           <Skill skill="PHP" emoji="😃" color="Orange" />
           <Skill skill="React" emoji="😅" color="Yellow" />
           <Skill skill="photoshop" emoji="😊" color="Orangered" />
           <Skill skill="Mysql" emoji="😂" color="Pink" />
      </div>
    );
  }
  
  function Skill(props) {
    return (
      <div className="skill" style={{ backgroundColor: props.color }}>
        <span>{props.skill}</span>
        <span>{props.emoji}</span>
      </div>
    );
  }
  
  function Intro(){
    return(
      <div >
        <Container />
        <Row >
          <Col >
          <h5>ภิญญา  สุขวิพัฒน์</h5>
        <h6>
          นักศึกษาสาขาวิชาเทคโนโลยีสารสนเทศและนวัตกรรมดิจิทัล <br></br>
          คณะวิทยาศาสตร์  มหาวิทยาลัยอุบลราชธานี<br></br>
          ชื่นชอบการเล่นกีฬา เทคโนโลยีสมัยใหม่ ...<br></br>
        </h6>
        </Col>
        </Row>
      </div>
    )
  }
  
  function Avatar(){
    return <img className="avatar" src="Pinya.jpg" alt="Pinya Sukwiphat"></img>
  }

  

