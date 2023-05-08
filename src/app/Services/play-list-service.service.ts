import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';


import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayListServiceService {
  // PlaylistUrl='http://localhost:64861/api/Library/allPlayLists';






  constructor(private http: HttpClient) {}


  getplaylists(id:any):Observable<any> {

    return this.http.get<any>("http://localhost:5292/api/Library/allPlayLists/"+id).pipe(catchError((err) => {
      return throwError(()=>err.message || "server error");
    }));

  }



}

