// pw - JaVujGu4Q4RG53tn
import "dotenv/config";
import express from "express";
import cors from "cors";
import logger from "./utils/logger";
import connect from "./utils/database.connection";
import bookRoutes from "./api/routes/bookRoute";
import userRoutes from "./api/routes/userRoute";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json({ limit: "20mb" }));

app.get("/", (req, res, next) => {
  res.send("<h2>Library Management System API 📚</h2>");
  next();
});

// Importing routes

app.use("/books", bookRoutes);
app.use("/users", userRoutes);

app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT} `);
  connect();
});
