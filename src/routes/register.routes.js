import { Router } from "express";
import {
  getRegister,
  crearSU,
  crearCoordinador,
  crearDocente,
  crearEstudiante,
} from "../controllers/register.controller.js";

const router = Router();

router.get("/register/", getRegister);

router.post("/register/estudiante", crearEstudiante);
router.post("/register/docente", crearDocente);
router.post("/register/coordinador", crearCoordinador);
router.post("/register/superusuario", crearSU);

export default router;
