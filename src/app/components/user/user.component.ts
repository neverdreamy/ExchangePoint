import {Component} from '@angular/core';
import {GeneralService} from "../../services/general.service";

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  constructor(public general: GeneralService) {
  }
}
