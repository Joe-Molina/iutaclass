import bodyParser from "body-parser";
import axios from "axios";
import moment from "moment";
import session from "express-session";
import myConnection from 'express-myconnection'

export const getAsignarAula = async (req, res) => {

    

    try {

        req.getConnection((err, conn) => {

          




            if (req.session.userType == 1) {
              if (err) {
                console.error('Error al establecer la conexión:', err);
                res.status(500).send('Error en la conexión a la base de datos');
                return;
              }
          
              const consulta1 = 'SELECT * FROM users WHERE tipo_usuario = 2';
              const consulta2 = 'SELECT * FROM aulas';
          
              const resultado = {};
          
              conn.query(consulta1, (err, rows1) => {
                if (err) {
                  console.error('Error en la consulta 1:', err);
                  res.status(500).send('Error en la consulta 1');
                  return;
                }
          
                resultado.estudiantes = rows1;
          
                conn.query(consulta2, (err, rows2) => {
                  if (err) {
                    console.error('Error en la consulta 2:', err);
                    res.status(500).send('Error en la consulta 2');
                    return;
                  }
          
                  resultado.aula = rows2;
  
                  console.log(resultado)
                  const vista = "asignaraula"
                  res.render('asignaraula', {vista,aulas: resultado.aula, estudiantes: resultado.estudiantes, session: req.session})
  
                });
              });
            } else {
              res.redirect('/')
            }
          });

     
    } catch (err) {
        console.error('Error al realizar las consultas:', err);
        res.status(500).send('Error en las consultas');
    }
};

export const postAsignarAula = async (req, res) => {
    const data = req.body;

    req.getConnection((err, conn) => {
        conn.query('INSERT INTO alumnos_aula SET ?', [data], (err, rows) => {
            console.log(data)
            res.redirect('/asignaraula')
        })
    });
};
