import { ServerResponse } from "http";
import { RespuestasMetodos } from "./respuestas";
import { METODOS } from "./aplicacion";
interface BodyMensaje {
    mensaje: string;
}
export class RespuestasHola extends RespuestasMetodos {

    constructor() {
        super();
        this.setUrl('hola')
    }


    get(response: ServerResponse) {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'application/json');
        response.write('Metodo: ' + METODOS.get + '\n');
        response.write('URL: ' + this.url + '\n');
        response.end(JSON.stringify({ metodo: 'GET', mensaje: 'Hola' }));
    }
    post(response: ServerResponse, body: BodyMensaje) {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'application/json');
        response.write('Metodo: ' + METODOS.post + '\n');
        response.write('URL: ' + this.url + '\n');
        response.end(JSON.stringify({ metodo: 'POST', mensaje: 'Hola', body: body }));

    }
    patch(response: ServerResponse, body: BodyMensaje) {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'application/json');
        response.write('Metodo: ' + METODOS.patch + '\n');
        response.write('URL: ' + this.url + '\n');
        response.end(JSON.stringify({ metodo: 'PATCH', mensaje: 'Hola', body: body }));
    }
    put(response: ServerResponse, body: BodyMensaje) {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'application/json');
        response.write('Metodo: ' + METODOS.put + '\n');
        response.write('URL: ' + this.url + '\n');
        response.end(JSON.stringify({ metodo: 'PUT', mensaje: 'Hola', body: body }));

    }
    delete(response: ServerResponse) {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'application/json');
        response.write('Metodo: ' + METODOS.delete + '\n');
        response.write('URL: ' + this.url + '\n');
        response.end(JSON.stringify({ metodo: 'DELETE' }));
    }
}