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
var UserListComponent = (function () {
    function UserListComponent(http, router) {
        this.http = http;
        this.router = router;
        this.usersList = [];
        this.getUserData();
    }
    UserListComponent.prototype.getUserData = function () {
        var _this = this;
        this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(function (data) {
            console.log(data);
            _this.usersList = data;
        });
    };
    UserListComponent.prototype.redirect = function (jsonData) {
        var path = 'detail/' + jsonData.id;
        this.router.navigateByUrl(path);
    };
    return UserListComponent;
}());
UserListComponent = __decorate([
    core_1.Component({
        selector: 'userlist',
        templateUrl: './user-list.component.html'
    }),
    __metadata("design:paramtypes", [http_1.HttpClient, router_1.Router])
], UserListComponent);
exports.UserListComponent = UserListComponent;
//# sourceMappingURL=user-list.component.js.map