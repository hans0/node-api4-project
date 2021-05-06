const express = require('express');

const PORT = process.env.PORT || 5005;

const server = express();

server.use(express.json());

server.get('/api/*', (req, res) => {
  res.status(200).json({
    message: `It's working! It's working!`
  });
});

server.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});