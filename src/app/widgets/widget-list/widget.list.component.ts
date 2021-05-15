import {Component, Input, SimpleChanges} from '@angular/core';
import {Widget} from '../../common/widget.model';
import {WidgetsService} from '../../common/widgets.service';


@Component({
  selector: 'widget-list',
  template: `
    <div class="pull-right">
      <small>{{widgets?.length}} {{featured ? 'featured ' : ''}}widgets</small>
    </div>
    <div class="btn-toolbar">
      <widget-item *ngFor="let widget of widgets" [widget]="widget"></widget-item>
    </div>
  `,
  styles: [`
  `]
})
export class WidgetListComponent {
  @Input() featured?: boolean = false;
  @Input() promo?: string = '';
  @Input() filter?: string;

  widgets: Widget[];

  constructor(private _widgetsService: WidgetsService) {}

  ngOnInit() {
    this._widgetsService.setPromoCode(this.promo);
    setTimeout(() => {
      this.widgets = this._widgetsService.getWidgets(this.featured);
    }, 1000);
  }

  ngOnChanges(changes: SimpleChanges) {
    // Ignore first change to be able to notice the timeout
    if ((changes.promo && changes.promo.firstChange) || (changes.filter && changes.filter.firstChange)) return;

    if (changes.promo) {
      this._widgetsService.setPromoCode(this.promo);
    }
    if (changes.promo || changes.filter) {
      this.widgets = this._widgetsService.getWidgets(this.featured);
      if (this.filter && this.filter.length > 0) {
        this.widgets = this.widgets.filter(widget => widget.name.includes(this.filter));
      }
    }
  }
}
