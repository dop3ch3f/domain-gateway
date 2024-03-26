const express = require('express')
const { ROUTES } = require("./routes");
const greenlock = require('greenlock-express');

const { setupLogging } = require("./logging");
const { setupProxies } = require("./proxy");
const { setupRateLimit } = require("./ratelimit");

const app = express()
const port = 80

app.get("/nas", (req, res) => {
    // if (req.hostname.split(".")[0] === "nas") {
    //     return res.redirect("https://auhfkfq5vhs6.connect.remote.it")
    // }
    res.redirect("/area51/")
})

setupLogging(app);
setupProxies(app, ROUTES);
setupRateLimit(app, ROUTES);



// greenlock.init({
//     packageRoot: __dirname,

//     // contact for security and critical bug notices
//     maintainerEmail: "ifeanyi.ibekie@gmail.com",

//     // where to look for configuration
//     configDir: '../greenlock.d',

//     // whether or not to run at cloudscale
//     cluster: false
//     // Contribute telemetry data to the project
// }).serve(app);

// app.listen(port, () => {
//     console.log(`Reverse Proxy app listening at http://localhost:${port}`)
// })

// app.listen(443, () => {
//     console.log(`Reverse Proxy https app listening at http://localhost:${443}`)
// })

module.exports = { app };