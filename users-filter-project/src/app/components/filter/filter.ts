import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { IFilterOptions } from '../../interfaces/filter-options.interface';

@Component({
  selector: 'app-filter',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './filter.html',
  styleUrl: './filter.scss',
})
export class Filter {
  filterOptions: IFilterOptions = {
    name: undefined,
    startDate: undefined,
    endDate: undefined,
    status: undefined
  };

  statusList = [
    { description: 'Ativo', value: true},
    { description: 'Inativo', value: false}
  ];

  @Output('onFilter') onFilterEmitt = new EventEmitter<IFilterOptions>();

  onFilter(){
    this.onFilterEmitt.emit(this.filterOptions);
  }
}
