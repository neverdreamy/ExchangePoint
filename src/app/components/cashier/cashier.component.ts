import {Component} from '@angular/core';
import {GeneralService} from "../../services/general.service";

@Component({
  selector: 'cashier',
  templateUrl: './cashier.component.html',
  styleUrls: ['./cashier.component.css']
})
export class CashierComponent {
  isRates = false;
  isRestr = false;
  isTrans = false;

  constructor(public general: GeneralService) {}

  changeRates() {
    this.isRates = !this.isRates;
    this.isRestr ? this.isRestr = false : '';
    this.isTrans ? this.isTrans = false : '';
  }

  changeRestr() {
    this.isRestr = !this.isRestr;
    this.isRates ? this.isRates = false : '';
    this.isTrans ? this.isTrans = false : '';
  }

  getHistory() {
    this.isTrans = !this.isTrans;
    this.isRates ? this.isRates = false : '';
    this.isRestr ? this.isRestr = false : '';
  }

  submitRates(event: any) {
    if (!isNaN(event.target.buy.value) && !isNaN(event.target.sell.value)) {
      alert(`Курс изменен!\nПокупка: ${event.target.buy.value}\nПродажа: ${event.target.sell.value}`);
      this.general.setValues(event.target.buy.value, event.target.sell.value);
    } else {
      alert('Ошибка: введите число.');
      return;
    }
  }

  submitRestr(event: any) {
    if (!isNaN(event.target.restr.value)) {
      alert(`Ограничение на максимальное кол-во единиц валюты за одну сделку изменено!\nНовое значение: ${event.target.restr.value}`);
      this.general.setRestr(event.target.restr.value);
    } else {
      alert('Ошибка: введите число.');
      return;
    }
  }
}
