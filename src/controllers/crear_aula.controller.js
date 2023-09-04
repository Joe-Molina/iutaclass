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

                    conn.query(
                        "SELECT aulas.*, users.name FROM aulas JOIN users ON aulas.user_id = users.id;",
                        (err, aulas) =>{

                            console.log(userdata)
                            console.log(aulas)

                            const vista = "crearaula"
                            res.render("crearaula", { vista, docentes: userdata, session: req.session, aulas});
                        }
                    )
    
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

export const deleteAula = async (req, res) => {
    req.getConnection((err, conn) => {
        console.log(req.params.id)
        conn.query('DELETE FROM aulas WHERE id = ?', [req.params.id], (err, rows) => {
            res.redirect('/crearaula')
        })
    });
}   