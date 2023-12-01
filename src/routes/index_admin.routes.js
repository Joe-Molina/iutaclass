import { Router } from "express";
import {
  admin,
  adminAsignarAula,
} from "../controllers/index_admin.controller.js";
import { CrearAula } from "../controllers/crear_aula.controller.js";

const router = Router();

router.get("/admin", admin);

router.get("/admin/asignaraula/:id", adminAsignarAula);

export default router;
