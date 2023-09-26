import { Router } from "express";
import {
    getCrearUnidad,
    postCrearUnidad
} from "../controllers/crear_unidad.controller.js"

const router = Router();

router.get('/crearunidad', getCrearUnidad);

router.post('/crearunidad', postCrearUnidad);

export default router;