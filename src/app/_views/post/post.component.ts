import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from 'src/app/_services/search.service';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  public ID: number;
  public userData: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private _searchService: SearchService
    ) {

      this.activatedRoute.params.subscribe(_params=>{
     
        this.ID=_params.id
       
      });
     }

  ngOnInit(): void {
    this.filterUser(this.ID)
  }

  filterUser(id: number){
    
    this._searchService.getDetailsById(id).subscribe(_res =>{
      console.log('res', _res)
      this.userData = _res;
    })
  }

}
