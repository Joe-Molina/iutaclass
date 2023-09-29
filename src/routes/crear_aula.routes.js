import { Router } from "express";
import {
  getCrearAula,
  postCrearAula,
  deleteAula,
} from "../controllers/crear_aula.controller.js";

const router = Router();

router.get("/crear/aula", getCrearAula);

router.post("/crear/aula", postCrearAula);

router.delete("/delete/aula/:id", deleteAula);

export default router;
