import { Router } from "express";
import {
  getcalificaciones,
  puntuar,
} from "../controllers/calificar.controller.js";

const router = Router();

router.get("/calificar/:id", getcalificaciones);

router.post("/subircalificacion", puntuar);

export default router;
