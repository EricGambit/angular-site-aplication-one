import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Frase } from '../shared/frase.model'
import { FRASES } from './frases-mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnDestroy {

  public frases: Frase[] = FRASES;
  public instrucao: string = 'Traduza a frase: '
  public resposta: string = ''

  public rodada: number = 0
  public rodadaFrase: Frase

  public progresso: number = 0

  public tentativas: number = 3

  @Output() public encerrarjogo: EventEmitter<string> = new EventEmitter()

  constructor() {
    this.atualizaRodada()
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value
  }

  verificarResposta(): void {

    if (this.rodadaFrase.frasePtBr == this.resposta) {

      //Incrementa a rodada para trocar a 
      this.rodada++

      //Barra de progresso
      this.progresso = this.progresso + (100 / this.frases.length)


      if (this.rodada === 4) {
        this.encerrarjogo.emit('vitoria')

      }

      //Atualiza o objeto rodadaFrase
      this.atualizaRodada()

    } else {

      //Decrementa as tentativas
      this.tentativas--

      if (this.tentativas === -1) {
        this.encerrarjogo.emit('derrota')

      }


    }


  }

  private atualizaRodada(): void {
    this.rodadaFrase = this.frases[this.rodada]
    this.resposta = ''
  }

}
