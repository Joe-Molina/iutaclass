import bodyParser from "body-parser";
import axios from "axios";
import moment from "moment";
import session from "express-session";
import myConnection from 'express-myconnection'

export const getCrearAula = async (req, res) => {

    if(req.session.userType == 1){
        await req.getConnection((err, conn) => {
            conn.query(
                "SELECT * FROM users WHERE tipo_usuario = 1",
                (err, userdata) => {
    
                    console.log(userdata)
    
                    res.render("crearaula", { docentes: userdata, session: req.session});
                }
    
            )
        })
    } else {
        res.redirect('/')
    }
};

export const postCrearAula = async (req, res) => {
    const data = req.body;

    req.getConnection((err, conn) => {
        conn.query('INSERT INTO aulas SET ?', [data], (err, rows) => {
            console.log(data)
            res.redirect('/crearaula')
        })
    });
};
