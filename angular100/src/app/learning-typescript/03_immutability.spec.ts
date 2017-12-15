import { tassign } from 'tassign';

describe('immutability', () => {
  describe('with arrays', () => {
    it('adding an element to an array', () => {
      const numbers = [1, 2, 3, 4];
      const newNumbers = [0, ...numbers];
      expect(newNumbers).toEqual([0, 1, 2, 3, 4]);
      expect(numbers).toEqual([1, 2, 3, 4]);

      const newNumbers2 = [...numbers, 5];
      expect(newNumbers2).toEqual([1, 2, 3, 4, 5]);
      expect(numbers).toEqual([1, 2, 3, 4]);
    });

    it('removing an item from an array', () => {
      const numbers = [1, 2, 3, 4];
      const newNumbers = numbers.filter(n => n !== 3);
      expect(newNumbers).toEqual([1, 2, 4]);
      expect(numbers).toEqual([1, 2, 3, 4]);
    });
  });

  describe('with objects', () => {
    it('adding a new property to an object', () => {
      const movie: any = { title: 'Star Wars', director: 'Lucas' };
      const updatedMovie = {
        ...movie,
        yearReleased: 1977
      };

      expect(updatedMovie).toEqual({
        title: 'Star Wars',
        director: 'Lucas',
        yearReleased: 1977
      });
      expect(movie.yearReleased).toBeUndefined();
      expect(movie).toEqual({
        title: 'Star Wars',
        director: 'Lucas'
      });
    });

    it('transform an objects property', () => {
      const movie: any = {
        title: 'Star Wars',
        director: 'Lucas',
        yearReleased: 1976
      };
      const updatedMovie = Object.assign({}, movie, { yearReleased: 1977 });

      expect(updatedMovie).toEqual({
        title: 'Star Wars',
        director: 'Lucas',
        yearReleased: 1977
      });
      expect(movie).toEqual({
        title: 'Star Wars',
        director: 'Lucas',
        yearReleased: 1976
      });
    });

    it('using tassign', () => {
      const movie = {
        title: 'Star Wars',
        director: 'Lucas',
        yearReleased: 1976
      };
      const updatedMovie = tassign(movie, { yearReleased: 1977 }); // <-- type safe assign

      expect(updatedMovie).toEqual({
        title: 'Star Wars',
        director: 'Lucas',
        yearReleased: 1977
      });
      expect(movie).toEqual({
        title: 'Star Wars',
        director: 'Lucas',
        yearReleased: 1976
      });
    });
  });
});

describe('An example of using immutable stuff and selecting data', () => {
  it('doing it', () => {
    interface Dictionary<T> {
      [key: string]: T;
    }

    interface ShoppingItem {
      id: string;
      description: string;
    }

    interface State {
      allIds: string[];
      entities: Dictionary<ShoppingItem>;
    }

    const initialState: State = {
      allIds: ['99', '203'],
      entities: {
        '99': { id: '99', description: 'Eggs' },
        '203': { id: '203', description: 'Peanut Butter' }
      }
    };

    // expect(initialState.entities['203'].description).toBe('Peanut Butter');
    const arrayOfItems = initialState.allIds.map(id => initialState.entities[id]);
    expect(arrayOfItems).toEqual([
      { id: '99', description: 'Eggs' },
      { id: '203', description: 'Peanut Butter' }
    ]);

    interface Action {
      type: string;
    }

    let maxId = 300;

    class AddItem implements Action { // Action creator
      readonly type = 'ADD_ITEM';
      id: string;

      constructor(public description: string) { // public parameter adds the field to the object and sets it to the passed value
        this.id = (maxId++).toString();
      }
    }

    const addNewItem = new AddItem('Taco Shells');
    expect(addNewItem.id).toBe('300');
    expect(addNewItem.description).toBe('Taco Shells');
    expect(addNewItem.type).toBe('ADD_ITEM');

    type AllActions = AddItem;

    const reducer = (state: State = initialState, action: AllActions): State => {
      switch (action.type) {
        case 'ADD_ITEM': {
          const newItem: ShoppingItem = { id: action.id, description: action.description };
          return {
            allIds: [action.id, ...state.allIds],
            entities: { [action.id]: newItem, ...state.entities } // tassign(state.entities, { [action.id]: newItem })
          };
        }
        default: {
          return state;
        }
      }
    };

    const newState = reducer(undefined, addNewItem);
    expect(newState).toEqual({
      allIds: ['300', '99', '203'],
      entities: {
        '99': { id: '99', description: 'Eggs' },
        '203': { id: '203', description: 'Peanut Butter' },
        '300': { id: '300', description: 'Taco Shells' }
      }
    });

    const arrayOfItems2 = newState.allIds.map(id => initialState.entities[id]);
    console.log(arrayOfItems2);
  });
});
