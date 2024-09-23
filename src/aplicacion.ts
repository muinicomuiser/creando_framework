import { IncomingMessage, ServerResponse } from "http";
import { RespuestasMetodos } from "./respuestas";

export class Aplicacion {
    respondedores: RespuestasMetodos[] = [];
    constructor() { }
    async rutas(request: IncomingMessage, response: ServerResponse) {
        const respondedor = this.respondedorPorUrl(request.url!);
        if (respondedor) {
            if (request.method == METODOS.get) {
                respondedor.get(response)
            }
            else if (request.method == METODOS.post) {
                let buffer = await this.requestBodyBuffer(request);
                let body = await JSON.parse(buffer.concat().toString())
                respondedor.post(response, body)
            }
            else if (request.method == METODOS.put) {
                let buffer = await this.requestBodyBuffer(request);
                let body = await JSON.parse(buffer.concat().toString())
                respondedor.put(response, body)
            }
            else if (request.method == METODOS.patch) {
                let buffer = await this.requestBodyBuffer(request);
                let body = await JSON.parse(buffer.concat().toString())
                respondedor.patch(response, body)
            }
            else if (request.method == METODOS.delete) {
                respondedor.delete(response)
            }
        }
        else {
            response.statusCode = 500;
            response.setHeader('Content-Type', 'application/json');
            response.write('Metodo: ' + request.method + '\n');
            response.write('URL: ' + request.url + '\n');
            response.end(JSON.stringify({ mensaje: 'No hay servicio para esta url' }));
        }
    }
    agregarRespondedor(...respondedor: RespuestasMetodos[]) {
        this.respondedores.push(...respondedor)
    }
    private respondedorPorUrl(url: string): RespuestasMetodos | undefined {
        const res: RespuestasMetodos | undefined = this.respondedores.find((res) => res.url == url);
        return res;
    }

    private async requestBodyBuffer(request: IncomingMessage) {
        let bodyBuffer: Buffer[] = [];
        request.on('data', (chunk) => {
            bodyBuffer.push(chunk);
        })

        return bodyBuffer;
    }
}


export const METODOS = {
    get: 'GET',
    post: 'POST',
    put: 'PUT',
    delete: 'DELETE',
    patch: 'PATCH'
} as const;

type KeysMetodos = keyof typeof METODOS;
export type ValuesMetodos = (typeof METODOS)[KeysMetodos]