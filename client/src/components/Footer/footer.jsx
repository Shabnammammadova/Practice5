import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import GoogleIcon from '@mui/icons-material/Google';

import "./footer.css"
const footer = () => {
  return (
   <>
   <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"480px",marginBottom:"30px"}}>

<div style={{marginTop:"50px",color:"#77A4D3"}}>
  <h4>Copyright ©2023 All rights reserved | This template is made with by <span style={{color:"#F6214B"}}>Colorlib </span> </h4>
</div>

<div style={{marginTop:"40px",marginRight:"80px",gap:"20x"}} className="icon">
<FacebookIcon className="icon1" style={{marginRight:"5px",width:"45px",height:"50px"}}/>
<TwitterIcon className="icon1" style={{marginRight:"5px",width:"45px",height:"50px"}} />
<SportsBasketballIcon className="icon1" style={{marginRight:"5px",width:"45px",height:"50px"}}  />
<GoogleIcon className="icon1" style={{marginRight:"5px",width:"45px",height:"50px"}} />
</div>

   </div>
   
   
   </>
  )
}

export default footer
