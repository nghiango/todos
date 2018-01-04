import { Injectable } from '@angular/core';
import { Task } from '../domain/task';

@Injectable()
export class TaskService {
  lastId: number = 0
  tasks: Task[] = [];

  constructor() { }

  findAll(): Task[] {
    return Object.assign([], this.tasks);
  }

  findById(id: number): Task {
    return this.tasks
      .filter(item => item.id === id)
      .pop()
  }

  addTask(name: string):Task{
    this.lastId = ++this.lastId;
    let task = new Task(this.lastId, name)
    this.tasks.push(task)
    return task
  }

  updateTaskById(id: number, values: Object = {}): Task {
    let task = this.findById(id)
    if (!task) {
      return null;
    }
    Object.assign(task, values)
    return task;
  }

  toggleTaskCompleted(task): Task {
    let updateItem = this.updateTaskById(task.id, task)
    return updateItem;
  }

  deleteTodoById(id: number): TaskService {
    this.tasks = this.tasks
      .filter(item => item.id !== id);
    return this;
  }
}
