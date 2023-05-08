import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LikesserviceService {

  // LikesUrl='http://localhost:5292/api/Library/allLikes';



  constructor(private http: HttpClient) {}

  getLikess(id:any):Observable<any> {

    return this.http.get<any[]>("http://localhost:5292/api/Library/allLikes/"+id).pipe(catchError((err) => {
      return throwError(()=>err.message || "server error");
    }));

  }
}
