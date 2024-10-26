import express, { Express } from "express";
import cors from "cors";
import errorHandler from "./src/middlewares/error.middleware";
require("dotenv").config();

const app: Express = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16mb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

// Test API route
app.get("/api/test", (req, res) => {
  res.json({ message: "Test API is working!" });
});

app.use(errorHandler);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
