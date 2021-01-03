const express = require('express');
const app = express();
app.listen(3000, () => {
    try {
        console.log("Server runnig at 3000");
    } catch (e) {
        console.log("Error in creating a server")
    }
})
const db = require('./database');
app.get("/", (req, res) => {
    db.execute("SELECT * from products").then(([data, metadata]) => {
        let tempData = { ...data };
        // console.log(tempData)
        let parsedData = JSON.stringify(tempData)
        res.json(parsedData)
    }).catch((err) => {
        console.log("Error ", err)
    })
})
