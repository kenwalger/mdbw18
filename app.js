const express = require('express');
const app = express();

app.use((req, res, next) => {
    res.status(200).json({
        message: "You're becoming a hero!"
    });
});

module.exports = app;


