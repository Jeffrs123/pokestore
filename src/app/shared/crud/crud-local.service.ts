import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IBaseService } from './interface';

import { tap, delay, take, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
export class CrudLocalService<T> implements IBaseService<T> {
  // valores$: T[];

  constructor(
    protected http: HttpClient,
    private API_URL,
    private API_URL_BASE
  ) { }


  list(path?: string): Observable<T[]> {
    // throw new Error('Method not implemented.');
    if (!path) {
      return this.listBasic( );
      // (
      //   console.log('else if has NOT path its called', path), this.listBasic()
      // );
      // console.log('else called')
    } else if (path) {
      return this.listWithPath(path);
      // (
      //   console.log('if has path its  called', path), this.listWithPath(path)
      // );
      // console.log('if called')
    }
  }

  private listBasic() {
    // const continuePath: '?offset=20&limit=20';
    return this.http.get<T[]>(`${this.API_URL}?offset=0&limit=20`).pipe(
      // map(cursost => this.cursost$ = cursost),

      delay(2000),
      // tap(console.log),
      tap(v => console.log('!path Called listBasic: ', v))
    );
  }

  private listWithPath(path: string) {
    return this.http.get<T[]>(`${this.API_URL_BASE}${path}?offset=0&limit=20`).pipe(
      // map(v => this.valores$ = v),
      delay(2000),
      // tap(console.log),
      tap(v => console.log('path Called listWithPath: ', v))
    );
  }


  get(id: string, path?: string): Observable<T> {
    throw new Error('Method not implemented.');
  }
}
