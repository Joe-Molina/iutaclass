import bodyParser from "body-parser";
import axios from "axios";
import moment from "moment";
import session from "express-session";
import myConnection from 'express-myconnection'

export const getClass = async (req, res) => {
    if (req.session.loggedin == true) {
      const user = req.session.name;
      const email = req.session.email;
  
      //const [rows] = await pool.query("SELECT * FROM notes");
  
      req.getConnection((err, conn) => {
        conn.query("SELECT id FROM users WHERE email = ?",
        [email],
        (err, userdata) => {
  
  
  
          console.log(userdata[0])
  
          req.session.idUser = userdata[0].id
            
          
          conn.query('SELECT * FROM alumnos_aula WHERE userId = ?',
          [req.session.idUser],
          (err, userdata) => {
            console.log(userdata)
  
            res.render("indexClass.ejs", {notes: userdata, user, idUser: req.session.idUser});
  
          })
        });
      })
  
    } else {
      res.redirect("/login");
    }
  };