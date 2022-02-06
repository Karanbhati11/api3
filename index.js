const express = require("express");
const axios = require("axios");
const app = express();

app.get("/page1/:sitechanger/:params", (req, res) => {
  const headers = {
    "Cache-Control": "no-cache",
    host: "extramovies.town",
    Accept: "*/*",
  };
  res.setHeader(
    "Access-Control-Allow-Origin",
    req.header("origin") ||
      req.header("x-forwarded-host") ||
      req.header("referer") ||
      req.header("host")
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  axios
    .get(
      `https://extramovies.${req.params.sitechanger}/?s=${req.params.params}`,
      headers
    )
    .then((response) => {
      const ab = response.data;
      // console.log(response.data);
      res.send(ab);
    });
});

app.get("/page2/s=:param2", (req, res) => {
  const headers = {
    "Cache-Control": "no-cache",
    host: "extramovies.town",
    Accept: "*/*",
  };
  const decoded = decodeURIComponent(req.params.param2);
  res.setHeader(
    "Access-Control-Allow-Origin",
    req.header("origin") ||
      req.header("x-forwarded-host") ||
      req.header("referer") ||
      req.header("host")
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  axios.get(decoded, headers).then((response) => {
    const ab = response.data;
    // console.log(response.data);
    res.send(ab);
  });
});
app.get("/page3/url=:param3", (req, res) => {
  const headers = {
    "Cache-Control": "no-cache",
    host: "extramovies.town",
    Accept: "*/*",
  };
  console.log(req.params.param3);
  res.setHeader(
    "Access-Control-Allow-Origin",
    req.header("origin") ||
      req.header("x-forwarded-host") ||
      req.header("referer") ||
      req.header("host")
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  axios
    .post(`https://suzihaza.com/api/source/${req.params.param3}`, headers)
    .then((response) => {
      const ab = response.data;
      res.send(ab);
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.warn(`App listening on http://localhost:${PORT}`);
});
