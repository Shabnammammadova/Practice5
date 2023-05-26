const express = require('express')
const app = express()
const PORT = 8080
const cors=require('cors')
const bodyParser=require("body-parser")
const dotenv=require("dotenv")

app.use(bodyParser.json())
app.use(cors())
app.use(dotenv.config)

const gym={
  id:"1",
  name:"Regular Exercise"
}


//Gym Crud
//Get all gym 
app.get('/api/gym',(req,res)=>{
  res.send(gym)
})

// get gym by id
app.get('/api/gym/:id', (req, res) => {
  const gym = gym.find(g => g.id === parseInt(req.params.id));
  if (!gym) return res.status(404).send('The gym with the given ID was not found.');
  res.send(gym);
});


// delete a gym
app.delete('/api/gym/:id', (req, res) => {
  const gym = gym.find(g => g.id === parseInt(req.params.id));
  if (!gym) return res.status(404).send('The gym with the given ID was not found.');

  const index = gym.indexOf(gym);
  gym.splice(idx, 1);

  res.send(gym);
});

//Post gym
app.post('/api/gym',(req,res)=>{
  const {name}=req.body
  
  const newGym =
      {
          id:crypto.randomUUID(),
          name:name,
         
      }
      gym.push(newGym)
      res.status(201).send({
          message:`${newGym.name} posted succesfully`
      })
  
})





app.get('/api', (req, res) => {
  res.send('Hello Node!')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})