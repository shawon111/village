const express = require('express');
const path = require('path');
const port = process.env.PORT || 5000;
const app = express();

const staticPath = path.join(__dirname, './public')
app.use(express.static(staticPath))

app.listen(port, (err)=>{
    if(err){
        console.log(err)
    }else {
        console.log("Server started at the port: ", port)
    }
})