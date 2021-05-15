import {Component} from '@angular/core';
import { WidgetsService } from '../common/widgets.service';

@Component({
  selector: 'widgets',
  template: `
    <h1>
      {{ title }}
    </h1>
    <div class="pull-right">
      <input type="text" placeholder="Search" [(ngModel)]="filter" />
    </div>
    <p>{{ body }}</p>

    <hr>

    <widget-list [filter]="filter" [promo]="promo" ></widget-list>

    <div class="form-inline">
      <input type="text" #promocode [ngModel]="promo" (input)="setPromo(promocode.value)" placeholder="Promo code" />
    </div>
  `
})
export class WidgetsComponent {
  title: string = 'Widgets Page';
  body:  string = 'These are the available widgets';
  filter: string = '';
  promo: string;

  constructor(_widgetsService: WidgetsService) {
    this.promo = _widgetsService.getPromoCode();
  }

  setPromo(promo: string) {
    this.promo = promo.toUpperCase();
  }
}
