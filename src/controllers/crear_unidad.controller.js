import bodyParser from "body-parser";
import session from "express-session";
import myConnection from "express-myconnection";
import { estilos } from "../css.js";

export const getCrearUnidad = async (req, res) => {
  try {
    if (req.session.userType == 1) {
    } else {
      res.redirect("/");
    }
  } catch (err) {}
};

export const postCrearUnidad = async (req, res) => {
  const data = req.body;
};
