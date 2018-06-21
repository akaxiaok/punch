/**
 * Created by Kimi on 2018/6/21.
 */
import { computed, observable } from "mobx";
import _ from 'lodash';

class Store {
  @observable todos = {
    'read': {
      '2012-01-02': 1,
      '2012-01-03': 2,
      '2012-01-04': 3,
    }
  };

  @computed
  get todosCount() {
    return _.size(this.todos);
  }

  addTodo(title, times) {
    this.todos[title] = {};
  }
}

export default Store;