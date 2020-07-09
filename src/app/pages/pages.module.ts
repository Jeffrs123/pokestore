import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PageContentsComponent } from './page-contents/page-contents.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PageContentsComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
