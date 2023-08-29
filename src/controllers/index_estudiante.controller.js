import bodyParser from "body-parser";
import axios from "axios";
import moment from "moment";
import session from "express-session";
import myConnection from 'express-myconnection'


export const getClass = async (req, res) => {

    try {
        if (req.session.loggedin == true) {
          const id = req.session.user;
          const user = req.session.name;
          const email = req.session.email;

          console.log(id)

          await req.getConnection((err, conn) => {
            conn.query(
              "SELECT * FROM Alumnos_aula WHERE user_id = ?", [id] ,
              (err, userdata) => {
                if (err) {
                  console.error('Error en la consulta:', err);
                  res.status(500).send('Error en la consulta');
                  return;
                }

                const aulaIds = userdata.map((row) => row.aula_id);

                conn.query(
                  "SELECT * FROM aulas WHERE id IN (?)",
                  [aulaIds],
                  (err, aulaData) => {
                    if (err) {
                      console.error('Error en la segunda consulta:', err);
                      res.status(500).send('Error en la segunda consulta');
                      return;
                    }
          
                    console.log(aulaData);
                    res.render("indexClass", { clases: userdata, aulas: aulaData });
                  }
                );

              console.log(userdata)


              res.render("indexClass", { clases: userdata });
            }

            )
        })
        } else {
      res.redirect("/login");
      }


    } catch (err) {
    console.error('Error al realizar las consultas:', err);
    res.status(500).send('Error en las consultas');
  }

};