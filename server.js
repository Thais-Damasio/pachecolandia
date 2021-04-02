const express = require('express');
const path = require('path');
const app = express();


const port = 3333;

app.use(express.static(path.join(__dirname)));

app.listen(port, () => {
    console.log("--- Pachecolândia Start ---")
});