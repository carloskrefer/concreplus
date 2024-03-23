import { Component, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AlternadorTema } from '../app.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {

  @Input() isTemaEscuro: boolean;
  @Input() alternarTema: AlternadorTema;
  @Input() sidenav: MatSidenav;

  constructor() {
    this.alternarTema = null!;
    this.isTemaEscuro = false;
    this.sidenav = null!;
  };

  ngOnChanges() {
    console.log(this.sidenav);
  }

}
