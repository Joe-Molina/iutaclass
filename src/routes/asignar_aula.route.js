import { Router } from "express";
import {
    getAsignarAula,
    postAsignarAula
} from "../controllers/asignar_aula.controller.js"

const router = Router();


router.get('/asignaraula', getAsignarAula);

router.post('/asignaraula', postAsignarAula);

export default router;