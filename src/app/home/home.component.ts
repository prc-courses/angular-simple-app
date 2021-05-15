import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {StateService} from '../common/state.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styles: [`
    small {
      cursor: pointer;
    }
  `]
})
export class HomeComponent implements OnInit {
  title: string = 'Home Page';
  body:  string = 'This is the home page body';
  message: string;

  constructor(private _stateService: StateService, private _router: Router) { }

  ngOnInit() {
    this.message = this._stateService.getMessage();
  }

  updateMessage(m: string): void {
    this._stateService.setMessage(m);
  }
}
