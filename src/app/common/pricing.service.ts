import {Injectable} from "@angular/core";
import {Widget} from './widget.model';


@Injectable()
export class PricingService {
  private promos = [
    { code: '50OFF', factor: 0.5 },
    { code: '25OFF', factor: 0.75 },
    { code: 'BLACK', factor: 0.40 }
  ];

  applyPromoCode(code: string, widget: Widget): Widget {
    const result: Widget = { ...widget };     // always return a new object, not changing the original widget
    const promo = this.promos.find(p => p.code === code.toUpperCase());
    if (promo) result.price = result.price * promo.factor;
    return result;
  }
}
