require("dotenv").config();
const express = require("express");
const connectToDB = require("./database/db");

const app = express();

connectToDB();

app.use(express.json());

const PORT=process.env.PORT || 5000;

app.get("/api/v1", (req, res) => {
    res.json({
        f1: "Welcome to vv API",
    });
});

app.listen(PORT,
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
    )
);