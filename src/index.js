const express = require('express')
const { ROUTES } = require("./routes");

const { setupLogging } = require("./logging");
const { setupProxies } = require("./proxy");
const { setupRateLimit } = require("./ratelimit");

const app = express()
const port = 80;

app.get("/", (req, res) => {
    if (req.hostname.split(".")[0] === "nas") {
        return res.redirect("https://auhfkfq5vhs6.connect.remote.it")
    }
    res.redirect("https://wabaifmb5hi4.connect.remote.it")
})

setupLogging(app);
setupProxies(app, ROUTES);
setupRateLimit(app, ROUTES);

app.listen(port, () => {
    console.log(`Reverse Proxy app listening at http://localhost:${port}`)
})