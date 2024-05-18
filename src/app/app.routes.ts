import { Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailComponent } from './detail/detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditComponent } from './edit/edit.component';

export const routes: Routes = [
    {
        path: 'list',
        component: ListComponent,
        title: 'List',
    },
    {
        path: 'create',
        component: CreateComponent,
        title: 'Create',
    },
    {
        path: 'detail/:tenParam',
        component: DetailComponent,
        title: 'Detail',
    },
    {
        path: 'admin',
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent,
            },
            {
                path: 'projects',
                children: [
                    {
                        path: 'list',
                        component: ListComponent,
                    },
                    {
                        path: 'create',
                        component: CreateComponent,
                    },
                    {
                        path: 'edit',
                        component: EditComponent,
                    }
                ]
            }
        ]
    },
    {
        path: '**',
        component: NotFoundComponent,
    },
];
