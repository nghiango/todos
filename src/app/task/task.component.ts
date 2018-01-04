import { Component, OnInit } from '@angular/core';
import { Task } from '../domain/task';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks:Task[] = []
  task:Task
  finished = 0
  unfinished = 0

  editingName = ''
  editingId = 0
  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.initTasks()
  }
  initTasks(){
    this.taskService.findAll().subscribe(tasks => this.tasks = tasks)
  }
  addTask(name:string) {
    if (name.trim() == "") {
      alert("Please enter your name")
    } else {
      this.taskService.addTask(name).subscribe(task => this.tasks.push(task))
      this.unfinished++
    }
  }

  turnOnTaskEditing(task:Task){
    if(this.editingName != ''){
      alert("Please update your editing!")
    }else{
      this.editingName = task.name
      this.editingId = task.id
    }
  }
  
  turnOffTaskEditing(){
    this.editingName = ''
    this.editingId = 0
  }

  updateTask(task: Task){
    task.name = this.editingName
    if (this.editingName == undefined || this.editingName.trim() == "") {
      alert("Please enter your work")
    } else {
      this.taskService.updateTaskById(task.id, task)
      this.turnOffTaskEditing()
    }
  }

  toggleTaskCompleted(task: Task) {
    task.completed = !task.completed
    this.taskService.toggleTaskCompleted(task)
    if(task.completed) {
      this.finished++
      this.unfinished--
    }
    else{
      this.unfinished++
      this.finished--
    }
  }

  deleteTask(localTask: Task) {
    this.taskService.deleteTodoById(localTask.id).subscribe()
    this.tasks = this.tasks
      .filter(item => item.id !== localTask.id)
  }
}
