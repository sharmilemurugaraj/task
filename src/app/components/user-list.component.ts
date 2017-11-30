import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'userlist',
  templateUrl: './user-list.component.html'
})
export class UserListComponent {
	usersList: Array<any> = [];
	constructor(private http: HttpClient, private router:Router) {
		this.getUserData();
	}
	getUserData() {
		this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((data:any) => {
      console.log(data);
		this.usersList = data;
	});
	}
	redirect(jsonData:any) {
		let path = 'detail/'+jsonData.id;
		this.router.navigateByUrl(path);
	}
}
