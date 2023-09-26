import { Router } from "express";
import { 
    getOneClass,
    getIndex
 } from "../controllers/index.controller.js";


const router = Router();

router.get("/unidades/:id", getOneClass)
router.get("/", getIndex)



export default router;
