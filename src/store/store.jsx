/**
 * Created by Kimi on 2018/6/21.
 */
import { action, computed, observable, remove } from "mobx";
import Todo from './Todo';

function loadTodos() {
  return JSON.parse(localStorage.getItem('todos')) || {};
}

function needTodoExist(needExist) {
  return function (target, name, desc) {
    const oldValue = desc.value;
    desc.value = function (...arg) {
      const todoName = arg[0];
      const todo = this.todos[todoName];
      const needRun = (todo && needExist) || (!todo && !needExist);
      if (needRun) {
        oldValue.apply(this, arg);
        localStorage.setItem('todos', JSON.stringify(this.todos));
        return true;
      } else {
        return false;
      }
    };
    return desc;
  }
}

function saveTodos(target, name, desc) {
  const oldValue = desc.value;
  desc.value = function (...arg) {
    oldValue.apply(this, arg);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  };
  return desc;
}

class Store {

  @observable todos = loadTodos();


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
  @needTodoExist(false)
  @saveTodos
  @action
  addTodo(name, times) {
    this.todos[name] = observable.box(new Todo(name, times));
  }


  @needTodoExist(false)
  @saveTodos
  @action
  addRandom() {
    const random = _.random(1, 10, 2);
    this.todos[random] = observable.box(new Todo(random, _.random(1, 10)));
  }

  @needTodoExist(true)
  @saveTodos
  @action
  deleteTodo(name) {
    remove(this.todos, name);
  }

  @needTodoExist(true)
  @saveTodos
  @action
  doToday(name, times) {
    this.todos[name].history[_.today()] = times;
  }
}

export default Store;