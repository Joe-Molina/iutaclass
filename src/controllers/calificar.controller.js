import bodyParser from "body-parser";
import session from "express-session";
import myConnection from "express-myconnection";
import { estilos } from "../css.js";

/*

export const getcalificacion = async (req, res) => {
  try {
    if (req.session.loggedin == true) {
      const id = req.session.user;
      const user = req.session.name;
      const email = req.session.email;

      await req.getConnection((err, conn) => {
        if (req.session.userType == 1) {
          console.log("inicia query");
          conn.query(
            "SELECT * FROM aulas WHERE user_id = ?",
            [id],
            (err, userdata) => {
              if (err) {
                console.error("Error en la consulta:", err);
                res.status(500).send("Error en la consulta");
              }

              console.log("busca las aulas asignadas a ese profesor");
              console.log(userdata);

              const vista = "calificar";
              const calificarvista = true;
              res.render("calificar", {
                aulas: userdata,
                session: req.session,
                vista,
                calificarvista,
                calificaciones: false,
                unidades: false,
                headtitle: "calificar",
              });
            }
          );
        }
      });
    } else {
      res.redirect("/");
    }
  } catch (err) {
    console.error("Error al realizar las consultas:", err);
    res.status(500).send("Error en las consultas");
  }
};

export const getAulaUnidades = async (req, res) => {
  try {
    if (req.session.loggedin == true) {
      const id = req.session.user;
      const user = req.session.name;
      const email = req.session.email;

      await req.getConnection((err, conn) => {
        if (req.session.userType == 1) {
          console.log("inicia query");
          conn.query(
            "SELECT * FROM aulas WHERE user_id = ?",
            [id],
            (err, userdata) => {
              if (err) {
                console.error("Error en la consulta:", err);
                res.status(500).send("Error en la consulta");
              }

              console.log("busca las aulas asignadas a ese profesor");
              console.log(userdata);

              conn.query(
                "SELECT *FROM evaluacion_unidad WHERE aula_id = ?",
                [req.params.aulaid],
                (err, unidades) => {
                  const vista = "calificar";
                  const calificarvista = true;
                  res.render("calificar", {
                    aulas: userdata,
                    session: req.session,
                    vista,
                    calificarvista,
                    calificaciones: false,
                    unidades,
                    headtitle: "calificar",
                  });
                }
              );
            }
          );
        }
      });
    } else {
      res.redirect("/");
    }
  } catch (err) {
    console.error("Error al realizar las consultas:", err);
    res.status(500).send("Error en las consultas");
  }
};

export const getcalificacionMateria = async (req, res) => {
  try {
    if (req.session.loggedin == true) {
      const id = req.session.user;
      const user = req.session.name;
      const email = req.session.email;

      await req.getConnection((err, conn) => {
        if (req.session.userType == 1) {
          console.log("inicia query");
          conn.query(
            "SELECT * FROM aulas WHERE user_id = ?",
            [id],
            (err, userdata) => {
              if (err) {
                console.error("Error en la consulta:", err);
                res.status(500).send("Error en la consulta");
              }

              console.log("busca las aulas asignadas a ese profesor");
              console.log(userdata);

              conn.query(
                "SELECT archivos_evaluacion.*, alumnos_aula.user_id AS nombre_alumno, users.name AS nombre_usuario FROM archivos_evaluacion JOIN alumnos_aula ON archivos_evaluacion.alumno_id = alumnos_aula.id JOIN users ON alumnos_aula.user_id = users.id WHERE archivos_evaluacion.evaluacion_unidad_id = ?;",
                [req.params.unidadid],
                (err, evaluacionesData) => {
                  console.log(evaluacionesData);

                  //calificacion

                  const vista = "calificar";
                  const calificarvista = true;
                  res.render("calificar", {
                    aulas: userdata,
                    session: req.session,
                    vista,
                    calificarvista,
                    calificaciones: evaluacionesData,
                    unidades: false,
                    headtitle: "calificar",
                  });
                }
              );
            }
          );
        }
      });
    } else {
      res.redirect("/");
    }
  } catch (err) {
    console.error("Error al realizar las consultas:", err);
    res.status(500).send("Error en las consultas");
  }
};

export const postcalificacion = (req, res) => {
  try {
    console.log(req.body.calificacion);
    const newCalification = req.body.calificacion;

    req.getConnection((err, conn) => {
      conn.query(
        "UPDATE archivos_evaluacion SET calificacion = ? WHERE id = ?",
        [newCalification, req.params.evaluacion],
        (err, userdata) => {
          res.redirect("/calificar");
        }
      );
    });
  } catch (err) {
    console.error("Error al realizar las consultas:", err);
    res.status(500).send("Error en las consultas");
  }
};

*/
