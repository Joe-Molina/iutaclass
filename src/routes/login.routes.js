import { Router } from "express";
import {
  CerrarSesion,
  getLogin,
  Logearse,
} from "../controllers/login.controller.js";

const router = Router();

router.get("/login", getLogin);
router.post("/login", Logearse);
router.get("/logout", CerrarSesion);

export default router;
