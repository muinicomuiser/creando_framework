import { ServerResponse } from "http";

export class RespuestasMetodos {
    protected _url: string = '/';
    constructor() {
    }

    protected setUrl(url: string) {
        this._url += url;
        /**Colores desde 30 a 37 para la fuente*/
        /**Colores desde 40 a 47 para el fondo*/
        console.log('\x1b[36m%s\x1b[0m', "SERVICIO ACTIVO EN LA RUTA: " + this.url)
    }

    get url(): string {
        return this._url;
    }

    get(response: ServerResponse) {
        // response.statusCode = 200;
        // response.setHeader('Content-Type', 'application/json');
        // response.write('Metodo: ' + METODOS.get + '\n');
        // response.end(JSON.stringify({ mensaje: 'GET' }));
    }
    post(response: ServerResponse, body: Object) {
        // response.statusCode = 200;
        // response.setHeader('Content-Type', 'application/json');
        // response.write('Metodo: ' + METODOS.post + '\n');
        // let bodyBuffer: Buffer[] = [];
        // request.on('data', (chunk) => {
        //     bodyBuffer.push(chunk);
        // }).on('end', () => {
        //     const body = JSON.parse(Buffer.concat(bodyBuffer).toString());
        //     // at this point, `body` has the entire request body stored in it as a string
        //     console.log(body.mensaje)
        //     console.log(bodyBuffer)
        // });

        // response.end(JSON.stringify({ mensaje: 'POST' }));
    }
    patch(response: ServerResponse, body: Object) {
        // response.statusCode = 200;
        // response.setHeader('Content-Type', 'application/json');
        // response.write('Metodo: ' + METODOS.patch + '\n');
        // response.end(JSON.stringify({ mensaje: 'PATCH' }));
    }
    put(response: ServerResponse, body: Object) {
        // response.statusCode = 200;
        // response.setHeader('Content-Type', 'application/json');
        // response.write('Metodo: ' + METODOS.put + '\n');
        // response.end(JSON.stringify({ mensaje: 'PUT' }));

    }
    delete(response: ServerResponse) {
        // response.statusCode = 200;
        // response.setHeader('Content-Type', 'application/json');
        // response.write('Metodo: ' + METODOS.delete + '\n');
        // response.end(JSON.stringify({ mensaje: 'DELETE' }));
    }
}