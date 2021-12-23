import {Injectable} from "@angular/core";
import {GeneralService} from "./general.service";

@Injectable({providedIn: 'root'})

export class TransactionsService {

  constructor(public general: GeneralService) {
    if (!this.general.buyValue || !this.general.sellValue) {
      this.setValues();
    }
  }

  setValues(setBuyValue?: number, setSellValue?: number) {
    const max = 1;

    if (setBuyValue && setSellValue) {
      this.general.buyValue = setBuyValue;
      this.general.sellValue = setSellValue;
    } else {
      this.general.buyValue = +(Math.random() + max).toFixed(2);
      this.general.sellValue = +(this.general.buyValue - Math.random() * 0.1).toFixed(2);
      if (this.general.buyValue == this.general.sellValue) {
        this.general.sellValue -= 0.01;
      }
    }
    localStorage.setItem('BUY', this.general.buyValue.toString());
    localStorage.setItem('SELL', this.general.sellValue.toString());
  }

  setRestriction(setRestrictionValue: number) {
    this.general.restrictionValue = setRestrictionValue;
    localStorage.setItem('RESTRICTION', this.general.restrictionValue.toString());
  }
}
