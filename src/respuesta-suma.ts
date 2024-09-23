import { ServerResponse } from "http";
import { RespuestasMetodos } from "./respuestas";
import { METODOS } from "./aplicacion";
interface BodySuma {
    numeroUno: number;
    numeroDos: number;
}
export class RespuestasSuma extends RespuestasMetodos {

    constructor() {
        super();
        this.setUrl('suma')
    }


    get(response: ServerResponse) {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'application/json');
        response.write('Metodo: ' + METODOS.get + '\n');
        response.write('URL: ' + this.url + '\n');
        response.end(JSON.stringify({ metodo: 'GET', mensaje: 'Hola' }));
    }
    post(response: ServerResponse, body: BodySuma) {
        if (body.numeroDos != undefined && body.numeroUno != undefined) {
            response.statusCode = 200;
            response.setHeader('Content-Type', 'application/json');
            response.write('Metodo: ' + METODOS.post + '\n');
            response.write('URL: ' + this.url + '\n');
            const suma: number = body.numeroUno + body.numeroDos;
            response.end(JSON.stringify({ metodo: 'POST', mensaje: 'La suma es: ' + suma, body: body }));
        }
        else {
            response.statusCode = 400;
            response.setHeader('Content-Type', 'application/json');
            response.write('Metodo: ' + METODOS.post + '\n');
            response.write('URL: ' + this.url + '\n');
            response.end(JSON.stringify({ metodo: 'POST', error: 'Los números "numeroUno" y "numeroDos" no han sido definidos.', body: body }));
        }

    }
    patch(response: ServerResponse, body: BodySuma) {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'application/json');
        response.write('Metodo: ' + METODOS.patch + '\n');
        response.write('URL: ' + this.url + '\n');
        const suma: number = body.numeroUno + body.numeroDos;
        response.end(JSON.stringify({ metodo: 'PATCH', mensaje: 'La suma es' + suma, body: body }));
    }
    put(response: ServerResponse, body: BodySuma) {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'application/json');
        response.write('Metodo: ' + METODOS.put + '\n');
        response.write('URL: ' + this.url + '\n');
        const suma: number = body.numeroUno + body.numeroDos;
        response.end(JSON.stringify({ metodo: 'PUT', mensaje: 'La suma es' + suma, body: body }));

    }
    delete(response: ServerResponse) {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'application/json');
        response.write('Metodo: ' + METODOS.delete + '\n');
        response.write('URL: ' + this.url + '\n');
        response.end(JSON.stringify({ metodo: 'DELETE' }));
    }
}