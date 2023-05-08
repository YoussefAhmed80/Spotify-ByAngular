import { Component } from '@angular/core';
import { CategoryAlbumserviceService } from '../Services/category-albumservice.service';


@Component({
  selector: 'app-categoryalbums',
  templateUrl: './categoryalbums.component.html',
  styleUrls: ['./categoryalbums.component.scss']
})
export class CategoryalbumsComponent {



  constructor(private CategoryAlbumserviceService:CategoryAlbumserviceService ){}

  CategoryAlbumList:any = [];
  errorMessage:any;

  ngOnInit(): void {
    
    this.CategoryAlbumserviceService.GetCategoryAlbum("1").subscribe({
      next:(data)=>{this.CategoryAlbumList = data.data
      console.log(data)
      
      },
      error:error=>this.errorMessage = error
    });
  }

}
