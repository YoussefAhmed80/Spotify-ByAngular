import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';

import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { PlayListSong } from '../Models/play-list-song';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root',
})
export class PlayListsongService {
  httpOption;
  constructor(private httpClient: HttpClient) {
    this.httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // ,Authorization: 'my-auth-token'
      }),
    };
  }

  private handleError(error: HttpErrorResponse) {
    // Generic Error handler
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Write error details in Generic error log

    // Return an observable with a user-facing error message.
    return throwError(
      ()=>new Error('Error occured, please try again')
    )
  }


  getAllPlaysong(): Observable<PlayListSong[]> {

    // return this.genericAPIHandler.getAll('/Products')
    //       .pipe(
    //         map((APIResponseVM: APIResponseVM) => {
    //           return APIResponseVM.data;
    //         })
    //       );

    return this.httpClient.get<PlayListSong[]>(`${environment.APIURL}/CreatePlayList`)
    // .pipe(
    //   retry(2),
    //   catchError(this.handleError)
    // );
  }

  getProductsByCatID(catID: number): Observable<PlayListSong[]> {
    return this.httpClient.get<PlayListSong[]>(`${environment.APIURL}/products?categoryID=${catID}`)
    // .pipe(
    //   retry(2),
    //   catchError(this.handleError)
    // );
  }

  getProductByID(prdID: number): Observable<PlayListSong[]> {
    return this.httpClient.get<PlayListSong[]>(`${environment.APIURL}/products/${prdID}`)
    // .pipe(
    //   retry(2),
    //   catchError(this.handleError)
    // );
  }

  // addProduct(newPrd: IProduct): Observable<IProduct> {
    // return this.httpClient.post<IProduct>(`${environment.APIURL}/products`, JSON.stringify(newPrd), this.httpOption);

    // return this.httpClient
    //   .post<IProduct>(`${environment.APIURL}/products`, JSON.stringify(newPrd), this.httpOption)
    //   .pipe(
    //     retry(2),
    //     catchError((err: HttpErrorResponse) => {
    //       console.log(err.status, err.error);
    //       return throwError(() => new Error(err.error));
    //     })
    //   );

    // return this.httpClient
    // .post<PlayListSong>(`${environment.APIURL}/products`, JSON.stringify(newPrd), this.httpOption)
    // .pipe(
    //   retry(2),
    //   catchError(this.handleError)
    // );

  }

  // updateProduct(prdID: number, UpdatedPrd: PlayListSong) {

  // }

  // deleteProduct(prdID: number) {

  // }

// }
