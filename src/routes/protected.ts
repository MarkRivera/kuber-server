import { Router } from "express";
import authenticate from "../middleware/authenticate";
import ProfileController from "../controller/profile";
import DashboardController from "../controller/dashboard";

const router = Router();
router.use(authenticate);

router.get("/api/v1/profile", ProfileController.getProfile);
router.get("/api/v1/dashboard", DashboardController.getDashboard);

export default router;
