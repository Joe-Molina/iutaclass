import { Router } from "express";
import {
    getCrearAula,
    postCrearAula,
    deleteAula
} from "../controllers/crear_aula.controller.js"

const router = Router();


router.get('/crearaula', getCrearAula);

router.post('/crearaula', postCrearAula);

router.delete('/crearaula/delete/:id', deleteAula);

export default router;