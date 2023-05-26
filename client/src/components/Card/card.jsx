import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import "./card.css"

export default function ImgMediaCard() {
  return (

<>
<h1 style={{textAlign:"center",marginTop:"90px",fontSize:"40px"}}>We care about what we offer</h1>
<h4 style={{color:"gray",textAlign:"center",marginTop:"18px"}}>Who are in extremely love with eco friendly system.</h4>
<div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"30px"}}>
<Card sx={{ maxWidth: 320,marginTop:"130px",height:"280px",backgroundColor:"white"  }}>
      <CardMedia
        component="img"
        alt="green iguana"
style={{width:"80px",height:"50px",marginLeft:"110px"}}
         image="https://preview.colorlib.com/theme/gym/img/o2.png"
        className='card1'
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" style={{textAlign:"center",fontWeight:"bold"}} >
        Regular Exercise
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{color:"gray",textAlign:"center"}}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
        </Typography>
      </CardContent>
     
    </Card>

    <Card sx={{ maxWidth: 320,marginTop:"130px",height:"280px" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        style={{width:"80px",height:"50px",marginLeft:"110px"}}
         image="https://preview.colorlib.com/theme/gym/img/o2.png"
        className='card1'
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" style={{textAlign:"center",fontWeight:"bold"}}>
        Training on the go
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{color:"gray",textAlign:"center"}}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
        </Typography>
      </CardContent>
  
    </Card>

    <Card sx={{ maxWidth: 320,marginTop:"130px",height:"280px" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        style={{width:"80px",height:"50px",marginLeft:"110px"}}
         image="https://preview.colorlib.com/theme/gym/img/o2.png"
        className='card1'
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" style={{textAlign:"center",fontWeight:"bold"}}>
        Body Building Packages
        </Typography>
        <Typography variant="body2" color="text.secondary"style={{color:"gray",textAlign:"center"}} >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
        </Typography>
      </CardContent>
     
    </Card>


</div>
    



    </>
  );
}