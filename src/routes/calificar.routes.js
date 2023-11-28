import { Router } from "express";
import {
  getcalificaciones,
  puntuar,
} from "../controllers/calificar.controller.js";

const router = Router();

router.get("/calificaciones", getcalificaciones);

router.post("/subircalificacion/:evaluacion", puntuar);

export default router;
