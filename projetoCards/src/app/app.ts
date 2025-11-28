import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Button } from "./components/button/button";
import { Card } from "./components/card/card";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Button, Card],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  buttonClicked(){
    console.log('Button Clicked');
  }

  onCardButtonClicked(){
    console.log("onCardButtonClicked");
  }
}
