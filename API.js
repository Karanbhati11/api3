const express = require("express");
const axios = require("axios");
const router = express.Router();

const app = express();

router.get("/page1/:sitechanger/:params", (req, res) => {
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

router.get("/page2/s=:param2", (req, res) => {
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
router.get("/page3/url=:param3", (req, res) => {
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

app.use("/.netlify/functions/api", router);
module.exports.handler = serverless(app);
