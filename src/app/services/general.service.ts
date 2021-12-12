import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})

export class GeneralService {
  day = 1;
  buyValue = 0;
  sellValue = 0;
  restrValue = 1000;
  transactions: any;

  constructor() {
    if (localStorage.getItem('TRANSACTIONS')) {
      this.transactions = JSON.parse(<string>localStorage.getItem('TRANSACTIONS'));
    } else {
      localStorage.setItem('TRANSACTIONS', JSON.stringify([]));
      this.transactions = JSON.parse(<string>localStorage.getItem('TRANSACTIONS'));
    }

    // @ts-ignore
    this.day = localStorage.getItem('MAIN_DAY') ? +localStorage.getItem('MAIN_DAY') : 1;
    // @ts-ignore
    this.buyValue = localStorage.getItem('MAIN_BUY') ? +localStorage.getItem('MAIN_BUY') : '';
    // @ts-ignore
    this.sellValue = localStorage.getItem('MAIN_SELL') ? +localStorage.getItem('MAIN_SELL') : '';
    // @ts-ignore
    this.restrValue = localStorage.getItem('MAIN_RESTR') ? +localStorage.getItem('MAIN_RESTR') : 1000;

    if (!this.buyValue || !this.sellValue) {
      this.setValues();
    }
  }

  setValues(setBuyValue?: number, setSellValue?: number) {
    const max = 1;

    if (setBuyValue && setSellValue) {
      this.buyValue = setBuyValue;
      this.sellValue = setSellValue;
    } else {
      this.buyValue = +(Math.random() + max).toFixed(2);
      this.sellValue = +(this.buyValue - Math.random() * 0.1).toFixed(2);
      if (this.buyValue == this.sellValue) {
        this.sellValue -= 0.01;
      }
    }
    localStorage.setItem('MAIN_BUY', this.buyValue.toString());
    localStorage.setItem('MAIN_SELL', this.sellValue.toString());
  }

  setRestr(setRestrValue: number) {
    this.restrValue = setRestrValue;
    localStorage.setItem('MAIN_RESTR', this.restrValue.toString());
  }
}
