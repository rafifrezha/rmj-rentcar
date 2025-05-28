<<<<<<< HEAD
import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

=======

import express from "express"
import cors from "cors"
import UserRoute from "./routes/UserRoute.js"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
>>>>>>> f574b70bfa51830aa3afbbf1fb739e7e725c4b00
dotenv.config();

const app = express();
app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(UserRoute);

<<<<<<< HEAD
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server up and running on port ${port}`);
});
=======
app.listen(5000, ()=> console.log('Server up and running...'));
>>>>>>> f574b70bfa51830aa3afbbf1fb739e7e725c4b00
