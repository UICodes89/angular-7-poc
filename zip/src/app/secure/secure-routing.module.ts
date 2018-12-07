import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomePageComponent} from "./home-page/home-page.component";
import {DetailComponent} from "./sub-category/detail/detail.component"


const routes: Routes = [
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomePageComponent,
        data: {title: 'Home'}
    },
    {
        path: 'sub-category/:id',
        component: DetailComponent,
        data: {title: 'sub-category'}
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class SecureRoutingModule { }
