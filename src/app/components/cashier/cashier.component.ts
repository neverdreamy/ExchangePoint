import {Component} from '@angular/core';
import {GeneralService} from "../../services/general.service";
import {TransactionsService} from "../../services/transactions.service";

@Component({
  selector: 'cashier',
  templateUrl: './cashier.component.html',
  styleUrls: ['./cashier.component.css']
})
export class CashierComponent {
  isRates: boolean = false;
  isRestriction: boolean = false;
  isHistory: boolean = false;

  constructor(
    public general: GeneralService,
    public transactionsService: TransactionsService
  ) {}

  changeRates() {
    this.isRates = !this.isRates;
    this.isRestriction ? this.isRestriction = false : '';
    this.isHistory ? this.isHistory = false : '';
  }

  changeRestriction() {
    this.isRestriction = !this.isRestriction;
    this.isRates ? this.isRates = false : '';
    this.isHistory ? this.isHistory = false : '';
  }

  getHistory() {
    this.isRates ? this.isRates = false : '';
    this.isRestriction ? this.isRestriction = false : '';
    this.isHistory = !this.isHistory;
  }

  submitRates(event: any) {
    if (!isNaN(event.target.buy.value) && !isNaN(event.target.sell.value)) {
      alert(`Курс изменен!\nПокупка: ${event.target.buy.value}\nПродажа: ${event.target.sell.value}`);
      this.transactionsService.setValues(event.target.buy.value, event.target.sell.value);
    } else {
      alert('Ошибка: введите число.');
      return;
    }
  }

  submitRestriction(event: any) {
    if (!isNaN(event.target.restr.value)) {
      alert(`Ограничение на максимальное кол-во единиц валюты за одну сделку изменено!\nНовое значение: ${event.target.restr.value}`);
      this.transactionsService.setRestriction(event.target.restr.value);
    } else {
      alert('Ошибка: введите число.');
      return;
    }
  }
}
