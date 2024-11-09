import { Router } from "express";
import { controllerTest } from "../controllers";

const router: Router = Router();

router.get("/", controllerTest);

export default router;
