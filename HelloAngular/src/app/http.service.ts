import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  constructor(private _http: HttpClient) {
    this.getTasks();
    // this.getPokemon();
  }

  getTasks() {
    // our http response is an Observable, store it in a variable
    return this._http.get('/tasks');
    // subscribe to the Observable and provide the code we would like to do with our data from the response
    // tempObservable.subscribe(data => console.log("Got our tasks!", data));
  }

  getTask(id: String){
    return this._http.get('/tasks/' + id);
  }

  addTask(newtask){
    return this._http.post('/tasks', newtask);
  }

  updateTask(updateInfo, id:String){
    return this._http.put('/tasks/' +id, updateInfo);
  }

  deleteTask(id:String){
    return this._http.delete('/tasks/' + id);
  }

  

  // getPokemon() {
  //   let bulbasaur = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
  //   bulbasaur.subscribe(data=> console.log(data));
  // }
}