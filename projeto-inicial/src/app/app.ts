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
  inputText = 'Texto inicial';
  inputType = 'password';
  isDisabled = false;
  buttonTitle= 'Titulo do botao';
  buttonDisable = true;
  widthButton = '110px';
  widthButton2 = 130;
  isGreen = true;
  isRed = true;
  cardPlanType = 'Simples';
  cardPlanPrice = 100;

  styleObj = {
    width: '160px',
    backgroundColor: 'grey'
  }

  enableInput(){
    this.isDisabled = false;
  }

  disableInput(){
    this.isDisabled = true;
  }

  setShowPassword(){
    if(this.inputType === 'password'){
      this.inputType = 'text';
    }else{
      this.inputType = 'password';
    }
  }

  handleInputKeyUp(event: KeyboardEvent){
    const currentText = (event.target as HTMLInputElement).value;
    console.log(currentText);
  }

  onButtonClick(){
    this.buttonTitle = 'Titulo alterado';
    this.buttonDisable = !this.buttonDisable;
  }

  updateStyleObj(){
    this.styleObj.width = '170px';
    this.styleObj.backgroundColor = 'lightblue';
  }

  updateStyleObjCorrect(){
    this.styleObj = {
      width: '170px',
      backgroundColor: 'lightblue'
    }
  }

  updateWidth(){
    this.widthButton2 = 200;
  }

  handlePlanType(text: string){
    this.cardPlanType = text;
  }
}
