// import { Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createSelector } from '@ngrx/store';
import { TodoItem as ModelTodoItem } from './models';
import { createFeatureSelector } from '@ngrx/store';
import * as actions from './actions';
import { tassign } from 'tassign';
export interface TodoItem {
  id: string;
  description: string;
}
export interface State extends EntityState<TodoItem> {
  completedIds: string[];
}


const adapter: EntityAdapter<TodoItem> = createEntityAdapter<TodoItem>();
// const initialState: State = adapter.getInitialState({
//   completedIds: []
// }
// );
const initialState: State = {
  ids: ['1', '2'],
  entities: {
    '1': { id: '1', description: 'Buy Tacos' },
    '2': { id: '2', description: 'Stuff Stockings' }
  },
  completedIds: ['1']
};

function todoItemMap(item: ModelTodoItem): TodoItem {
  return <TodoItem>{
    id: item.id,
    description: item.description
  };
}

export function reducer(state: State = initialState, action: actions.All): State {
  switch (action.type) {
    case actions.LOAD_DATA_SUCCEEDED: {
      const tempState = adapter.addAll(action.items.map(todoItemMap), state);
      return tassign(tempState, {
        completedIds: action.items.filter(i => i.completed).map(i => i.id)
      });
    }
    case actions.ADD_ITEM_SUCCEDED: {
      const tempState = adapter.addOne(todoItemMap(action.item), state);
      return tassign(tempState, {
        completedIds: [...state.completedIds, action.item.id]
      });
    }
    case actions.MARK_COMPLETE_FAILED: {
      return tassign(state, {
        completedIds:
          state.completedIds.filter(i => i !== action.item.id)
      });
    }
    case actions.MARK_COMPLETE: {
      return tassign(state, { completedIds: [action.item.id, ...state.completedIds] });
    }
    default: {
      return state;
    }
  }
}

export const selectTodos = createFeatureSelector<State>('todos');
export const { selectAll: selectAllTodos } = adapter.getSelectors(selectTodos);
// export const selectCompletedIds = (state: State) => state.completedIds;
export const selectCompletedIds = createSelector(selectTodos, t => t.completedIds);

export const selectTodoItems = createSelector(
  selectAllTodos,
  selectCompletedIds,
  (all, completed) => {
    return all.map(a => {
      return <ModelTodoItem>{
        id: a.id,
        description: a.description,
        completed: completed.some(id => id === a.id)
      };
    });
  });


export const selectUndoneTodos = createSelector(
  selectTodoItems,
  (items) => items.filter(item => item.completed === false)
);
