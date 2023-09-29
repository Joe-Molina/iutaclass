import bodyParser from "body-parser";
import session from "express-session";
import { estilos } from "../css.js";
import { Materias } from "../models/Materias.model.js";
import { Users } from "../models/Users.model.js";
import { aulas } from "../models/aulas.model.js";

export const getCrearAula = async (req, res) => {
  // buscar usuarios docente
  // buscar materias
  try {
    if (req.session.userType > 2) {
      const users = await Users.findAll({
        where: {
          userType: 2,
        },
      });

      const materias = await Materias.findAll();
    } else {
      res.redirect("/");
    }
  } catch (error) {}
};

export const postCrearAula = async (req, res) => {
  const { user_id, materia_id } = req.body;

  const newAula = await aulas.create({
    user_id,
    materia_id,
  });

  res.json(newAula);
};

export const deleteAula = async (req, res) => {
  const id = req.params.id;

  await aulas.delete({
    where: { id },
  });
};
