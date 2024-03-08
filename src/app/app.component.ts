import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'concreplus';

  isTemaEscuro: boolean = false;

  itensSidenav: {nomeIcone: string, nomeLink: string}[] = [
    {nomeIcone: 'home', nomeLink: 'Início'},
    {nomeIcone: 'note_alt', nomeLink: 'Registros'},
    {nomeIcone: 'analytics', nomeLink: 'Relatórios'}
  ];

  alternarTema() {
    if (this.isTemaEscuro) {
      this.isTemaEscuro = false;
    } else {
      this.isTemaEscuro = true;
    }
  }
}
