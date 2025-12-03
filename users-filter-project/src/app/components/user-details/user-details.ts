import { Component, Input } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { IUser } from '../../interfaces/user/user.interface';
import { PhonePipe } from "../../pipes/phone.pipe";
import { AddressPipe } from "../../pipes/address.pipe";
import { StatusPipe } from "../../pipes/status.pipe";
import { DatePipe } from '@angular/common';
import { DashIfEmptyPipe } from "../../pipes/dash-if-empty.pipe";

@Component({
  selector: 'app-user-details',
  imports: [
    MatListModule,
    MatDividerModule,
    PhonePipe,
    AddressPipe,
    StatusPipe,
    DatePipe,
    DashIfEmptyPipe
],
  templateUrl: './user-details.html',
  styleUrl: './user-details.scss',
})
export class UserDetails {
  @Input({ required: true }) user: IUser = {} as IUser;
}
