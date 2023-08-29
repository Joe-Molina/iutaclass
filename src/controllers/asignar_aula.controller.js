import bodyParser from "body-parser";
import axios from "axios";
import moment from "moment";
import session from "express-session";
import myConnection from 'express-myconnection'

export const getAsignarAula = async (req, res) => {

    try {

       const estudiantes =  req.getConnection((err, conn) => {
            conn.query(
                "SELECT * FROM users WHERE tipo_usuario = 2')",
                (err, userdata) => {
                    return userdata
                })
        })



    

        console.log(estudiantes)

        //res.render("asingnaraula", { estudiantes, aulas });
    } catch (err) {
        console.error('Error al realizar las consultas:', err);
        res.status(500).send('Error en las consultas');
    }
};

export const postAsignarAula = async (req, res) => {
    const data = req.body;

    req.getConnection((err, conn) => {
        conn.query('INSERT INTO aulas SET ?', [data], (err, rows) => {
            console.log(data)
            res.redirect('/crearaula')
        })
    });
};
