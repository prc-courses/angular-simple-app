import {Injectable} from '@angular/core';

import {Widget} from './widget.model';
import {PricingService} from "./pricing.service";

@Injectable()
export class WidgetsService {
  private _widgets: Widget[] = [
    {id: '01', name: 'Widget 01', description: 'This ia an absolutely fantastic widget 01', price: 100},
    {id: '02', name: 'Widget 02', description: 'This ia an absolutely fantastic widget 02', price: 200},
    {id: '03', name: 'Widget 03', description: 'This ia an absolutely fantastic widget 03', price: 300},
    {id: '04', name: 'Widget 04', price: 400},
    {id: '05', name: 'Widget 05', description: 'This ia an absolutely fantastic widget 05', price: 100},
    {id: '06', name: 'Widget 06', description: 'This ia an absolutely fantastic widget 06', price: 200},
    {id: '07', name: 'Widget 07', description: 'This ia an absolutely fantastic widget 07', price: 300}
  ];
  private _pricing: PricingService;
  private _promo: string = '';

  constructor(private _pricingService: PricingService) { }

  setPromoCode(promo: string) {
    if (promo !== undefined) this._promo = promo;
  }

  getPromoCode() {
    return this._promo;
  }

  getWidgets(featured: boolean = false): Widget[] {
    let count = 0;
    const widgets = this._widgets
                        .map(widget => this._pricingService.applyPromoCode(this._promo, widget))  // create a working copy and apply promocode if valid
                        .sort(() => (featured ? (Math.random() > 0.5 ? 1 : -1) : 0))              // shuffle if featured
                        .filter(() => featured ? (++count <= 3) : true);                          // return only 3 first if featured
    return widgets;
  };

  getWidget(id: string): Widget {
    return this._pricingService.applyPromoCode(this._promo, this._widgets.find(widget => widget.id === id));
  };
}
