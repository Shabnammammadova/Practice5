import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';


import "./navbar.css"
import { Link } from '@mui/material';

const Navbar = () => {
  return (
  <>
   <Box sx={{ flexGrow: 1 }}  >
      <AppBar position="fixed" style={{backgroundColor:"white",height:"120px"}}>
        <Toolbar>
        <div>
            <div style={{display:"flex",gap:"100px",textAlign:"center",marginTop:"10px"}}>
            <h4 style={{color:"black",fontSize:"15px",marginLeft:"450px",textAlign:"justify"}} >We believe we helps people <br /> for happier lives  </h4> 

<img style={{marginLeft:"50px",height:"40px"}} src="https://preview.colorlib.com/theme/gym/img/logo.png" alt="" />
<p style={{color:"black",marginLeft:"130px",marginTop:"10px"}}>+880 123 12 658 439</p><LocalPhoneIcon style={{border:"5px solid #F6214B",backgroundColor:"#F6214B",width:"40px",height:"50px"}}/>
            </div>
<hr style={{width:"400%"}} />
      <div style={{display:"flex",gap:"50px",marginTop:"25px"}}>
    
      <div style={{marginLeft:"700px"}}>
      <Link style={{textDecoration:"none",color:"#F6214B",marginLeft:"10px"}} className='li' to="/">Home</Link>
      <Link style={{textDecoration:"none",marginLeft:"10px",color:"black"}} className='li' to="/weoffer" >We Offer</Link>
      <Link style={{textDecoration:"none",marginLeft:"10px",color:"black" }} className='li' to="/topcourse">Top Course</Link>
      <Link style={{textDecoration:"none",marginLeft:"10px",color:"black" }} className='li' to="/schedule">Schedule</Link>
      <Link style={{textDecoration:"none",marginLeft:"10px" ,color:"black"}} className='li' to="/trainer">Trainer</Link>
      <Link style={{textDecoration:"none",marginLeft:"10px",color:"black" }} className='li' to="/plan">Plan</Link>
      <Link style={{textDecoration:"none",marginLeft:"10px" ,color:"black"}} className='li' to="/pages">Pages</Link>
        
      </div>
      
     

      </div>
    
      </div> 


      
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
         
          </Typography>
     
        </Toolbar>
      </AppBar>
    </Box>
  
  </>
  )
}

export default Navbar