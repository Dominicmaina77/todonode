const express = require("express");
const app = express();
const mongoose = require("mongoose");
const todoRoutes = require("./routes/todos");

// connect to MongoDB
mongoose
  .connect("mongodb+srv://mainadominic628:admin@cluster0.slarhw7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB failed", err));

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// api routes
app.use("/api/todos", todoRoutes);

// define routes
const port =process.env.PORT || 8080;
app.listen(port,()=>{
    console.log(`Server running on port ${port}`);  
})
