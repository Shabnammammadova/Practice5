import  Card  from "../../components/Card/card"
import Cards from "../../components/Cards/cards"
import Huge  from "../../components/Huge/huge"
import Footer from "../../components/Footer/footer"
import React from 'react'
import "./home.css"
const home = () => {
  return (
   <>
   
   <div className='img1' >
    <h1 style={{marginTop:"120px",textAlign:"center",padding:"10%",fontWeight:"bold",color:"white",fontFamily:"sans-serif",fontSize:"60px"}}>
    REAL FITNESS <br />
DEPENDS ON EXERCISE
    </h1>
    <h3 style={{marginTop:"-170px",textAlign:"center",color:"white"}}>SHAPE YOUR BODY WELL.</h3>
   </div>
   

   <Card/>
   <Cards/>
   <Huge/>
   <Footer/>
   </>
  )
}

export default home
