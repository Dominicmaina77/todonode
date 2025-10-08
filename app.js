const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB failed", err));

// define routes
const port = 8080;
app.listen(port,()=>{
    console.log(`Server running on port ${port}`);  
})
