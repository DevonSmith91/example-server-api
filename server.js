const express = require("express");
const app = express();

const path = require("path");

const port = process.env.PORT || 3030

// const port = process.env.PORT || 3030
app.use(express.static("."));

app.get("/res", (req, res) => {
  res.sendFile(path.resolve("./res.html"));
});

app.get("/check", (req, res) => {
    res.sendFile(path.resolve("./api/lancealot.json"))
})

app.listen(port, () => console.log(`listening on port: ${port}`));

