import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
/**
 * Custom Created Components
 */
import {OopsComponent} from './public/other/oops/oops.component';
import {SimpleWithMenuLayoutComponent   } from './core/layouts/simple-with-menu-layout-component/simple-with-menu-layout-component';
import {SimpleLayoutComponent} from './core/layouts/simple-layout-component/simple-layout.component';

const routes: Routes = [
    {
        path: '',
        component: OopsComponent,
        data: { title: 'Surprise! We couldn\'t find that page.' }
    },
    {
      path: 'group',
      component: SimpleLayoutComponent,
      children: [
          {
              path: 'lifemart',
              loadChildren: './public/public.module#PublicModule',
              data: { title: 'LifeMart' },
          },
      ]
  },{
      path: 'group',
      component:SimpleWithMenuLayoutComponent ,
      children: [
          {
              path: 'lifemart',
              loadChildren: './secure/secure.module#SecureModule',
              data: { title: 'LifeMart' },
          },
      ]
  },
    {
        path: '404',
        component: OopsComponent,
        data: { title: 'Surprise! We couldn\'t find that page.' }
    },
    {
        path: '**',
        component: OopsComponent,
        data: { title: 'Surprise! We couldn\'t find that page.' }
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
