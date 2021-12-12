import {Component} from '@angular/core';
import {GeneralService} from "../../services/general.service";

@Component({
  selector: 'cashier',
  templateUrl: './cashier.component.html',
  styleUrls: ['./cashier.component.css']
})
export class CashierComponent {
  public isRates = false;
  public isRestr = false;

  constructor(public general: GeneralService) {}

  selectRates() {
    this.isRates = !this.isRates;
    this.isRestr ? this.isRestr = false : '';
  }

  selectRestr() {
    this.isRestr = !this.isRestr;
    this.isRates ? this.isRates = false : '';
  }

  getHistory() {

  }

  submitRates(event: any) {
    if (!isNaN(event.target.buy.value) && !isNaN(event.target.sell.value)) {
      alert(`Курс изменен! Покупка: ${event.target.buy.value}, Продажа: ${event.target.sell.value}`);
    } else {
      alert('Ошибка: введите число.');
      return;
    }
  }

  submitRestr(event: any) {
    if (!isNaN(event.target.restr.value)) {
      alert(`Ограничения изменены! Новое значение: ${event.target.restr.value}`);
      this.general.setRestr(event.target.restr.value);
    } else {
      alert('Ошибка: введите число.');
      return;
    }
  }
}
