import {Injectable} from '@angular/core';
import {Tag} from './tag.model';


@Injectable()
export class StateService {
	private _message = 'Hello Message';
  private _tags: Tag[] = [
    { tag: 'app', details: 'Awesome application' },
    { tag: 'angular', details: 'Angular is awesome' },
    { tag: 'typescript', details: 'Typescript boosts our productivity' },
    { tag: 'javascript', details: 'Javascript powers it all' }
  ];

  getMessage(): string {
    return this._message;
  };

  getTags(): Tag[] {
    return this._tags;
  }

  setMessage(newMessage: string): void {
    this._message = newMessage;
  };
}
