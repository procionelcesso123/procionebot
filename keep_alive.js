const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Hello. I am alive!');
});

function keep_alive() {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

module.exports = keep_alive;
