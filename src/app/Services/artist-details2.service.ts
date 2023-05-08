import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtistDetails2Service {

  constructor(private http: HttpClient) {}


  GetArtistById(id :any):Observable<any> { 

    return this.http.get<any>("http://localhost:5292/api/ArtistDetail/getArtistDetails/"+id).pipe(catchError((err) => {
      return throwError(()=>err.message || "server error");
    }));
  
  }
}
