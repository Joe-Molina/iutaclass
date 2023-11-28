import { Router } from "express";
import {
  getCrearUnidad,
  CrearUnidad,
  deleteUnidad,
  verUnidades,
} from "../controllers/crear_unidad.controller.js";

const router = Router();

router.get("/crearunidad", getCrearUnidad);

router.get("/unidades/aula/:id", verUnidades);

router.post("/crearunidad", CrearUnidad);

router.delete("/eliminar/unidad/:id", deleteUnidad);

export default router;
