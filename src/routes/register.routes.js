import { Router } from "express";
import {
  getRegister,
  crearUsuario,
} from "../controllers/register.controller.js";

const router = Router();

router.get("/register", getRegister);

router.post("/register", crearUsuario);

export default router;
