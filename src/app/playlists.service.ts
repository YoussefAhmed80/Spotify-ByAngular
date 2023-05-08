import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {IPlayList} from '../app/iplay-list';



@Injectable({
  providedIn: 'root'
})
export class PlaylistsService {

  constructor(private http: HttpClient) {}


//   getplaylists(id:any):Observable<IPlayList[]> { 

//     return this.http.get<IPlayList[]>("http://localhost:64861/api/Library/allPlayLists"+id).pipe(catchError((err) => {
//       return throwError(()=>err.message || "server error");
//     }));
  
//   }
}
