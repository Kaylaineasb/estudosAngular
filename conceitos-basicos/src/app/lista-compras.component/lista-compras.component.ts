import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { ItemLista } from './itemlista';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-lista-compras',
  standalone: true,
  imports: [FormsModule, NgClass],
  templateUrl: './lista-compras.component.html',
  styleUrl: './lista-compras.component.scss',
})
export class ListaComprasComponent {
  item: string = '';
  lista: ItemLista[] = [];
  
  adicionarItem(){
    if (!this.item) return;
    let itemLista = new ItemLista();
    itemLista.nome = this.item;
    itemLista.id = this.lista.length + 1;

    this.lista.push(itemLista);
    this.item = '';
  }

  riscarItem(itemLista: ItemLista){
    itemLista.comprado = !itemLista.comprado;
  }

  limparLista(){
    this.lista = [];
  }
}
