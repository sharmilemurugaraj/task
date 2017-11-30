import { Component } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'userdetail',
  templateUrl: './user-detail.component.html'
})
export class UserDetailComponent {
	currentUserId:string;
  title:'';
	todo:{};
	todosList: Array<any> = [];
	todoCompleted:boolean = false;
	constructor(private http: HttpClient, private router:Router,private activatedRoute: ActivatedRoute) {
    this.todo = {
      title:'',
      completed:false,
      userId: 1,
      id: 1
    };
	  this.activatedRoute.params.subscribe(params => {
	  this.currentUserId = params['id']});
	  this.getTodoByUserId();
	}
	getTodoByUserId() {
		this.http.get('https://jsonplaceholder.typicode.com/todos?userId='+this.currentUserId).subscribe((data:any) => {
			this.todosList = data;
      console.log('dataaaaaaa',data);
		})
	}
  deleteList(todo:any) {
    this.http.put('https://jsonplaceholder.typicode.com/todos/'+todo.id).subscribe((data:any) => {
      var i = this.todosList.indexOf(todo);
      if(i != -1) {
        this.todosList.splice(i, 1);
      }
    })
  }
  updateList(data:any) {
    this.http.put('https://jsonplaceholder.typicode.com/todos/' + data.id,data).subscribe((res:any) => {
      console.log(res);
      var index = this.todosList.indexOf(res.id);
      if (index !== -1) {
        this.todosList[index] = res;
      }
    })
  }

  create() {
    this.todo.completed = false;
    this.todo.userId = 1;
    let userId = Math.max.apply( Math, this.todosList);
    this.todo.id = userId + 1;
    this.todo.title = this.title;
    this.http.post('https://jsonplaceholder.typicode.com/todos',this.todo).subscribe((res:any) => {
      this.todosList.push(res);
    })
  }
}
