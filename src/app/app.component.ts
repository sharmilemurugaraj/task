import { Component, } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})

export class AppComponent {
   // isUserAuthorized: boolean = false;

    constructor(private _router: Router) {}

}
