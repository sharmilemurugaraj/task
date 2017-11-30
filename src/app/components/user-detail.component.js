"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var http_1 = require("@angular/common/http");
var UserDetailComponent = (function () {
    function UserDetailComponent(http, router, activatedRoute) {
        var _this = this;
        this.http = http;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.todosList = [];
        this.todoCompleted = false;
        this.todo = {
            title: '',
            completed: false,
            userId: 1,
            id: 1
        };
        this.activatedRoute.params.subscribe(function (params) {
            _this.currentUserId = params['id'];
        });
        this.getTodoByUserId();
    }
    UserDetailComponent.prototype.getTodoByUserId = function () {
        var _this = this;
        this.http.get('https://jsonplaceholder.typicode.com/todos?userId=' + this.currentUserId).subscribe(function (data) {
            _this.todosList = data;
            console.log('dataaaaaaa', data);
        });
    };
    UserDetailComponent.prototype.deleteList = function (todo) {
        var _this = this;
        this.http.put('https://jsonplaceholder.typicode.com/todos/' + todo.id).subscribe(function (data) {
            var i = _this.todosList.indexOf(todo);
            if (i != -1) {
                _this.todosList.splice(i, 1);
            }
        });
    };
    UserDetailComponent.prototype.updateList = function (data) {
        var _this = this;
        this.http.put('https://jsonplaceholder.typicode.com/todos/' + data.id, data).subscribe(function (res) {
            console.log(res);
            var index = _this.todosList.indexOf(res.id);
            if (index !== -1) {
                _this.todosList[index] = res;
            }
        });
    };
    UserDetailComponent.prototype.create = function () {
        var _this = this;
        this.todo.completed = false;
        this.todo.userId = 1;
        var userId = Math.max.apply(Math, this.todosList);
        this.todo.id = userId + 1;
        this.todo.title = this.title;
        this.http.post('https://jsonplaceholder.typicode.com/todos', this.todo).subscribe(function (res) {
            _this.todosList.push(res);
        });
    };
    return UserDetailComponent;
}());
UserDetailComponent = __decorate([
    core_1.Component({
        selector: 'userdetail',
        templateUrl: './user-detail.component.html'
    }),
    __metadata("design:paramtypes", [http_1.HttpClient, router_1.Router, router_1.ActivatedRoute])
], UserDetailComponent);
exports.UserDetailComponent = UserDetailComponent;
//# sourceMappingURL=user-detail.component.js.map