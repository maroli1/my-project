const express = require("express");
const app = express();

// Middleware
const logger = require("./middleware/logger");
app.use(logger);

// Routes
const userRoutes = require("./routes/controller/index");
app.use("/user", userRoutes);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});