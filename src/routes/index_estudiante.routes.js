import { Router } from "express";
import {
  getIndex,
  getAulaEstudiante,
  getEvaluacionesUnidadEstudiante,
} from "../controllers/index_estudiante.controller.js";

const router = Router();

router.get("/inicio/estudiante", getIndex);
router.get("/estudiante/aula/:id", getAulaEstudiante);
router.get("/estudiante/unidad/:id", getEvaluacionesUnidadEstudiante);

export default router;
