import {Component, OnInit} from '@angular/core';
import {StateService} from '../common/state.service';
import {Tag} from '../common/tag.model';

@Component({
  selector: 'about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit{
  title: string = 'About Page';
  body:  string = 'This is the about page body';
  message: string;
  tags: Tag[];

  constructor(public _stateService: StateService) { }

  ngOnInit() {
    this.message = this._stateService.getMessage();
    this.tags = this._stateService.getTags();
  }

  updateMessage(m: string): void {
    this._stateService.setMessage(m);
  }
}
