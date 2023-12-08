import { config } from "dotenv";
config();

import compression from "compression";
import cookieParser from "cookie-parser";

import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import session from "./middleware/session";

import authRoutes from "./routes/auth";
import publicRoutes from "./routes/public";
import protectedRoutes from "./routes/protected";
import cors from "./middleware/cors";

const app = express();

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(helmet());
app.use(cookieParser());
app.use(morgan("dev"));
app.options("*", cors);
app.use(cors);

app.use(session);

app.use(publicRoutes);
app.use(authRoutes);
app.use(protectedRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server Running on Port: " + PORT));
