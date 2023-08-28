import { Router } from "express";
import {
    getEjemplo
} from "./controllers/ejemplo.controller.js"

const router = Router();

router.get("/Ejemplo", getEjemplo);

export default router;