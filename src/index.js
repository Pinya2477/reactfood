import React, { useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Button, Container, Table ,Navbar, Row ,Col} from 'react-bootstrap';
import Contact from './contact';
import Food from './food';
import Menudubu from'./menudubu';
import Menuca from'./menuca';
import Menuya from'./menuya';


// import { userContext } from "./context";

const products = [
  {
    id: 0,
    name: "ข้าวหมูทอดทงคัตสึ",
    image: "P1.png" 
  },
  {
    id: 1,
    name: "ข้าวหมูทอดทงคัตสึ",
    image: "P2.png" 
  },
  {
    id: 2,
    name: "ข้าวหมูทอดทงคัตสึ",
    image: "P3.png" 
  }
]

function MyLink(props){
  return(
  <NavLink className='link px-2' 
  to={props.path} 
  style={({ isActive, isPending }) => {
    return {
      textDecoration: isActive ? "none" : "underline",
    };
  }}
  >
    {props.linkName}
    </NavLink> 
  );
}

export function Menu(){
  return(
    <Navbar className='p2 mb-3 '>

      <MyLink  path='/'  linkName='หน้าแรก'/>
      <MyLink  path='/food' linkName='เมนูอาหารญี่ปุ่น'/>
      <MyLink  path='/contact' linkName='ผู้จัดทำ'/>
  
    </Navbar>
  );
}

function LinkMenu(props) {
  return (
    <NavLink className="btn btn-secondary" style={{fontSize: "10px" ,fontFamily: "Itim" }} size="sm" to={props.path}>
      {props.linkName}
    </NavLink>
  );
}

 function Foodlist(){
  
  return(
    <>
    <Container className='p-3 my-3'>
      <Row >
        <Col className='border p-3 my-3 text-center' style={{margin: "0px 10px"}}>
          <div><img src={products[0].image} className='img-fluid' alt={products[0].name} /></div>
          <p className='text-center'>ข้าวหน้าเนื้อดงบุริ</p>
          <h6 className='text-center'style={{fontSize: '13px'}} >
            ข้าวหน้าเนื้อ สไตล์ เมนูอาหารญี่ปุ่น ของ Youtuber ช่อง Chef Bas Fast Food
             ถอดแบบมาจากข้าวหน้าเนื้อญี่ปุ่นแท้ ๆ เลยก็ว่าได้ โดยเฉพาะในส่วนของซอสผัด 
             ที่ใช้น้ำซุปดาชิ มิริน และ ซอสโชยุ เป็นส่วนผสม ซึ่งถ้าหากใครอยากทำให้เหมือนต้นฉบับ 
             ทำตามสูตรนี้ได้เลย รับรองว่า ไม่ผิดหวัง</h6>
             <LinkMenu  path="/menudubu" linkName="ดูวิธีทำ>>"/>
             
        </Col>
       
        <Col className='border p-3 my-3 text-center' style={{margin: "0px 10px"}}>
        <div><img src={products[1].image} className='img-fluid' alt={products[1].name} /></div>
          <p className='text-center'>ราเมนหมูชาชู</p>
            <h6 className='text-center'style={{fontSize: '13px'}}>
              ราเมน เมนูอาหารญี่ปุ่น แบบเส้น ที่คนไทยหลายคนชื่นชอบ ไม่แพ้การกินก๋วยเตี๋ยวแบบจีน
              เพราะให้รสชาติของน้ำซุปที่เข้มข้น แถมเส้นยังหนานุ่ม ยิ่งกินกับหมูชาชู ยิ่งอร่อย
               ซึ่งถ้าหากใครอยากทำทานเองที่บ้าน ไม่ต้องไปกินที่ร้าน ชามละ 200 – 300 บาท
             แล้วละก็ ทำตามสูตรนี้ได้เลย รับรองว่า อร่อยไม่แพ้กัน 
             ทำตามสูตรนี้ได้เลย รับรองว่า ไม่ผิดหวัง</h6>
             <LinkMenu  path="/menuca" linkName="ดูวิธีทำ>>"/>
        </Col>
        
        <Col className='border p-3 my-3 text-center'style={{margin: "0px 10px"}} >
          <div><img src={products[2].image} className='img-fluid' alt={products[2].name} /></div>
            <p className='text-center'>ยากิโซบะ</p>
              <h6 className='text-center'style={{fontSize: '13px' }}>
                ยากิโซบะ สูตรนี้ ใช้วัตถุดิบแบบดั้งเดิมที่นิยมใช้กัน นั่นคือ 
                 เส้นยากิโซบะ เนื้อหมู กะหล่ำปลี แครอท ถั่วงอก ผัดคลุกเคล้าเข้าด้วยกัน 
                ด้วยซอสแบบโฮมเมด ให้รสชาติแบบที่เราคุ้นเคย โดยสูตรนี้เป็น เมนูอาหารญี่ปุ่น
                   แบบที่แม่บ้านชาวญี่ปุ่นทำกันเลยทีเดียว บอกต่อจากช่อง Just One Cookbook มาดูกันว่า
               ยากิโซบะแบบดั้งเดิมจากญี่ปุ่น มีวิธีการทำอย่างไร</h6>
               <LinkMenu  path="/menuya" linkName="ดูวิธีทำ>>"/>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export function Footer(){
  return(
    <>
 <div className='myfooter'>
      <span style={{ color: "blue" }}>@2023 Pinya Sukwiphat</span>
    </div>
    <div>
     
    </div>
    
    </>
  );
}

function Index(){
  return(
    <>
    <Menu />
      <p>วิธีทำอาหารญี่ปุ่นยอดฮิต</p>
    <Foodlist />
    
    <Footer />
    </>


  );
}




function App(){
  return(
   <BrowserRouter>
   <Container className='p-3 my-3 bg-light'>
    <Routes>
      <Route  path="/" element={<Index/>}/>
      <Route  path="/main" element={<Index/>}/>
      <Route  path="/food" element={<Food/>}/>
      <Route  path="/contact" element={<Contact/>}/>
      <Route  path="/menudubu" element={<Menudubu/>}/>
      <Route  path="/menuca" element={<Menuca/>}/>
      <Route  path="/menuya" element={<Menuya/>}/>
    </Routes>
   </Container>
   </BrowserRouter> 
  );

}

 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

