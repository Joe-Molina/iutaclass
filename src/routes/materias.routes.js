import { Router } from "express";
import {
  getMaterias,
  crearMateria,
  eliminarMateria,
  crearCarrera,
  getCarreras,
  eliminarCarrera,
} from "../controllers/materias.controller.js";

const router = Router();

router.get("/materias", getMaterias);
router.get("/carreras", getCarreras);
router.post("/crear/materia", crearMateria);
router.post("/crear/carrera", crearCarrera);
router.delete("/eliminar/materia/:id", eliminarMateria);
router.delete("/eliminar/carrera/:id", eliminarCarrera);

export default router;
