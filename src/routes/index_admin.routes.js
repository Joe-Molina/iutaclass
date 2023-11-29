import { Router } from "express";
import { admin } from "../controllers/index_admin.controller.js";
import { CrearAula } from "../controllers/crear_aula.controller.js";

const router = Router();

router.get("/admin", admin);

export default router;
