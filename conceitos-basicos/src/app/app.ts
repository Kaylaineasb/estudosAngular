import { Component, signal } from '@angular/core';
import {ListaComprasComponent} from './lista-compras.component/lista-compras.component'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ListaComprasComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('conceitos-basicos');
}
