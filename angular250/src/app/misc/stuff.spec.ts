import { Brian, returnsObservable } from './stuff';
import 'rxjs/add/operator/first';

describe('some async stuff', () => {
  it('async with done in jasmine', (done) => {
    const b = new Brian();
    const result = b.washJeffsCar();
    result.then(data => {
      expect(data).toBe('Tacos!');
      done();
    });
  });

  it('using await', async () => {
    const b = new Brian();
    const result = await b.washJeffsCar();
    expect(result).toBe('Tacos!');
  });

  it('awaiting an observable', async () => {
    const results = await returnsObservable().first().toPromise();
    expect(results).toBe('Eggs');
  });
});
