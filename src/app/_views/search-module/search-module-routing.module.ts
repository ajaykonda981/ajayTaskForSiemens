import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { PostComponent } from '../post/post.component';


const routes: Routes = [
  {
    path: '',
    component: SearchComponent
  },
  {
    path: 'posts/:id',
    component: PostComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchModuleRoutingModule { }
