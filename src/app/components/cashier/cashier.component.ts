import {Component} from '@angular/core';
import {GeneralService} from "../../services/general.service";

@Component({
  selector: 'cashier',
  templateUrl: './cashier.component.html',
  styleUrls: ['./cashier.component.css']
})
export class CashierComponent {
  public isRates = false;
  public isRestrictions = false;

  constructor(public general: GeneralService) {}

  public selectRates() {
    this.isRates = !this.isRates;
    this.isRestrictions ? this.isRestrictions = false : '';
  }

  public selectRestrictions() {
    this.isRestrictions = !this.isRestrictions;
    this.isRates ? this.isRates = false : '';
  }

  public getHistory() {

  }

  public submitRates(event: any) {
    if (!isNaN(event.target.buy.value) && !isNaN(event.target.sell.value)) {
      if (event.target.buy.value >= event.target.sell.value) {
        alert(`Курс изменен! Покупка: ${event.target.buy.value}, Продажа: ${event.target.sell.value}`);
        this.general.setValues(event.target.buy.value, event.target.sell.value);
      } else {
        alert('Ошибка: курс покупки не может быть ниже курса продажи.');
        return;
      }
    } else {
      alert('Ошибка: введите число.');
      return;
    }
  }

  public submitRestr(event: any) {
    if (!isNaN(event.target.restr.value)) {
      alert(`Ограничения изменены! Новое значение: ${event.target.restr.value}`);
      this.general.setRestr(event.target.restr.value);
    } else {
      alert('Ошибка: введите число.');
      return;
    }
  }
}
