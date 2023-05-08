import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryAlbumserviceService {




  // CategoryAlbumUrl='http://localhost:64861/api/Category/allCategories';



  constructor(private http: HttpClient) {}


  GetCategoryAlbum(id:any):Observable<any> {

    return this.http.get<any>("http://localhost:5292/api/CategoryAlbum/CategoryAlbums/"+id).pipe(catchError((err) => {
      return throwError(()=>err.message || "server error");
    }));

  }
}
