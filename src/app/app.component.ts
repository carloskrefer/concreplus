import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'concreplus';

  isTemaEscuro: boolean = false;

  nomesLinksSidenav: string[] = ["Início", "Registros", "Resultados"];

  alternarTema() {
    if (this.isTemaEscuro) {
      this.isTemaEscuro = false;
    } else {
      this.isTemaEscuro = true;
    }
  }
}
