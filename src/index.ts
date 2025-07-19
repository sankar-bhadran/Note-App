import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";
import noteRoutes from "./routes/noteroutes";
import { errorHandler } from "./middleware/errorHandler";
const app = express();
dotenv.config();
connectDB();

app.use(express.json());
app.use("/api/notes", noteRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
