import { Router } from '@angular/router';
import { Component} from '@angular/core';
import { SearchserviceService } from '../Services/searchservice.service';



@Component({
  selector: 'app-search',
  // providers:[SearchserviceService],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  // error:any

  // Categories:Category[]|undefined
  constructor(private SearchserviceService:SearchserviceService , private _Router:Router ){}
  CategoryList:any = [];
  errorMessage:any;

  ngOnInit(): void {

    this.SearchserviceService.GetAllCategories().subscribe({
      next:(data:any)=>{this.CategoryList = data.data
      console.log(data)

      },
      error:(error:any)=>this.errorMessage = error
    });
  }

  profile()
  {
    this._Router.navigate(['/profile']);
  }


}
