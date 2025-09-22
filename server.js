const express = require("express");
const app = express();
const logger = require("./middleware/logger");
const userRoutes = require("./routes/controller");

app.use(express.json());
app.use(logger);app.use("/user", userRoutes);
app.use((err, req, res, next) => {
    console.error("Error:", err.message);
    res.status(500).json({ message: "خطای سرور" });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log("Server is running  port ${PORT}");
});