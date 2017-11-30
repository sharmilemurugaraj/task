"use strict";
var router_1 = require("@angular/router");
var user_list_component_1 = require("./components/user-list.component");
var user_detail_component_1 = require("./components/user-detail.component");
exports.routing = router_1.RouterModule.forRoot([
    {
        path: '',
        component: user_list_component_1.UserListComponent
    },
    {
        path: 'detail/:id',
        component: user_detail_component_1.UserDetailComponent
    }
]);
//# sourceMappingURL=routes.js.map