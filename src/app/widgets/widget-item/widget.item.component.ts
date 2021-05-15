import {Component, Input} from '@angular/core';
import {Widget} from '../../common/widget.model';


@Component({
  selector: 'widget-item',
  template: `
    <a class="btn btn-large" [routerLink]="['/widget', widget.id]">
      {{ widget.name }}
      <span class="badge">{{ widget.price | currency }}</span>
    </a>`,
  styles: [`
    .btn.btn-large { margin-right: 5px; margin-bottom: 15px; }
    .badge { margin-left: 5px; }
  `]
})
export class WidgetItemComponent {
  @Input() widget: Widget;
}
