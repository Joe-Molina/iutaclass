import { Router } from "express";
import { 
    getClass
 } from "../controllers/index_estudiante.controller.js";


const router = Router();

router.get("/", getClass)


export default router;
