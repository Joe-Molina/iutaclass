import { Router } from "express";
import {
  getAulas,
  CrearAula,
  deleteAula,
  getAulasEstudiante,
} from "../controllers/crear_aula.controller.js";

const router = Router();

router.get("/aulas", getAulas);
router.get("/aulasEstudiante", getAulasEstudiante);

router.post("/crear/aula", CrearAula); // no esta en imsomnia

router.delete("/delete/aula/:id", deleteAula);

export default router;
