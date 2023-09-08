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
    const idunidad = req.params.id;

    console.log(req.file)

    const { originalname } = req.file;

    console.log(req.file)


    req.getConnection((err, conn) => {

        conn.query(
            "SELECT aula_id FROM evaluacion_unidad WHERE id = ?",
            [idunidad],
            (err, aula) =>{

                console.log(aula[0].aula_id)

                const aulaid = aula[0].aula_id

                conn.query(
                    "SELECT id FROM alumnos_aula WHERE user_id = ? AND aula_id = ?",
                    [iduser,aulaid],
                    (err, idAlumno) =>{
                        const infoArchivo = {
                            descripcion: req.body.descripcion,
                            archivo: req.file.filename,
                            alumno_id: idAlumno[0].id,
                            evaluacion_unidad_id: idunidad,
                        }

                        conn.query("INSERT INTO archivos_evaluacion SET ?",
                        [infoArchivo],
                        (err, rows) =>{

                            console.log(infoArchivo)
            
                            res.redirect("/")
                        }
                        
                        )
        
                    }
                )
            }
        )

    })
}