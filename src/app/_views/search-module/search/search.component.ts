import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/_services/search.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public form: FormGroup
  private _userResult: any;
  constructor
    (
      public fb: FormBuilder,
      private _search: SearchService,
      private router: Router
    ) { }

  ngOnInit(): void {
    this.buildFilter();
  }

  filter() {
    let httpParams = new HttpParams();
    if (this.form.value.searchUserName != "" && this.form.value.searchUserName != null) {
      httpParams = httpParams.set('name', this.form.value.searchUserName);
      this.fetchResults(httpParams)
    }
    else {
      this.opensweetalertdng('Please Enter User Name')
    }
    
    
  }

  fetchResults(criteria: HttpParams = new HttpParams()) {
    this._search.search(criteria).subscribe(_resultSet => {
      this._userResult = _resultSet;
      console.log('user result ', this._userResult)
      if(this._userResult.length === 0) {
        this.opensweetalertdng('Oops... No Records Found!');
      }
      else if (this._userResult.length>0) {
        this.router.navigate(['search/posts', this._userResult[0].id]);
      }
    });

  }

  buildFilter() {
    this.form = this.fb.group({
      searchUserName: [''],
    })
  }

  opensweetalertdng(msg: string)
  {
    console.log('working in opensweet')
   //Swal.fire('Oops...', 'No Records Found!')
   Swal.fire(msg)
  }

}
