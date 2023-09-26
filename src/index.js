import { PORT } from "./config.js";
import app from "./app.js";
import { sequelize } from "./database/database.js";

// import "./models/Calificaciones.model.js";
// import "./models/Carrers.model.js";
// import "./models/Materias.model.js";
// import "./models/Users.model.js";
// import "./models/alumnos.model.js";
// import "./models/archivos_alumno.model.js";
// import "./models/archivos_docente.model.js";
// import "./models/aulas.model.js";
// import "./models/evaluacion_unidad.model.js";
// import "./models/modelo.model.js";
// import "./models/tipos_evaluacion.model.js";
// import "./models/user_types.model.js";

async function main() {
  try {
    await sequelize.sync({ force: false });

    app.listen(PORT);
    console.log(`server running on port ${PORT}`);
  } catch (error) {
    console.log("tenemos un error", error);
  }
}

main();
