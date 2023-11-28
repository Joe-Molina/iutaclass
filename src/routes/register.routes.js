import { Router } from "express";
import {
  getRegisterEstudiante,
  getRegisterDocente,
  getRegisterAdministrador,
  crearAdministrador,
  crearDocente,
  crearEstudiante,
  eliminarUsuario,
} from "../controllers/register.controller.js";

const router = Router();

router.get("/register/estudiante", getRegisterEstudiante);
router.get("/register/docente", getRegisterDocente);
router.get("/register/Administrador", getRegisterAdministrador);

router.post("/register/estudiante", crearEstudiante);
router.post("/register/docente", crearDocente);
router.post("/register/Administrador", crearAdministrador);

router.delete("/delete/user/:id", eliminarUsuario);

export default router;
