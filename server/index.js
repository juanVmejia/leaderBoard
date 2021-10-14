const express = require('express');
const app = express();
const router = require('./routes.js');
const PORT = process.env.PORT || 3000;

app.use(express.static('client/dist'));

app.use(express.json())
  app.use((req, res, next) => {
  console.log('----Incoming Request----')
  console.log(req.method)
  console.log(req.url)
  next()
})



app.use('/api', router)


app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})