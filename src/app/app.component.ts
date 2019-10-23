import { Component } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  public jogoEmAndamento: boolean = true
  public tipoEncerramento: string

  public encerrarJogo(tipo: string): void {

    this.jogoEmAndamento = false
    this.tipoEncerramento = tipo

  }

  public reiniciarJogo(): void {
    this.jogoEmAndamento = true
    this.tipoEncerramento = undefined
  }

}
