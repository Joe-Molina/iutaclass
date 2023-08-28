import bodyParser from "body-parser";
import axios from "axios";
import moment from "moment";
import myConnection from "express-myconnection";
import session from "express-session";

/*

hacer consulta a la base de datos
req.getConnection((err, conn) => {
    conn.query(
        "SELECT * FROM users WHERE email = ?", (consulta)
        [data.email], (informacion traida del req.body)
        (err, userdata) => { (conjunto de registros que consiguio con la consulta)
}

insertar datos

const nuevoDato = { nombre: 'Ejemplo', edad: 25 };

connection.query('INSERT INTO tabla_ejemplo SET ?', nuevoDato, (error, result) => {
    if (error) {
      console.error('Error al insertar datos:', error);
      res.send('Error al insertar datos');
    } else {
      console.log('Datos insertados correctamente');
      res.send('Datos insertados correctamente');
    }

*/

export const getEjemplo = async (req, res) => {

}