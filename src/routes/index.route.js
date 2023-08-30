import { Router } from "express";
import { 
    getIndex,
    getOneClass
 } from "../controllers/index.controller.js";


const router = Router();

router.get("/", getIndex)

router.get("/:id", getOneClass)


export default router;
