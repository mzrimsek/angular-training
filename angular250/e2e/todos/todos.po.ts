import { browser, by, element } from 'protractor';

export class TodoListPage {
  navigateTo() {
    browser.get('/todos');
  }

  setItem(value: string) {
    const el = element(by.css('[data-todo-item-input]'));
    el.sendKeys(value);
  }

  clickTheAddButton() {
    const el = element(by.css('[data-todo-item-button]'));
    el.click();
  }

  getTheNewItem() {
    return element(by.css('[data-todo-item="2"]')).getText();
  }
}
