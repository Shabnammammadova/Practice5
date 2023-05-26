import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';



import "./cards.css"
const cards = () => {
  return (
    <>


    <h1 style={{fontWeight:"bold",textAlign:"center",marginTop:"150px",fontSize:"40px"}}>Top Courses That are open for Students</h1>
    <h4 style={{color:"gray",textAlign:"center",marginTop:"18px"}}>Who are in extremely love with eco friendly system.</h4>
    <div>

<div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"30px",marginTop:"50px"}}>
 
<Card sx={{ width:"350px",height:"270px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://preview.colorlib.com/theme/gym/img/c1.jpg" className='img2'
          style={{height:"200px"}}
          alt="green iguana"
        />
        <button  style={{width:"150px",marginLeft:"25px",height:"40px",marginTop:"-240px",backgroundColor:"#F6214B",border:"1px solid #F6214B",color:"white"}}>Course Available</button>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" style={{fontWeight:"bold",fontSize:"18px"}} >
          Running Classes
          <p style={{marginLeft:"280px",marginTop:"-30px",color:"#F6214B",fontWeight:"bold"}}>$275</p>
          </Typography>
        
        </CardContent>
      </CardActionArea>
    </Card>

    <Card sx={{ width:"350px",height:"270px"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://preview.colorlib.com/theme/gym/img/c2.jpg" className='img2'
          style={{height:"200px"}}
          alt="green iguana"
        />
   
        <button style={{width:"150px",marginLeft:"25px",height:"40px",marginTop:"-240px",backgroundColor:"#F6214B",border:"1px solid #F6214B",color:"white"}}>Course Available</button>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" style={{fontWeight:"bold",fontSize:"18px"}} >
          Running Classes
          <p style={{marginLeft:"280px",marginTop:"-30px",color:"#F6214B",fontWeight:"bold"}}>$275</p>
          </Typography>
        
        </CardContent>
      </CardActionArea>
    </Card>


    <Card sx={{ width:"350px",height:"270px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://preview.colorlib.com/theme/gym/img/c3.jpg" className='img2'
          style={{height:"200px"}}
          alt="green iguana" 
        />
        <button style={{width:"150px",marginLeft:"25px",height:"40px",marginTop:"-240px",backgroundColor:"#F6214B",border:"1px solid #F6214B",color:"white"}}>Course Available</button>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" style={{fontWeight:"bold",fontSize:"18px"}} >
          Running Classes
          <p style={{marginLeft:"280px",marginTop:"-30px",color:"#F6214B",fontWeight:"bold"}}>$275</p>
          </Typography>
        
        </CardContent>
      </CardActionArea>
    </Card>


</div>


<div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"30px",marginTop:"40px"}}>
 
<Card sx={{ width:"350px",height:"270px" }}>
      <CardActionArea >
        <CardMedia
          component="img"
          height="140"
          image="https://preview.colorlib.com/theme/gym/img/c4.jpg" className='img2'
          style={{height:"200px"}}
          alt="green iguana"
        />
        <button style={{width:"150px",marginLeft:"25px",height:"40px",marginTop:"-240px",backgroundColor:"#F6214B",border:"1px solid #F6214B",color:"white"}}>Course Available</button>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" style={{fontWeight:"bold",fontSize:"18px"}} >
          Running Classes
          <p style={{marginLeft:"280px",marginTop:"-30px",color:"#F6214B",fontWeight:"bold"}}>$275</p>
          </Typography>
        
        </CardContent>
      </CardActionArea>
    </Card>

    <Card sx={{ width:"350px",height:"270px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://preview.colorlib.com/theme/gym/img/c5.jpg" className='img2'
          style={{height:"200px"}}
          alt="green iguana"
        />
        <button style={{width:"150px",marginLeft:"25px",height:"40px",marginTop:"-240px",backgroundColor:"#F6214B",border:"1px solid #F6214B",color:"white"}}>Course Available</button>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" style={{fontWeight:"bold",fontSize:"18px"}} >
          Running Classes
          <p style={{marginLeft:"280px",marginTop:"-30px",color:"#F6214B",fontWeight:"bold"}}>$275</p>
          </Typography>
        
        </CardContent>
      </CardActionArea>
    </Card>


    <Card sx={{ width:"350px",height:"270px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://preview.colorlib.com/theme/gym/img/c6.jpg" className='img2'
          style={{height:"200px"}}
          alt="green iguana"
        />
        <button style={{width:"150px",marginLeft:"25px",height:"40px",marginTop:"-240px",backgroundColor:"#F6214B",border:"1px solid #F6214B",color:"white"}}>Course Available</button>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" style={{fontWeight:"bold",fontSize:"18px"}} >
          Running Classes
          <p style={{marginLeft:"280px",marginTop:"-30px",color:"#F6214B",fontWeight:"bold"}}>$275</p>
          </Typography>
        
        </CardContent>
      </CardActionArea>
    </Card>


</div>

    </div>
    
    
    
    </>
  )
}

export default cards