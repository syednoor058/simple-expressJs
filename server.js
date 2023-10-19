const express = require("express");
const app = express();
const fs = require("fs");

app.get("/", (req, res) => {
    fs.readFile("./pages/home.html", (err, data) => {
        if (err){
            console.log("404, Error found!")
            res.send("<h1>Something went worng.</h1>")
        }
        else{
            res.write(data);
            res.end();
        }
    });

})

app.listen(8000, () => {
    console.log("Listening from port 8000...");
})