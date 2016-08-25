const express = require("express");
const converter = require('./converter');

const port = process.env.PORT || 3000;

const app = express();
app.use('/', express.static(`${__dirname}/public`));
app.disable('x-powered-by');

app.get("/rgbToHex", (req, res) => {
  const red   = parseInt(req.query.red, 10);
  const green = parseInt(req.query.green, 10);
  const blue  = parseInt(req.query.blue, 10);
  const hex = converter.rgbToHex(red, green, blue);
  res.send(`<html><head><title>RgbToHex</title></head><body>${hex}</body></html>`);
});

app.get("/hexToRgb", function(req, res) {
  const hex = req.query.hex;
  const rgb = converter.hexToRgb(hex);
  res.send(`<html><head><title>HexToRgb</title></head><body>${rgb}</body></html>`);
});


app.listen(port, ()=> {
  console.log(`Deadly Simple node project listening on port ${port}`);
});
