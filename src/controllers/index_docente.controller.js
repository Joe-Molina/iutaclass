import bodyParser from "body-parser";
import axios from "axios";
import moment from "moment";
import session from "express-session";
import myConnection from 'express-myconnection'


export const getviewDocente = async (req , res) => {
    try {

        if (req.session.loggedin == true) {
            const id = req.session.user;
            const user = req.session.name;
            const email = req.session.email;

            await req.getConnection((err, conn) => {
                conn.query(
                  "SELECT * FROM aulas WHERE user_id = ?", [id],
                  (err, userdata) => {
                    if (err) {
                      console.error('Error en la consulta:', err);
                      res.status(500).send('Error en la consulta');
                    }
                    
                    console.log(userdata)

                    res.render('docente', {userdata})

                    
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

}