import bodyParser from "body-parser";
import session from "express-session";
import { estilos } from "../css.js";
import { Alumnos } from "../models/alumnos.model.js";

const csss = [estilos.header, estilos.index, estilos.aulasCard, estilos.footer];

export const getIndex = async (req, res) => {
  try {
    const id = req.session.user;
    const user = req.session.name;
    const email = req.session.email;
    const vista = "inicio";

    //verifca que el usertype del usuario sea 2
    // busca todas las aulas a las que pertenece el estudiante

    const aulas = await Alumnos.findAll({
      where: {
        user_id: id,
      },
    });
    res.json(aulas);
  } catch (err) {
    console.error("Error al realizar las consultas:", err);
    res.status(500).send("Error en las consultas");
  }
};
