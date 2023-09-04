import bodyParser from "body-parser";
import axios from "axios";
import moment from "moment";
import session from "express-session";
import myConnection from 'express-myconnection'
import pool from 'mysql2'
import multer from 'multer';
import path from 'path';
import fs from 'fs';


export const subirArchivo = async (req,res) =>{
    const iduser = req.session.user 
    const idaula = req.params.id;

    const { originalname } = req.file;



    req.getConnection((err, conn) => {
        conn.query(
                    "SELECT id FROM alumnos_aula WHERE user_id = ? AND aula_id = ?",
                    [iduser, idaula]
                      )
    })
}