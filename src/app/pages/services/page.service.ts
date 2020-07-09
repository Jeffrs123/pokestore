import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CrudLocalService } from 'src/app/shared/crud/crud-local.service';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PageService extends CrudLocalService<any> {

  constructor(
    protected http: HttpClient
  ) {
    super(http, `${environment.API}pokemon`, `${environment.API}`);
    // super(http, `${environment.POKEAPI}pokemon`, `${environment.POKEAPI}`);
  }
}
