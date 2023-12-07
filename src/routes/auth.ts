import { Router } from "express";
import authenticate from "../middleware/authenticate";
import AuthController from "../controller/auth";

const router = Router();

router.post("/api/v1/login", AuthController.login);

router.use(authenticate);
router.get("/api/v1/logout", AuthController.logout);

export default router;
