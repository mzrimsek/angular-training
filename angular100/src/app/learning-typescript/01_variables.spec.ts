describe('Declaring variables', () => {
  describe('the keywords', () => {
    it('has a let keyword', () => {
      let y; // implicitly of type 'any'

      y = 'Tacos';
      expect(y).toBe('Tacos');
      expect(typeof y).toBe('string');

      y = 3.14;
      expect(y).toBe(3.14);
      expect(typeof y).toBe('number');
    });

    it('using let with an initializer', () => {
      let y: number | string | Function = 'Tacos'; // <-- initialize it
      //   [ Union type                 ]
      expect(y).toBe('Tacos');

      y = 3.14;

      y = function () {
        alert('Hello');
      };

      // y = [];
    });

    it('has a const keyword', () => {
      const PI = 3.1415;
      expect(PI).toBe(3.1415);

      // const does not allow setting a variable once it's been initialized
      // PI = 3;

      const LUCKYNUMBERS = [1, 2, 3, 4];
      // LUCKYNUMBERS = [4, 5, 6];
      LUCKYNUMBERS[0] = 100; // <-- const allows setting an array index

      const MOVIE = {
        title: 'The Last Jedi',
        director: 'Johnson'
      };
      // MOVIE = {
      //   title: 'Rogue One',
      //   director: 'Edwards'
      // };
      MOVIE.director = 'Abrams'; // <-- const allows setting an object attribute
    });

    it('has a var keyword but don\'t use it!', () => {
      const x = 12;
      if (x > 10) {
        // tslint:disable-next-line:no-var-keyword
        var y = 'Yep';
      }

      expect(y).toBe('Yep');
    });
  });

  describe('literals', () => {
    it('has numeric literals', () => {
      const normalBase10 = 6; // base 10
      const normalBase10Again = 123.45; // base 10
      const hexNumber = 0xff; // base 16
      const binaryNumber = 0b10101001; // binary - base 2
      const octalNumber = 0o744; // base 8 - useful in node for unix file permissions
    });

    it('has booleans', () => {
      const isTrue = true;
      const isFalse = false;
    });

    it('has string literals', () => {
      const firstString = 'this is "magical" a string';
      // tslint:disable-next-line:quotemark
      const secondString = "This also is 'awesome' a string";
      const thirdString = 'His name was O\'Connor';

      // tslint:disable-next-line:quotemark
      expect('dog').toBe("dog");
    });

    it('has template string', () => {
      const firstString = `this is "magical" 'a' string`;
      const lifeStory = `So...

      it all began 48 years ago at St.Thomas Hospital

      In Akron, Ohio...`;
      console.log(lifeStory);

      const name = 'Bill', age = 23;

      let info = 'His name is ' + name + ' and is ' + age + ' years old';
      console.log(info);
      info = `His name is ${name} and is ${age} years old`;
      console.log(info);
    });
  });

  describe('arrays and tuples', () => {
    describe('arrays', () => {
      it('creating them', () => {
        const numbers = [1, 2, 3, 4];
        let friends: string[];
        friends = ['Bill', 'Zac', 'Sarah'];
        expect(numbers[1]).toBe(2);
        expect(friends[99]).toBeUndefined();

        let otherStuff: (number | string)[]; // <-- array of numbers or strings
        // let otherStuff: number[] | string[]; <-- array of numbers or array of strings
        otherStuff = ['dog', 'cat', 12];

        let meals: Array<string | number>;
        let meals2: string[];
      });
    });

    describe('tuples', () => {
      it('an example', () => {
        // a tuple is a small array that has typed elements
        let person: [string, string, number, string];

        person = ['Ellis', 'Warren', 52, 'Musician'];

        const age = person[2];
        const lastName = person[1];
      });

      it('a practical example', () => {
        function formatName(first: string, last: string): [string, number] {
          const fullName = `${last}, ${first}`;
          return [fullName, fullName.length];
        }

        // expect(formatName('Luke', 'Skywalker')).toBe('Skywalker, Luke');
        const result = formatName('Han', 'Solo');
        const name = result[0];
        const len = result[1];
        expect(name).toBe('Solo, Han');
        expect(len).toBe(9);

        const [lName, lLen] = formatName('Luke', 'Skywalker');
        expect(lName).toBe('Skywalker, Luke');
        expect(lLen).toBe(15);

        const [, letters] = formatName('Leia', 'Organa');
        expect(letters).toBe(12);
      });
    });
  });

  describe('domains of values', () => {
    it('use a literal union', () => {

      type seatType = 'Aisle' | 'Middle' | 'Window';

      const reserveSeat = (passengerId: number, seat: seatType): number => {
        switch (seat) {
          case 'Aisle': {
            return 100;
          }
          case 'Middle': {
            return 90;
          }
          case 'Window': {
            return 110;
          }
          default: {
            return 0;
          }
        }
      };

      expect(reserveSeat(99, 'Aisle')).toBe(100);

      type numberOrNull = number | null;

      let x: numberOrNull;
      x = 12;
      // x = undefined;
      x = null;
    });

    it('regular old enumerated constants', () => {
      enum SeatType { Window, Aisle, Middle }

      const reserveSeat = (passengerId: number, seat: SeatType): number => {
        switch (seat) {
          case SeatType.Aisle:
          case SeatType.Window:
            return 200;
          case SeatType.Middle:
            return 150;
        }
      };

      expect(reserveSeat(12, SeatType.Aisle)).toBe(200);
    });
  });
});

describe('interfaces and object literals', () => {
  describe('object literals', () => {
    it('has them', () => {
      interface CastMember { name: string; role: string; }
      interface Movie {
        title: string;
        director: string;
        yearReleased: number;
        cast: CastMember[];
        mpaaRating?: 'G' | 'PG' | 'PG-13' | 'R' | 'NC-17';
        [key: string]: any;
      }

      const lastJedi: Movie = {
        title: 'The Last Jedi',
        director: 'Rian Johnson',
        yearReleased: 2017,
        cast: [
          { name: 'Mark Hamill', role: 'Luke Skywalker' },
          { name: 'Adam Driver', role: 'Kylo Ren' }
        ],
        ticketPurchased: true
      };

      expect(lastJedi.title).toBe('The Last Jedi');
      expect(lastJedi.cast[0].role).toBe('Luke Skywalker');

      lastJedi.yearReleased = 2018;
      expect(lastJedi.yearReleased).toBe(2018);

      const rogueOne: Movie = {
        title: 'Rogue One',
        director: 'Gareth Edwards',
        yearReleased: 2016,
        cast: [],
        mpaaRating: 'PG-13',
        review: 'It was really good!'
      };
    });

    it('can use objects like dictionaries', () => {
      interface Dictionary {
        [key: string]: any;
      }

      const stuff: Dictionary = {
        name: 'Bob',
        age: 42
      };

      stuff.pizza = 'Delicious';
    });

    it('typed dictionaries', () => {
      interface TodoItem { description: string; completed: boolean; }
      interface Dictionary {
        [key: string]: TodoItem;
      }

      const items: Dictionary = {
        '1': { description: 'Take out Trash', completed: false }
      };

      items['3'] = { description: 'Clean Garage', completed: true };
      expect(items['3'].completed).toBe(true);
    });

    it('generic dictionaries', () => {
      interface TodoItem { description: string; completed: boolean; }
      interface Dictionary<T> {
        [key: string]: T;
      }

      const items: Dictionary<TodoItem> = {
        '1': { description: 'Wash Car', completed: true }
      };

      const favoriteNumbers: Dictionary<number> = {
        'first': 108,
        'second': 20,
        'third': 800
      };

      expect(favoriteNumbers['first']).toBe(108);
    });

    it('has duck typing', () => {
      interface Emailable { emailAddress: string; }
      function sendInfo(thing: Emailable) {
        console.log('Sending some info to ', thing.emailAddress);
      }

      sendInfo({ emailAddress: 'joe@aol.com' });

      const customer = {
        name: 'Bill',
        creditLimit: 52000,
        emailAddress: 'bill@compuserve.com'
      };

      sendInfo(customer); // <-- structural typing makes sure the object adheres to the interface even if it does not explicitly implement it
    });
  });

  describe('type assertions and discriminated unions', () => {
    it('has type assertions', () => {
      let thing: any;

      thing = 'Joe';

      const l = (<string>thing).length;
      thing = 12;
      const x = (<string>thing).length;
      console.log(x);

      interface Result { name: string; lengthOfName: number; }
      function makeIt(name: string) {
        return <Result>{
          name: name,
          lengthOfName: name.length
        };
      }

      const result = makeIt('Joe');
    });

    it('has type guards', () => {
      interface Employee {
        name: string;
        salary: number;
      }

      interface Vendor {
        name: string;
        creditLimit: number;
      }

      const bob: Employee = {
        name: 'Robert',
        salary: 120000
      };

      const abcCo: Vendor = {
        name: 'ABC Company',
        creditLimit: 230000
      };

      function printIt(thing: Employee | Vendor) {
        const name = thing.name;
        let type: string, amount: number;
        if (isEmployee(thing)) {
          // I have an employee
          type = 'Employee';
          amount = thing.salary;
        }
        if (isVendor(thing)) {
          type = 'Vendor';
          amount = thing.creditLimit;
        }

        console.log(`${name} is a ${type} and has ${amount}`);

        function isEmployee(obj: any): obj is Employee {
          return obj['salary'] !== undefined;
        }

        function isVendor(obj: any): obj is Vendor {
          return obj['creditLimit'] !== undefined;
        }
      }

      printIt(bob);
      printIt(abcCo);
    });

    it('has discriminated unions', () => {
      interface EmployeeFired {
        type: 'Employee Fired';
        employeeId: number;
        reason: string;
      }

      interface EmployeeHired {
        type: 'Employee Hired';
        department: string;
      }

      interface EmployeeTransferred {
        type: 'Employee Transferred';
        employeeId: number;
        fromDepartment: string;
        toDepartment: string;
      }

      type EmployeeActions = EmployeeFired | EmployeeHired | EmployeeTransferred;

      const processEmployee = (action: EmployeeActions) => {
        switch (action.type) {
          case 'Employee Fired': {
            return 0;
          }
          case 'Employee Hired': {
            return 0;
          }
          case 'Employee Transferred': {
            return 0;
          }
        }
      };
    });
  });
});
