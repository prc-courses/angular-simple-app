import {Component, Input} from '@angular/core';
import {Experiment} from '../../common/experiment.model';

@Component({
  selector: 'experiment',
  template: `
    <div class="experiment" (click)="doExperiment()">
      <h3>
        {{ experiment.name }}
      </h3>
      <p>
        {{ experiment.description }}
      </p>
      <p class="badge">
        <strong>{{experiment.completed}}</strong>
      </p>
    </div>`,
  styles: [`
    .experiment {
      cursor: pointer;
      border: 1px lightgray solid;
      border-radius: 4px;
      padding: 5px 10px;
      margin-bottom: 10px;
    }
  `]
})
export class ExperimentDetailComponent {
  @Input() experiment: Experiment;

  doExperiment(): void {
    this.experiment.completed += 1;
  };
}
