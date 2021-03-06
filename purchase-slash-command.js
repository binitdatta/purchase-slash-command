const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// allow us to easily process POST requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/purchase', async(req, res) => {
  console.log(req.body);
  //res.send('OK');
  res.json({
    text: 'Thanks for your purchase request!'
  })

})

const PORT = 9647;

app.listen(PORT, () => {
  console.log(`Slack Bot Server has Started at ${PORT}`);
})
