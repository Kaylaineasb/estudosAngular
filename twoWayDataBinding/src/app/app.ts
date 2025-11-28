import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StatusClassPipe } from "./pipes/status-class.pipe";

interface Aluno{
  nome: string;
  matricula: number;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule, StatusClassPipe],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('twoWayDataBinding');

  name : string = 'Kaylaine';
  email : string = '';
  isAdmin : boolean = false;
  alunos : Aluno[] = [
    {nome: 'Kaylaine', matricula: 123}
  ];
  isSalvo: boolean = true;
  corFundo: string = 'blue';
  pessoa = { 
    name: 'Felipe', 
    status: 1
  };

  pessoa2 = { 
    name: 'Kaylaine', 
    status: 2
  };

  pessoa3 = { 
    name: 'Arthur', 
    status: 3
  };

  handleInputChange(event : any){
    console.log(event);
    this.name = event;
  }

  getStyle(status: number){
    console.log('getStyle');
    return {
        'active': status === 1,
        'partial': status ===2,
        'blocked': status ===3
    }
  }
}
