import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtistserviceService {
  // ArtistUrl='http://localhost:5292/api/Home/allArtists';


  constructor(private http: HttpClient) {}


  GetAllArtists(id :any):Observable<any> {

    return this.http.get<any>("http://localhost:5292/api/ArtistDetail/getallsongbyartist/"+id).pipe(catchError((err) => {
      return throwError(()=>err.message || "server error");
    }));

  }
}
