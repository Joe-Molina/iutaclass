import { Router } from "express";
import {
    getcalificacion,
    postcalificacion,
    getcalificacionMateria,
    getAulaUnidades
} from "../controllers/calificar.controller.js";

const router = Router();

router.get("/calificar/", getcalificacion);
router.get("/calificar/:aulaid", getAulaUnidades);


router.get("/calificar/aula/:unidadid", getcalificacionMateria);

router.patch("/subircalificacion/:evaluacion", postcalificacion);

export default router;