console.log('Testing');

const express = require('express');

const PORT = process.env.PORT || 5005

const server = express();

server.use(express.json());

server.get('/api/*', (req, res) => {
  res.status(200).json({
    message: 'success'
  })
})

server.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})