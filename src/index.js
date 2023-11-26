import { PORT } from "./config.js";
import app from "./app.js";
import { sequelize } from "./database/database.js";

import "./models/Carreras.model.js";
import "./models/Materias.model.js";
import "./models/Users.model.js";
import "./models/aulas.model.js";
import "./models/modelo.model.js";
import "./models/Docentes.model.js";
import "./models/Administradores.model.js";
import "./models/Estudiante.model.js";
import "./models/integrantes_aulas.models.js";
import "./models/Unidades.models.js";
import "./models/UnidadesDetails.models.js";
import "./models/Evaluacion_estudiante.model.js";

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
