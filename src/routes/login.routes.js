import { Router } from "express";
import {
  getLogOut,
  getLogin,
  postLogin,
} from "../controllers/login.controller.js";

const router = Router();

router.get("/login", getLogin);
router.post("/login", postLogin);
router.get("/logout", getLogOut);

export default router;
