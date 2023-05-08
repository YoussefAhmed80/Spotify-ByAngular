import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CategoryAlbumsongserviceService {




  CategoryAlbumSongUrl='http://localhost:5292/api/Category/allCategories';



  constructor(private http: HttpClient) {}


  GetCategoryAlbumsongs():Observable<any> {

    return this.http.get<any>(this.CategoryAlbumSongUrl).pipe(catchError((err) => {
      return throwError(()=>err.message || "server error");
    }));

  }
}
