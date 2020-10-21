const express = require('express');
const path = require('path');
const app = express();
const server = require('http').Server(app);
const PORT = 8081;

const defaultDir = path.join(__dirname, 'public');
const public = process.env.PUBLIC_DIR || defaultDir;

app.use(express.static(defaultDir));

server.listen(PORT, () => {
  console.log(`We live on port ${PORT}`);
  console.log(`Serving files from ${public}`);
});
