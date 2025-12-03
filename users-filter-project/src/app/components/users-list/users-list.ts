import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { IUser } from '../../interfaces/user/user.interface';
import { UsersList } from '../../data/users-list';
import { MatTableModule } from '@angular/material/table';
import { StatusPipe } from "../../pipes/status.pipe";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-users-list',
  imports: [MatTableModule, StatusPipe, DatePipe],
  templateUrl: './users-list.html',
  styleUrl: './users-list.scss',
})
export class UsersListComponent {
  displayedColumns: string[] = ['name','date','status'];
  @Input({ required: true }) userList: IUser[] = [];

  @Output('userSelected') userSelectedEmitt = new EventEmitter<IUser>();

  onUserSelected(user: IUser){
    console.log(user);
    this.userSelectedEmitt.emit(user);
  }
}
