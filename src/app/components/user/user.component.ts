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
    if (isNaN(this.currencyNumber)) {
      alert('Ошибка: введите число.');
      return;
    }
    const today = new Date();
    const date = today.getDate() + '.' + (today.getMonth() + 1) + '.' + today.getFullYear();
    const time =
      today.getHours().toLocaleString('ru-RU', {minimumIntegerDigits: 2}) + ':' +
      today.getMinutes().toLocaleString('ru-RU', {minimumIntegerDigits: 2}) + ':' +
      today.getSeconds().toLocaleString('ru-RU', {minimumIntegerDigits: 2});
    const dateTime = date + ' ' + time;

    debugger;
    if (this.transactionType == 'buy') {
      if (this.currencyNumber <= +this.general.restrValue) {
        this.general.transactions.push({
          date: dateTime,
          type: this.transactionType,
          amount: this.general.buyValue * this.currencyNumber
        });
        localStorage.setItem('TRANSACTIONS', JSON.stringify(this.general.transactions));
        alert(`Вы купили ${this.currencyNumber} ед. валюты по курсу ${this.general.buyValue}.\nСумма: ${this.general.buyValue * this.currencyNumber}\nДата сделки: ${dateTime}`);
      } else {
        alert(`Ошибка: количество валюты в вашей сделке превышает ограничение (${this.general.restrValue})!`);
      }
    }
    if (this.transactionType == 'sell') {
      if (this.currencyNumber <= +this.general.restrValue) {
        this.general.transactions.push({
          date: dateTime,
          type: this.transactionType,
          amount: this.general.sellValue * this.currencyNumber
        });
        localStorage.setItem('TRANSACTIONS', JSON.stringify(this.general.transactions));
        alert(`Вы продали ${this.currencyNumber} ед. валюты по курсу ${this.general.sellValue}.\nСумма: ${this.general.sellValue * this.currencyNumber}\nДата сделки: ${dateTime}`);
      } else {
        alert(`Ошибка: количество валюты в вашей сделке превышает ограничение (${this.general.restrValue})!`);
      }
    }
  }
}
