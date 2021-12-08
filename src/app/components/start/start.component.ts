import { Component } from '@angular/core';
import {GeneralService} from "../../services/general.service";

@Component({
  selector: 'start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent {
  constructor(public general: GeneralService) {
  }

  public nextDay() {
    this.general.day++;
    this.general.setValues();
  }
}