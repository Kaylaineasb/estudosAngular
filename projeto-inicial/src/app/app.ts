import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from "./card/card";
import { CardRoxoComponent } from "./card-roxo/card-roxo";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CardComponent, CardRoxoComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('projeto-inicial');
}
