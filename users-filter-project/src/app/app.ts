import { Component, OnInit, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterOutlet } from '@angular/router';
import { UserDetails } from "./components/user-details/user-details";
import { Filter } from './components/filter/filter';
import { UsersListComponent } from "./components/users-list/users-list";
import { IUser } from './interfaces/user/user.interface';
import { UsersList } from './data/users-list';
import { IFilterOptions } from './interfaces/filter-options.interface';
import { filterUsersList } from './utils/filter-users-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButtonModule, UserDetails, Filter, UsersListComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit{
  protected readonly title = signal('users-filter-project');

  usersList: IUser[] = [];
  usersListFiltered: IUser[] = [];
  userSelected: IUser = {} as IUser;
  showUserDetails: boolean = false;

  ngOnInit() {
    setTimeout(()=>{
      this.usersList = UsersList;
      this.usersListFiltered = this.usersList;
    },1)
  }

  onUserSelected(user: IUser){
    this.userSelected = user;
    this.showUserDetails = true;
  }

  onFilter(filterOptions: IFilterOptions){
    this.usersListFiltered = filterUsersList(filterOptions, this.usersList);
  }
}
