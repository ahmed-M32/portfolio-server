const express = require('express')
const cors = require('cors')
const app = express();

const port = process.env.port || 3000;

var corsOptions = {
    origin: 'http://127.0.0.1:5500',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

  let arr =[ ]
app.use(express.json())
app.use(cors(corsOptions))
   
app.get('/',(req,res)=>{
    res.send("wel")
})

app.post('/',(req,res)=>{
    console.log(req.body);
    arr.push(req.body)
    req.body["mad"]=3
    res.json({ message: req.body });
})


app.listen(port,()=>{ console.log("its running mfs")})