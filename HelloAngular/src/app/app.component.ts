import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  newTask: any;
  tasks;
  editTask;
  deleteTask;
  constructor(private _httpService: HttpService) { 
    // this.thirdtask = {title: ""} //when you dont want to use the *ngif
  }


  ngOnInit() {
    this.newTask = {title: "", description: ""};
    this.getAllTasks();
  }

  onSubmit(){
    this.newTask ={'title': this.newTask.title, 'description': this.newTask.description};
    let nTask = this._httpService.addTask(this.newTask);
    nTask.subscribe(data=>{
      console.log("submited form")
      console.log(data);
      this.getAllTasks();
    })
    this.newTask = {title: "", description: ""}
  }

  onEditButtonClick(id: string){
    var edit = this._httpService.getTask(id);
    edit.subscribe(data=>{
      console.log(data);
      this.editTask = data;
    })
  }

  onTaskUpdate(id: string){
    this.editTask ={'title': this.editTask.title, 'description': this.editTask.description};
    let eTask = this._httpService.updateTask(this.editTask, id);
    eTask.subscribe(data=>{
      console.log("submited form")
      console.log(data);
      this.getAllTasks();
    })
    this.newTask = {title: "", description: ""}
  }

  onDeleteButtonClick(id: string){
    let deleteTask = this._httpService.deleteTask(id);
    deleteTask.subscribe(data=>{
      console.log(data);
      this.getAllTasks();
    })
  }

  getAllTasks() {
    let tasks = this._httpService.getTasks();
    tasks.subscribe(data => {
      console.log(data)
      this.tasks = data;
    })
  }
}

