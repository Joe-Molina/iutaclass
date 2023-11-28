import { Router } from "express";
import {
  subirEvaluacion,
  getEvaluaciones,
} from "../controllers/subir_evaluacion_estudiante.controller.js";
import multer from "multer";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configuración de multer
const storage = multer.diskStorage({
  destination: path.join(__dirname, "../public/uploads/"),
  filename: (req, file, cb) => {
    const uniqueSuffix =
      "iuta" + Date.now() + "-" + Math.round(Math.random() * 1e9);
    const originalExtension = file.originalname.split(".").pop();
    const filename =
      file.fieldname + "-" + uniqueSuffix + "." + originalExtension;
    cb(null, filename);
  },
});

const upload = multer({ storage });

const router = Router();

//router.post("/unidades/upload/:id", upload.single("archivo"), subirEvaluacion);
router.get("/evaluaciones", getEvaluaciones);
router.post("/evaluaciones/crear/:id", subirEvaluacion);

export default router;
