import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ResumeShopComponent } from './components/resume-shop/resume-shop.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { AlertModalComponent } from './modals/alert-modal/alert-modal.component';
import { ConfirmModalComponent } from './modals/confirm-modal/confirm-modal.component';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    ResumeShopComponent,
    CatalogComponent,
    AlertModalComponent,
    ConfirmModalComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  entryComponents: [
    AlertModalComponent,
    ConfirmModalComponent
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    ResumeShopComponent,
    CatalogComponent,
    AlertModalComponent,
    ConfirmModalComponent
  ]
})
export class SharedModule { }
