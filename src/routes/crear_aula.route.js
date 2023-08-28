import { Router } from "express";
import {
    getCrearAula,
    postCrearAula
} from "../controllers/crear_aula.controller.js"

const router = Router();


router.get('/crearaula', getCrearAula);

router.post('/crearaula', postCrearAula);

export default router;