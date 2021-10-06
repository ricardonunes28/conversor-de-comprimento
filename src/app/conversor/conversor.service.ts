import { Injectable } from "@angular/core";
import { Unidades } from "./unidades";

@Injectable()
export class ConversorService {
    constructor() { }

    getUnidades() {
        return Unidades.map((unidade) => unidade.unidade)
    }

    isNumber(n: any) {
        return !isNaN(parseFloat(n)) && isFinite(n)
    }

    /**
     * Formatando a unidade
     */

    formatarUnidade(unidadeString: string) {
        const partes = unidadeString.split(' ')
        const valor = parseFloat(partes[0])

        if (!this.isNumber(valor)) {
            return null // acho que pode ser false também
        }
        const unidade = Unidades.filter((unidade) => partes[1].toLowerCase() === unidade.unidade)

        if (!unidade[0]) {
            return null
        }

        return {
            val: valor,
            uni: unidade[0].unidade
        }
    }

    /**
     * Aqui utilizamos o nosso serviço de convertendo para unidade, verificando a string e o valor recebido, logo em seguido ele é tratado.
     * 
     * @param valor 
     * @param recebido 
     * @param tratado 
     * @returns 
     */
    converterParaUnidade(valor: number, recebido: string, tratado: string) {
        var conversao;
        conversao = valor / Unidades.find((unidade) => unidade.unidade === recebido).paraMetros
        conversao *= Unidades.find((unidade) => unidade.unidade === tratado).paraMetros
        return parseFloat(conversao.toFixed(6));
    }

}