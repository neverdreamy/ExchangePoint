import {Component} from '@angular/core';
import {GeneralService} from "../../services/general.service";

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  transactionType = '';
  currencyNumber = 1;

  constructor(public general: GeneralService) {}

  makeTransaction() {
    const today = new Date();
    const date = today.getDate() + '.' + (today.getMonth() + 1) + '.' + today.getFullYear();
    const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    const dateTime = date + ' ' + time;

    if (this.transactionType == 'buy') {
      this.general.transactions.push({
          date: dateTime,
          type: this.transactionType,
          amount: (this.general.buyValue * this.currencyNumber).toFixed(2)
        });
      localStorage.setItem('TRANSACTIONS', JSON.stringify(this.general.transactions));
      alert(`Вы купили ${this.currencyNumber} ед. валюты по курсу ${this.general.buyValue}.\nСумма: ${this.general.buyValue * this.currencyNumber}.\nДата сделки: ${dateTime}.`);
    }
    if (this.transactionType == 'sell') {
      this.general.transactions.push({
        date: dateTime,
        type: this.transactionType,
        amount: (this.general.sellValue * this.currencyNumber).toFixed(2)
      });
      localStorage.setItem('TRANSACTIONS', JSON.stringify(this.general.transactions));
      alert(`Вы продали ${this.currencyNumber} ед. валюты по курсу ${this.general.sellValue}.\nСумма: ${this.general.sellValue * this.currencyNumber}.\nДата сделки: ${dateTime}.`);
    }
  }
}
