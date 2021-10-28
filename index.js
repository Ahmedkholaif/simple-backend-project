const express = require('express')
const app = express()

const helloRouter = require('./routers/hello');
const pingRouter = require('./routers/ping');
const peopleRouter = require('./routers/people');

const port = process.env.PORT || 3000;

app.use('/hello',helloRouter);
app.use('/ping',pingRouter);
app.use('/sw',peopleRouter);

app.listen(port,()=>{
  console.log(`server started at port ${port} `)
})