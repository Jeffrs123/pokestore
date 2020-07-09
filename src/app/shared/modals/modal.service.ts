import { Injectable } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';

export enum ModalTypes {
  DANGER = 'danger',
  SUCCESS = 'success',
  WARNING = 'warning',
}

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(
    private modalService: BsModalService,
  ) { }


  showConfirm(title: string, message: string, confirmTxt?: string, cancelTxt?: string, modalComponent?: string, dismissTimeOut?: number) {
    // this.showModal(message, ModalTypes.SUCCESS, dismissTimeOut, modalComponent)
    const bsModalRef: BsModalRef = this.modalService.show(ConfirmModalComponent);
    bsModalRef.content.title = title;
    bsModalRef.content.message = message;

    if (confirmTxt) {
      bsModalRef.content.confirmTxt = confirmTxt;
    }

    if (cancelTxt) {
      bsModalRef.content.cancelTxt = cancelTxt;
    }

    if (dismissTimeOut) {
      setTimeout(
        () => bsModalRef.hide(), dismissTimeOut
      );
    }

    return (<ConfirmModalComponent> bsModalRef.content).confirmResult;
  }

  showAlertDanger(message: string, modalComponent?: string, dismissTimeOut?: number) {
    this.showModal(message, ModalTypes.DANGER, dismissTimeOut, modalComponent);
  }

  showAlertSuccess(message: string, modalComponent?: string, dismissTimeOut?: number) {
    this.showModal(message, ModalTypes.SUCCESS, dismissTimeOut, modalComponent);
  }

  showAlertwarning(message: string, modalComponent?: string, dismissTimeOut?: number) {
    this.showModal(message, ModalTypes.WARNING, dismissTimeOut, modalComponent);
  }

  private showModal(message: string, type: ModalTypes, dismissTimeOut: number, modalComponent?: string, ) {


    if (modalComponent === 'alert') {
      // this.showAlert(message, ModalTypes.WARNING, dismissTimeOut, modalComponent)
      const bsModalRef: BsModalRef = this.modalService.show(AlertModalComponent);
      bsModalRef.content.type = type;
      bsModalRef.content.message = message;

      if (dismissTimeOut) {
        setTimeout(
          () => bsModalRef.hide(), dismissTimeOut
        );
      }
    }
  }
}
