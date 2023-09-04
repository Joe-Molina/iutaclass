import { Router } from "express";
import { subirArchivo } from "../controllers/subir_archivos.controller.js";
import multer from 'multer';

// Configuración de multer
const storage = multer.diskStorage({
  destination: 'public/uploads/',
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const originalExtension = file.originalname.split('.').pop();
    const filename = file.fieldname + '-' + uniqueSuffix + '.' + originalExtension;
    cb(null, filename);
  }
});

const upload = multer({ storage });

const router = Router();

router.get("/unidades/subirArchivo/:id", upload.single('archivo'), subirArchivo)

export default router;