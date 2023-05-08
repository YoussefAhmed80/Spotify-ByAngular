import { Component } from '@angular/core';
import { CategoryAlbumsongserviceService } from '../Services/category-albumsongservice.service';

@Component({
  selector: 'app-categoryalbumsongs',
  templateUrl: './categoryalbumsongs.component.html',
  styleUrls: ['./categoryalbumsongs.component.scss']
})
export class CategoryalbumsongsComponent {

  constructor(private CategoryAlbumsongserviceService:CategoryAlbumsongserviceService, ){}

  CategoryAlbumSongList:any = [];
  errorMessage:any;

  ngOnInit(): void {
    
    this.CategoryAlbumsongserviceService.GetCategoryAlbumsongs().subscribe({
      next:(data)=>{this.CategoryAlbumSongList = data
      console.log(this.CategoryAlbumSongList);
      
      },
      error:error=>this.errorMessage = error
    });
  }

}
