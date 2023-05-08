import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs/internal/observable/throwError';
import { Songs } from '../Models/song';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { SongDTO } from '../Models/song-dto';

import { PlayListSong } from '../Models/play-list-song';
import { LikedSongDTO } from '../Models/liked-song-dto';

@Injectable({
  providedIn: 'root',
})
export class SongserviceService {
  httpOption: { headers: HttpHeaders };

  constructor(private httpClient: HttpClient) {
    this.httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        //,Authorization: 'my-auth-token'
      }),
    };
  }
  // private handleError(error: HttpErrorResponse) {
  //   if (error.status === 0) {
  //     console.error('An error occurred:', error.error);
  //   } else {
  //     console.error(
  //       `Backend returned code ${error.status}, body was: `,
  //       error.error
  //     );
  //   }

  //   return throwError(() => new Error('Error occured, please try again'));
  // }

  getAllsong(): Observable<SongDTO[]> {
    return this.httpClient.get<SongDTO[]>(`${environment.APIURL}/api/CreatePlayList/getallsongbyartist`);
  }
  getsongbyId(songID: number): Observable<SongDTO>{

    return this.httpClient.get<SongDTO>(`${environment.APIURL}/api/Song/GetSongById/${songID}`)

  }





  AddSongtoplaylistsong(play: PlayListSong): Observable<PlayListSong> {

    return this.httpClient.post<PlayListSong>(`${environment.APIURL}/api/CreatePlayList/playlissong`,play);
  }


  addliketosong(like: LikedSongDTO): Observable<LikedSongDTO> {

    return this.httpClient.post<LikedSongDTO>(`${environment.APIURL}/api/Likes`,like);
  }

}




