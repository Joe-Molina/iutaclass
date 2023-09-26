import bodyParser from "body-parser";
import { estilos } from "../css.js";
import { Users } from "../models/Users.model.js";

export const getRegister = async (req, res) => {
  res.render("register", { error: false });
};

export const crearUsuario = async (req, res) => {
  try {
    // buscar el email en la base de datos para ver si existe
    //si existe no permitir crear otro usuario
    //si no existe crearlo
    //redirigir al login

    const { name, email, password } = req.body;

    const user = await Users.findOne({
      where: { email },
    });

    if (!user) {
      const newUser = await Users.create({
        name,
        email,
        password,
      });
      res.json("usuario creado");
    } else {
      res.json("usuario ya registrado");
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
