import express, { Application } from "express";
import Server from "./src/index";

const app: Application = express();
const server: Server = new Server(app);
const PORT: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 8888;

app
  .listen(PORT, "localhost", () => {
    console.log(`Server runs on port ${PORT}`);
  })
  .on("error", (err) => {
    console.log(err);
  })