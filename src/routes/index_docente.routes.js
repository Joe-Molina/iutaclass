import { Router } from "express";
import {
  getIndex,
  getAulaDocente,
  getEvaluacionesUnidadDocente,
} from "../controllers/index_docente.controller.js";

const router = Router();

router.get("/inicio/docente", getIndex);
router.get("/docente/aula/:id", getAulaDocente);
router.get("/docente/unidad/:id", getEvaluacionesUnidadDocente);

export default router;
