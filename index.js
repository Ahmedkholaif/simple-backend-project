const express = require('express')
const app = express()

const helloRouter = require('./routers/hello');

const port = process.env.PORT || 3000;

app.use('/hello',helloRouter);

app.listen(port,()=>{
  console.log(`server started at port ${port} `)
})