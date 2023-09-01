import bodyParser from "body-parser";
import axios from "axios";
import moment from "moment";
import session from "express-session";
import myConnection from 'express-myconnection'
import pool from 'mysql2'


export const getIndex = async (req, res) => {

  try {

    const id = req.session.user;
    const user = req.session.name;
    const email = req.session.email;


    if (req.session.loggedin == true) {

      await req.getConnection((err, conn) => {
        if (req.session.userType == 2) {
          conn.query(
            "SELECT * FROM Alumnos_aula WHERE user_id = ?", [id],
            (err, userdata) => {
              if (err) {
                console.error('Error en la consulta:', err);
                res.status(500).send('Error en la consulta');
                return;
              }
              console.log("userdata")
              console.log(userdata)

              const aulaIds = userdata.map((row) => row.aula_id);

              console.log("aulas id")
              console.log(aulaIds)
              conn.query(
                "SELECT * FROM aulas WHERE id IN (?)",
                [aulaIds],
                (err, aulaData) => {
                  if (err) {
                    console.error('Error en la segunda consulta:', err);
                    res.status(500).send('Error en la segunda consulta');
                    return;
                  }

                  console.log(aulaData)
                  res.render("index", { aulas: aulaData, session: req.session, unidades: false });
                }
              );
            }
          )
        }

        if (req.session.userType == 1) {
          conn.query(
            "SELECT * FROM aulas WHERE user_id = ?", [id],
            (err, userdata) => {
              if (err) {
                console.error('Error en la consulta:', err);
                res.status(500).send('Error en la consulta');
              }

              res.render("index", { aulas: userdata, session: req.session, unidades: false })


            }
          )
        }
      })
    } else {
      res.redirect("/login");
    }


  } catch (err) {
    console.error('Error al realizar las consultas:', err);
    res.status(500).send('Error en las consultas');
  }

};

export const getOneClass = async (req, res) => {
  try {

    if (req.session.loggedin == true) {
      const id = req.session.user;
      const user = req.session.name;
      const email = req.session.email;  

      await req.getConnection((err, conn) => {

       
        if(req.session.userType == 2){
          conn.query(
            "SELECT * FROM Alumnos_aula WHERE user_id = ?", [id],
            (err, userdata) => {
              if (err) {
                console.error('Error en la consulta:', err);
                res.status(500).send('Error en la consulta');
                return;
              }
              console.log("userdata")
              console.log(userdata)
  
              const aulaIds = userdata.map((row) => row.aula_id);
  
              conn.query(
                "SELECT * FROM aulas WHERE id IN (?)",
                [aulaIds],
                (err, aulaData) => {
                  if (err) {
                    console.error('Error en la segunda consulta 1:', err);
                    res.status(500).send('Error en la segunda consultaaaa');
                    return;
                  }
                  console.log("auladata")
                  console.log(aulaData)
                  conn.query(
                    "SELECT * FROM evaluacion_unidad WHERE aula_id = ?",
                    [req.params.id],
                    (err, unidades) => {
                      if (err) {
                        console.error('Error en la segunda consulta 2:', err);
                        res.status(500).send('Error en la segunda consulta');
                        return;
                      }
                      console.log(unidades)
                      res.render('index', { aulas: aulaData, unidades, session: req.session })
                    }
                  )
                }
              );
            }
          )
        }

        if(req.session.userType == 1){

          console.log("inicia query")
          conn.query(
            "SELECT * FROM aulas WHERE user_id = ?", [id],
            (err, userdata) => {
              if (err) {
                console.error('Error en la consulta:', err);
                res.status(500).send('Error en la consulta');
              }

              console.log("busca las aulas asignadas a ese profesor")
              console.log(userdata)

              conn.query(
                "SELECT * FROM evaluacion_unidad WHERE aula_id = ?",
                [req.params.id],
                (err, unidades) => {
                  if (err) {
                    console.error('Error en la segunda consulta 2:', err);
                    res.status(500).send('Error en la segunda consulta');
                    return;
                  }
                  console.log("unidades")
                  console.log(unidades)
                  res.render('index', { aulas: userdata, unidades, session: req.session })
                }
              )

            }
          )
        }
      })


    } else {
      res.redirect('/')
    }
  } catch (err) {
    console.error('Error al realizar las consultas:', err);
    res.status(500).send('Error en las consultas');
  }
}
