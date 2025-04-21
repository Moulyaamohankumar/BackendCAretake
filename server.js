const express = require('express'); 
const app = express(); 
const port = process.env.port || 3000;
const cors = require('cors'); 
const router = require('./user')
app.use(cors());
app.use(express.json());
app.use(' ',router)
app.listen(port ,(req,res)=>{
    console.log(`Server is running of ${port}`);
})