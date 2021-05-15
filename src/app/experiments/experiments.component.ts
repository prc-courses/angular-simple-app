import {Component, OnInit} from '@angular/core';
import {Experiment} from '../common/experiment.model';
import {ExperimentsService} from '../common/experiments.service';
import {StateService} from '../common/state.service';


@Component({
  selector: 'experiments',
  templateUrl: './experiments.component.html'
})
export class ExperimentsComponent implements OnInit {
  title: string = 'Experiments Page';
  body: string = 'Here you can find a list of ongoing experiments. Try them out by clicking the ones you like...';
  message: string;
  experiments: Experiment[];

  constructor(
    private _stateService: StateService,
    private _experimentsService: ExperimentsService) {}

  ngOnInit() {
    this.experiments = this._experimentsService.getExperiments();
    this.message = this._stateService.getMessage();
  }

  updateMessage(m: string): void {
    this._stateService.setMessage(m);
  }
}
