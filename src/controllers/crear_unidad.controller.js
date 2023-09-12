import bodyParser from "body-parser";
import axios from "axios";
import moment from "moment";
import session from "express-session";
import myConnection from "express-myconnection";
import { estilos } from "../css.js";

export const getCrearUnidad = async (req, res) => {
  try {
    if (req.session.userType == 1) {
      req.getConnection((err, conn) => {
        conn.query(
          "SELECT * FROM aulas WHERE user_id = ?",
          [req.session.user],
          (err, aulas) => {
            console.log(aulas);
            const vista = "crearunidad";
            res.render("crearunidad", {
              headtitle: "crear unidad",
              aulas,
              session: req.session,
              vista,
            });
          }
        );
      });
    } else {
      res.redirect("/");
    }
  } catch (err) {}
};

export const postCrearUnidad = async (req, res) => {
  const data = req.body;

  req.getConnection((err, conn) => {
    conn.query("INSERT INTO evaluacion_unidad SET ?", [data], (err, rows) => {
      console.log(data);
      res.redirect("/crearunidad");
    });
  });
};
