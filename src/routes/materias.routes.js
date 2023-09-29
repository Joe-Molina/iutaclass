import { Router } from "express";
import {
  getMaterias,
  crearMateria,
  eliminarMateria,
} from "../controllers/materias.controller.js";

const router = Router();

router.get("/crear/materia", getMaterias);
router.post("/crear/materia", crearMateria);
router.delete("/eliminar/materia/id", eliminarMateria);

export default router;
