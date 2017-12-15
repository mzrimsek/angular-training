import { TodoListPage } from './todos.po';

describe('the todo page', () => {
  let page: TodoListPage;
  beforeEach(() => {
    page = new TodoListPage();
  })

  it('can add something', () => {
    page.navigateTo();
    page.setItem('MOAR TACOS!');
    page.clickTheAddButton();
    expect(page.getTheNewItem()).toBe('MOAR TACOS!');
  });
});
