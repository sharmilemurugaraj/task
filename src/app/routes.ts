import { RouterModule } from '@angular/router';

import { UserListComponent } from './components/user-list.component';
import { UserDetailComponent } from './components/user-detail.component';
export const routing = RouterModule.forRoot([
    {
        path: '',
        component: UserListComponent
    },
	{
		path: 'detail/:id',
		component: UserDetailComponent
	}]);
