/**
 * Created by Kimi on 2018/6/21.
 */
import { computed, observable } from "mobx";
import Todo from './Todo';


function loadTodos() {
  return JSON.parse(localStorage.getItem('todos')) || {};
}

function saveTodos(target, name, desc) {
  const oldValue = desc.value;
  desc.value = function (...arg) {
    const ret = oldValue.apply(this, arg);
    localStorage.setItem('todos', JSON.stringify(this.todos));
    return ret;
  };
  return desc;
}

class Store {

  @observable todos = {};

  constructor() {
    this.todos = loadTodos();
  }

  @computed
  get todosCount() {
    return _.size(this.todos);
  }

  /**
   *
   * @param name
   * @param times
   * @returns {boolean} if exist return false
   */
  @saveTodos
  addTodo(name, times) {
    if (this.todos[name]) {
      return false;
    } else {
      this.todos[name] = new Todo(name, times);
      return true;
    }
  }
}

export default Store;