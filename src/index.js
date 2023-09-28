import express from "express";
import itemsRouter from "./routes.js";

const app = new express();
const PORT = process.env.PORT || 4500;

app.use(express.json());
app.use('/items', itemsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`)
});