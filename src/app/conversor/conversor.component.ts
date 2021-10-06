import { Component, OnInit } from '@angular/core';
import { ConversorService } from './conversor.service';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent implements OnInit {
  par: {
    val: number,
    uni: string
  }
  para = 'm'
  resultado: number
  unidades: string[]

  constructor(private conversorService: ConversorService) { }
/**
   * A primeira execução é para pegar as unidades
   */
  ngOnInit() {
    this.unidades = this.conversorService.getUnidades()
  }
/**
   * Aqui checando se é valido para depois entar na função formatação de unidades
   * 
   * @param unidade 
   */
  formatarUnidade(unidade) {
    this.resultado = null
    if (unidade.valid) {
      this.par = this.conversorService.formatarUnidade(unidade.value)
    }
  }
/**
   * Verificação do formulario e da unidade e valor 
   * 
   * @param verificar 
   * @returns 
   */
  verificacaoSubmit(verificar){
    return verificar.valid && !!this.par
  }
/**
   * Usando a ultima função do service de conversão.
   */
  converter(){
    this.resultado = this.conversorService.converterParaUnidade(this.par.val, this.par.uni, this.para)
  }

}
