import { isWithinInterval } from "date-fns";
import { IFilterOptions } from "../interfaces/filter-options.interface";
import { IUser } from "../interfaces/user/user.interface";

const filterUsersList = (filterOptions: IFilterOptions, usersList: IUser[]): IUser[] => {
    let filteredList: IUser[] = [];

    filteredList = filterUserListByName(filterOptions.name, usersList);
    filteredList = filterUserListByStatus(filterOptions.status, filteredList);
    filteredList = filterUsersListByDate(filterOptions.startDate, filterOptions.endDate, filteredList);

    return filteredList;
  }

const filterUsersListByDate = (startDate: Date | undefined, endDate: Date | undefined, filteredList: IUser[]): IUser[] => {
    const DATE_NOT_SELECTED = startDate === undefined ||  endDate === undefined;

    if(DATE_NOT_SELECTED){
      return filteredList;
    }

    const checkDateInterval = (user: IUser) => isWithinInterval(new Date (user.dataCadastro),{
      start: startDate,
      end: endDate
    })

    const listFiltered = filteredList.filter(checkDateInterval);

    return listFiltered;
}

const filterUserListByStatus = (status: boolean | undefined, usersList: IUser[]): IUser[] => {
    const STATUS_NOT_SELECTED = status === undefined;

    if(STATUS_NOT_SELECTED){
      return usersList;
    }

    const filteredList = usersList.filter((user) => user.ativo === status);

    return filteredList;
}

const filterUserListByName = (name: string | undefined, usersList: IUser[]): IUser[] => {
    const NAME_NOT_TYPPED = name === undefined;

    if(NAME_NOT_TYPPED){
      return usersList;
    }

    const filteredList = usersList.filter((user) => user.nome.toLowerCase().includes(name.toLowerCase()));

    return filteredList;
}

export { filterUsersList };