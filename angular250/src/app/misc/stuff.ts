import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

export class Brian {
  washJeffsCar() {
    return new Promise<string>(res => {
      setTimeout(() => {
        res('Tacos!');
      }, 20);
    });
  }
}

export const returnsObservable = () => Observable.of('Eggs');
