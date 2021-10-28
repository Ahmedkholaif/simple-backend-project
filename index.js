const express = require('express')
const app = express()

const helloRouter = require('./routers/hello');
const pingRouter = require('./routers/ping');

const port = process.env.PORT || 3000;

app.use('/hello',helloRouter);
app.use('/ping',pingRouter);

app.listen(port,()=>{
  console.log(`server started at port ${port} `)
})