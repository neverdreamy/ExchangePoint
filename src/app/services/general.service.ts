import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})

export class GeneralService {
  public day = 1;
  public buyValue = 0;
  public sellValue = 0;

  constructor() {
    this.setValues();
  }

  public setValues(setBuyValue?: number, setSellValue?: number) {
    const max = 1;

    if (setBuyValue && setSellValue) {
      this.buyValue = setBuyValue;
      this.sellValue = setSellValue;
    } else {
      this.buyValue = +(Math.random() + max).toFixed(4);
      this.sellValue = +(this.buyValue - Math.random() * 0.1).toFixed(4);
    }
  }

  public setRestr(setRestValue?: number) {

  }
}
