import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})

export class GeneralService {
  public day = 1;
  public buyValue = 0;
  public sellValue = 0;

  constructor() {

    // @ts-ignore
    this.day = localStorage.getItem('MAIN_DAY') ? +localStorage.getItem('MAIN_DAY') : 1;
    // @ts-ignore
    this.buyValue = localStorage.getItem('MAIN_BUY') ? +localStorage.getItem('MAIN_BUY') : '';
    // @ts-ignore
    this.sellValue = localStorage.getItem('MAIN_SELL') ? +localStorage.getItem('MAIN_SELL') : '';

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
      this.buyValue = +(Math.random() + max).toFixed(4);
      this.sellValue = +(this.buyValue - Math.random() * 0.1).toFixed(4);
    }
    localStorage.setItem('MAIN_BUY', this.buyValue.toString());
    localStorage.setItem('MAIN_SELL', this.sellValue.toString());
  }

  setRestr(setRestValue?: number) {

  }
}
