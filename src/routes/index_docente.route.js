import { Router } from "express";
import { 
    getviewDocente
 } from "../controllers/index_docente.controller.js";


const router = Router();

router.get("/docente", getviewDocente)


export default router;
