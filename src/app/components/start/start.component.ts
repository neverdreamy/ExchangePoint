import { Component } from '@angular/core';
import {GeneralService} from "../../services/general.service";
import {TransactionsService} from "../../services/transactions.service";

@Component({
  selector: 'start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent {
  constructor(
    public general: GeneralService,
    public transactionsService: TransactionsService
  ) {}

  nextDay() {
    this.general.day++;
    this.transactionsService.setValues();
    localStorage.setItem('DAY', this.general.day.toString());
  }

  reset() {
    const isReset = confirm('Вы уверены, что хотите сбросить настройки и удалить все данные?');
    if (isReset) {
      localStorage.clear();
      location.reload();
    }
  }
}
