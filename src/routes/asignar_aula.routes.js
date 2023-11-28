import { Router } from "express";
import {
  asignarEstudianteAAula,
  getEstudianteAulas,
  getAsignarAula,
  deleteEstudianteAula,
  getEstudiantesAulas,
} from "../controllers/integrantes_aulas.controller.js";

const router = Router();

router.get("/asignaraula", getAsignarAula); // vista donde se asignan las aulas

router.get("/aulas/estudiante", getEstudianteAulas); // json con info sobre las aulas a las que esta asignado un estudiante

router.get("/aulas/estudiantes", getEstudiantesAulas); // json con info sobre todos los integrantes de todas las aulas

router.post("/asignaraula", asignarEstudianteAAula); // funcion para asignar un estudiante a nu aula

router.delete("/eliminar/integranteAula/:id", deleteEstudianteAula);

export default router;
