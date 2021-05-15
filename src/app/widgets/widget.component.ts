import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs';
import {WidgetsService} from '../common/widgets.service';

@Component({
  selector: 'widget',
  templateUrl: './widget.component.html'
})
export class WidgetComponent implements OnInit {
  subp: Subscription;
  subq: Subscription;
  id: string;
  name: string;
  description:  string;
  price: number;
  promo: string;
  free: boolean = false;

  constructor(private _router: Router, private _route: ActivatedRoute, private _widgetsService: WidgetsService) {
    this.promo = _widgetsService.getPromoCode();
  }

  ngOnInit() {
    this.subp = this._route.params.subscribe(params => {
      const widget = this._widgetsService.getWidget(params['id']);
      this.id = widget.id;
      this.name = widget.name;
      this.description = widget.description || `This widget doesn't have a description available...`;
      this.price = widget.price;
    });
    this.subq = this._route.queryParams.subscribe(params => {
      this.free = params['free'] === 'true';
    });
  }

  ngOnDestroy() {
    this.subp.unsubscribe();
    this.subq.unsubscribe();
  }

  makeFree() {
    if (this.id && !this.free) this._router.navigate(['/widget', this.id], {queryParams: { free: 'true' }});
  }
}
