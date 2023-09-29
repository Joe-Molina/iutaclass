import { Router } from "express";
import {
  getRegisterEstudiante,
  getRegisterDocente,
  getRegisterCoodinador,
  crearCoordinador,
  crearDocente,
  crearEstudiante,
} from "../controllers/register.controller.js";

const router = Router();

router.get("/register/estudiante", getRegisterEstudiante);
router.get("/register/docente", getRegisterDocente);
router.get("/register/coordinador", getRegisterCoodinador);

router.post("/register/estudiante", crearEstudiante);
router.post("/register/docente", crearDocente);
router.post("/register/coordinador", crearCoordinador);

export default router;
