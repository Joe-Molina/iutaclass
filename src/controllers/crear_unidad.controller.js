import bodyParser from "body-parser";
import axios from "axios";
import moment from "moment";
import session from "express-session";
import myConnection from 'express-myconnection'

export const getCrearUnidad = async (req, res) => {
    try {

        req.getConnection((err, conn) => {
            conn.query(
                "SELECT * FROM aulas WHERE user_id = ?",
                [req.session.user],
                (err, aulas) => {
                    console.log(aulas)
                    res.render('crearunidad', {aulas, session})


                }
            )
        })

    } catch (err) {

    }
}

export const postCrearUnidad = async (req, res) => {

}