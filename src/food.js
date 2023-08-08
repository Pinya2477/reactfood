import React, { useRef } from 'react';
import {  Footer, Menu, } from ".";
import { Container ,Table, Button} from "react-bootstrap";

 


export default function Food (){
    
    
    return(
        <>
        <Menu />
        <Container />
            <p>เมนูอาหารญี่ปุ่น</p>
        <Table className='table'striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>ชื่อเมนู</th>
                <th>ราคา (บาท)</th>
                </tr>
            </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>ข้าวหน้าเนื้อดงบุริ</td>
                        <td>100</td>
            
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>ราเมนหมูชาชู</td>
                        <td>120</td>
                     </tr>
                    <tr>
                        <td>3</td>
                        <td>ยากิโซบะ</td>
                        <td>180</td>
                    </tr>
                     <tr>
                <td colSpan={2}>รวม</td>
                    <td></td>
                </tr>
                <tr>
                    <td colSpan={2}>ค่าเฉลี่ย</td>
                    <td></td>
                </tr>
                
            </tbody>
            
    </Table>
         <Container />
             <h5>เพิ่มเมนูใหม่</h5>
               <div > 
                    <form> 
                        
                            <label className='p-3 my-3' style={{fontFamily: "Itim" }} >ชื่อเมนู <input type="text" />
                            </label>
                            <label className='p-3 my-2' style={{fontFamily: "Itim" }} > ราคา: <input type="price" />
                            </label>
                            <Button className='p-2 my-2' variant="primary" size='sm' style={{fontFamily: "Itim" }}>Add</Button>{' '}
                            
                    </form>
                    
                </div>
        <Footer />
        </>
    );
}









