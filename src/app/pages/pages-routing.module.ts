import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageContentsComponent } from './page-contents/page-contents.component';


const routes: Routes = [{
  path: '',
  component: PageContentsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
