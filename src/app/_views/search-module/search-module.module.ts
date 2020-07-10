import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchModuleRoutingModule } from './search-module-routing.module';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchService } from 'src/app/_services/search.service';


@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    SearchModuleRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [
    SearchService
  ]
})
export class SearchModuleModule { }
