import { State, selectTodoItems, selectUndoneTodos, selectAllTodos, selectCompletedIds, reducer } from './reducers';
import * as actions from './actions';
describe('the reducer', () => {

  describe('the reducer function', () => {
    it('can add an item', () => {
      const initialState = {
        ids: [],
        entities: {},
        completedIds: []
      };

      const action = new actions.AddItemSucceeded({
        id: '99',
        description: 'Tacos',
        completed: true
      });

      const newState = reducer(initialState, action);
      expect(newState).toEqual({
        ids: ['99'],
        entities: {
          '99': { id: '99', description: 'Tacos' }
        },
        completedIds: ['99']
      });
    });
  });

  it('can handle load data succeeded', () => {
    const initialState = {
      ids: [],
      entities: {},
      completedIds: []
    };

    const action = new actions.LoadDataSucceeded([
      { id: '1', description: 'Tacos 1', completed: true },
      { id: '2', description: 'Tacos 2', completed: false }
    ]);

    const newState = reducer(initialState, action);

    expect(newState).toEqual({
      ids: ['1', '2'],
      entities: {
        '1': { id: '1', description: 'Tacos 1' },
        '2': { id: '2', description: 'Tacos 2' }
      },
      completedIds: ['1']
    });

  });

  it('can reset a failed mark complete', () => {
    const initialState = {
      ids: ['1'],
      entities: { '1': { id: '1', description: 'Stuff' } },
      completedIds: ['1']
    };
    const action = new actions.MarkCompleteFailed({ id: '1', description: 'Stuff', completed: true });
    const newState = reducer(initialState, action);
    expect(newState).toEqual({
      ids: ['1'],
      entities: { '1': { id: '1', description: 'Stuff' } },
      completedIds: []
    });
  });

  it('can mark an item as completed', () => {
    // you have an initial state and an action
    const initialState: State = {
      ids: ['1'],
      entities: { '1': { id: '1', description: 'Stuff' } },
      completedIds: []
    };
    const action = new actions.MarkComplete({ id: '1', description: 'Stuff', completed: false });
    // you give to the reducer and get back the new state.
    const newState = reducer(initialState, action);
    // does the new state look correct?
    expect(newState).toEqual({
      ids: ['1'],
      entities: { '1': { id: '1', description: 'Stuff' } },
      completedIds: ['1']
    });
  });
});
describe('selectors', () => {
  const todosState: State = {

    ids: ['1', '2'],
    entities: {
      '1': { id: '1', description: 'Buy Tacos' },
      '2': { id: '2', description: 'Stuff Stockings' }
    },
    completedIds: ['1']
  };

  const state = { todos: todosState };
  it('can get all the todos', () => {
    const result = selectAllTodos(state);
    expect(result).toEqual([
      { id: '1', description: 'Buy Tacos' },
      { id: '2', description: 'Stuff Stockings' }
    ]);
  });

  it('can get the ids of the done todo items', () => {
    const result = selectCompletedIds(state);
    expect(result).toEqual(['1']);
  });

  it('allows me to get a list of all the todo items', () => {
    const result = selectTodoItems(state);

    expect(result).toEqual([
      { id: '1', description: 'Buy Tacos', completed: true },
      { id: '2', description: 'Stuff Stockings', completed: false }
    ]);

  });

  it('can get undone items', () => {
    const result = selectUndoneTodos(state);
    expect(result).toEqual([
      { id: '2', description: 'Stuff Stockings', completed: false }
    ]);
  });
});
