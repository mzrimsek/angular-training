import { isEven, double } from './utils';

describe('functions', () => {
  describe('how to declare them', () => {
    it('has three different ways', () => {
      // named function
      // only named functions can be forward referenced
      function add(a: number, b: number): number {
        return a + b;
      }

      // anonymous functions
      // anonymous function with function keyword
      const subtract = function (a: number, b: number): number {
        return a - b;
      };

      // anonymous function with a fat arrow
      const multiply = (a: number, b: number): number => a * b;

      // a weird variant - the named anonymous function
      const divide = function div(a: number, b: number): number {
        return a / b;
      };

      expect(add(2, 2)).toBe(4);
      expect(subtract(10, 2)).toBe(8);
      expect(multiply(3, 3)).toBe(9);
      expect(divide(20, 2)).toBe(10);
    });

    it('a higher-ordered function', () => {
      interface MessageFunction {
        // tslint:disable-next-line:callable-types
        (message: string): void;
      }

      function doIt(f: MessageFunction) {
        f('hello');
        f('goodbye');
      }

      doIt(function (s: string) { console.log(s); });
      doIt((s: string) => console.log('PHAT ARROW!', s.toUpperCase()));

      function sayHi(message: string) {
        console.log('Saying Hi!', message);
      }
      doIt(sayHi);
      // doIt('Tacos');

      function makeAThing(outer: string): MessageFunction {
        return (inner) => console.log(outer, inner.toUpperCase()); // <-- closure
      }
      doIt(makeAThing('Bowser'));
    });
  });

  describe('making html elements', () => {
    it('simple functions', () => {
      function tagMaker(tag: string, content: string): string {
        return `<${tag}>${content}</${tag}>`;
      }

      expect(tagMaker('h1', 'hello')).toBe('<h1>hello</h1>');
    });

    it('using a class', () => {
      class TagMaker {
        private tag: string;
        constructor(tag: string) {
          this.tag = tag;
        }

        make(content: string): string {
          return `<${this.tag}>${content}</${this.tag}>`;
        }
      }

      const h1Maker = new TagMaker('h1');
      expect(h1Maker.make('hello')).toBe('<h1>hello</h1>');
    });

    it('using a higher-ordered function', () => {
      function tagMaker(tag: string): (content: string) => string {
        return (content: string) => `<${tag}>${content}</${tag}>`;
      }

      const h1Maker = tagMaker('h1');
      expect(h1Maker('hello')).toBe('<h1>hello</h1>');
    });
  });

  describe('overloading functions - sort of', () => {
    it('an example', () => {
      function formatName(first: string, last: string, mi?: string): string {
        let fullName = `${last}, ${first}`;
        if (mi) {
          fullName += ' ' + mi + '.';
        }
        return fullName;
      }

      expect(formatName('Han', 'Solo')).toBe('Solo, Han');
      expect(formatName('Han', 'Solo', 'D')).toBe('Solo, Han D.');
    });

    it('defaults for parameters', () => {
      const add = (a: number = 10, b: number = 12) => a + b;

      expect(add(2, 2)).toBe(4);
      expect(add(2)).toBe(14);
      expect((add())).toBe(22);
      expect(add(undefined, 80)).toBe(90);

      const subtraction = (a: number = 10, b: number): number => a - b;

      expect(subtraction(20, 10)).toBe(10);
      expect(subtraction(undefined, 5)).toBe(5);
    });

    it('has a rest operator', () => {
      const add = (a: number, b: number, ...rest: number[]): number => {
        // let total = a + b;
        // for (const num of rest) {
        //   total += num;
        // }
        // return total;
        return rest.reduce((state, next) => state + next, a + b);
      };

      expect(add(2, 3)).toBe(5);
      expect(add(1, 2, 3)).toBe(6);
      expect(add(1, 2, 3, 4, 5, 6, 7, 8, 9)).toBe(45);
    });
  });

  describe('array methods', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    it('has a forEach', () => {
      let total = 0;
      numbers.forEach(n => total += n);
      expect(total).toBe(45);
    });

    describe('methods that create new arrays', () => {
      it('filter', () => {
        const evens = numbers.filter(isEven);
        expect(evens).toEqual([2, 4, 6, 8]);
      });

      it('map', () => {
        const result = numbers.map(double);
        expect(result).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18]);
      });
    });

    describe('returning a single value', () => {
      it('checking membership', () => {
        const hasEvens = numbers.some(isEven);
        expect(hasEvens).toBe(true);

        const allEvens = numbers.every(isEven);
        expect(allEvens).toBe(false);
      });
    });

    it('can reduce', () => {
      const total = numbers.reduce((a, b) => a + b);
      expect(total).toBe(45);
    });
  });
});
