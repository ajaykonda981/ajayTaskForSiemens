import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo:'/search',
    pathMatch: 'full'
  },
  {
    path : 'search',
    loadChildren: () => import('./_views/search-module/search-module.module').then(m => m.SearchModuleModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
