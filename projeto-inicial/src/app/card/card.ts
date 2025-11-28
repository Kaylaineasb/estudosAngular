import { Component, Input, numberAttribute } from '@angular/core';
import { CardButton } from "../card-button/card-button";

interface IPlano{
  infos: IInfos;
}

interface IInfos{
  tipo:string;
  preco: number;
}
@Component({
  selector: 'app-card',
  imports: [CardButton],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class CardComponent {
  @Input({ required: true, transform: numberAttribute }) planPrice: number = 0;

  private _planType: string = '';

  @Input('planType')
  set planType(value: string){
    this._planType = value.toUpperCase();
  }

  get planType():string{
    return this._planType;
  }

 plano: IPlano = {
  infos: {
    tipo: 'Simples',
    preco: 100,
  }
 }

 buttonClicked(valueEmitted: boolean){
  console.log("buttonClicked", valueEmitted);
 }
}
