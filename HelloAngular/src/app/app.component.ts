import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = "Restful Tasks API";
  tasks;
  thirdtask;
  showtask;
  constructor(private _httpService: HttpService) { 
    // this.thirdtask = {title: ""} //when you dont want to use the *ngif
  }


  ngOnInit() {
  }

  onButtonClicked():void{
    this.getAllTasks();
  }

  onButtonClickParam(id: string): void{
    this.getOneTask(id);
  }  

  getAllTasks() {
    let tasks = this._httpService.getTasks();
    tasks.subscribe(data => {
      console.log(data)
      this.tasks = data;
      // this.thirdtask = data[2];
    })
  }

  getOneTask(index: string) {
    let tasks = this._httpService.getTask(index);
    tasks.subscribe(data => {
      console.log("oneTask")
      console.log(data)
      this.showtask = data;
    })
  }

  // getThirdTask(index: number){
  //   let tasks = this._httpService.getTasks();
  //   tasks.sub
  // }

}

