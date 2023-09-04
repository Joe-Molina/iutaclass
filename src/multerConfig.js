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

export default upload;