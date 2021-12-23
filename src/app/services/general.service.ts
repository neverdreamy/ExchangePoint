import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})

export class GeneralService {
  day: number = 1;
  buyValue: number = 0;
  sellValue: number = 0;
  restrictionValue: number = 1000;
  transactions: {
    date: string,
    type: string,
    amount: number
  }[];

  constructor() {
    if (localStorage.getItem('TRANSACTIONS')) {
      this.transactions = JSON.parse(<string>localStorage.getItem('TRANSACTIONS'));
    } else {
      localStorage.setItem('TRANSACTIONS', JSON.stringify([]));
      this.transactions = JSON.parse(<string>localStorage.getItem('TRANSACTIONS'));
    }

    this.day = localStorage.getItem('DAY') ? +localStorage.getItem('DAY') : 1;
    this.buyValue = localStorage.getItem('BUY') ? +localStorage.getItem('BUY') : 0;
    this.sellValue = localStorage.getItem('SELL') ? +localStorage.getItem('SELL') : 0;
    this.restrictionValue = localStorage.getItem('RESTRICTION') ? +localStorage.getItem('RESTRICTION') : 1000;
  }
}
