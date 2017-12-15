import * as actions from './actions';

describe('the todo actions', () => {
  it('has a load data action', () => {
    const loadData = new actions.LoadTodoData();
    expect(loadData.type).toBe(actions.LOAD_DATA);
  });

  it('has an add item', () => {
    const newItem = 'tacos';
    const addItem = new actions.AddItem(newItem);
    expect(addItem.type).toBe(actions.ADD_ITEM);
    expect(addItem.description).toBe(newItem);
  });
});

describe('the add item action', () => {
  let action: actions.AddItem;
  beforeEach(() => {
    action = new actions.AddItem('tacos');
  });

  it('has the correct type', () => {
    expect(action.type).toBe(actions.ADD_ITEM);
  });

  it('has the correct description', () => {
    expect(action.description).toBe('tacos');
  });
});
