const http = require("http");
var url = require("url");
const axios = require("axios");
const server = http.createServer((req, res) => {
  const headers = {
    "Cache-Control": "no-cache",
    host: "extramovies.town",
    Accept: "*/*",
  };
  var q = url.parse(req.url, true).query;
  var txt = q.url;

  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  axios
    .post(`https://suzihaza.com/api/source/${txt}`, headers)
    .then((response) => {
      res.end(JSON.stringify(response.data));
    });
});
server.listen(5000);
