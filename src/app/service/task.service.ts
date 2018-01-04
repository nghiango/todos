import { Injectable } from '@angular/core';
import { Task } from '../domain/task';
import { HttpHeaders , HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const URL = "http://localhost:3000/tasks"
@Injectable()
export class TaskService {
  lastId: number = 0
  tasks: Task[] = [];
  
  constructor(private http: HttpClient) { }

  findAll(): Observable<Task[]> {
    return this.http.get<Task[]>(URL);
  }

  findById(id: number): Task {
    return this.tasks
      .filter(item => item.id === id)
      .pop()
  }

  addTask(name: string): Observable<Task>{
    this.lastId = ++this.lastId;
    let task = { name:name, completed:false}
    return this.http.post<Task>(URL, task,httpOptions)
  }

  updateTaskById(id: number, values: Object = {}): Task {
    this.http.put(`URL/${id}`, values, httpOptions)
    let task = this.findById(id)
    return task;
  }

  toggleTaskCompleted(task): Task {
    let updateItem = this.updateTaskById(task.id, task)
    return updateItem;
  }

  deleteTodoById(id: number) {
    return this.http.delete(`URL/${id}`, httpOptions)
  }
}
