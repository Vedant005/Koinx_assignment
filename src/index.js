import dotenv from "dotenv";
import connectDb from "./config/db";
import { app } from "./app";

dotenv.config({
  path: "./.env",
});

connectDb()
  .then(() => {
    app.listen(process.env.PORT || 8080, () => {
      console.log(` Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB connection failed!", error);
  });
