const express = require('express')
const { ROUTES } = require("./routes");

const { setupLogging } = require("./logging");
const { setupProxies } = require("./proxy");
const { setupRateLimit } = require("./ratelimit");

const app = express()
const port = 80;

app.get("/nas", (req, res) => {
    res.redirect("/area51/")
})

setupLogging(app);
setupProxies(app, ROUTES);
setupRateLimit(app, ROUTES);

app.listen(port, () => {
    console.log(`Reverse Proxy app listening at http://localhost:${port}`)
})