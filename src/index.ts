import http from 'http';
import { RespuestasHola } from './respuesta-hola';
import { Aplicacion } from './aplicacion';
import { RespuestasSuma } from './respuesta-suma';
const hostname = '127.0.0.1';
const port = 3000;
const aplicacion: Aplicacion = new Aplicacion();
aplicacion.agregarRespondedor(new RespuestasHola, new RespuestasSuma)

const server = http.createServer((req, res) => {
    aplicacion.rutas(req, res)
});
server.listen(port, hostname, () => {
    console.log(`Servidor corriendo en http://${hostname}:${port}/`);
});