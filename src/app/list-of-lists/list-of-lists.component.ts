import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task/task.service';

@Component({
  selector: 'app-list-of-lists',
  templateUrl: './list-of-lists.component.html',
  styleUrls: ['./list-of-lists.component.css']
})
export class ListOfListsComponent implements OnInit {
  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }
 
}
