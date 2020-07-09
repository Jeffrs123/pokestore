import { tap, catchError } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { flyInOutY, expand } from '../../animations/app.animations';
import { Observable, Subject, EMPTY } from 'rxjs';
import { PageService } from '../services/page.service';
import { ActivatedRoute } from '@angular/router';
import { ModalService } from 'src/app/shared/modals/modal.service';
import { HttpHeaderResponse } from '@angular/common/http';

@Component({
  selector: 'app-page-contents',
  templateUrl: './page-contents.component.html',
  styleUrls: ['./page-contents.component.scss'],
  animations: [
    flyInOutY(),
    expand()
  ],
  host: {
    '[@expand]': 'true',
    style: 'display: block;'
  },
})

export class PageContentsComponent implements OnInit {

  error$ = new Subject<boolean>();
  pageContents$: Observable<any[]>;

  path: string;
  isCarrinho = false;

  constructor(
    private service: PageService,
    private route: ActivatedRoute,
    private alertService: ModalService
    ) { }

  ngOnInit(): void {
    this.getUrlPath();
  }

  getUrlPath() {

    this.path = this.route.snapshot.parent.url[0].path;
    // this.getContents(this.path);
    if (this.path === 'carrinho') {
      this.isCarrinho = true;
    }
    else if (this.path !== 'contato') {
      this.isCarrinho = false,
      // this.getContents(this.path);
      this.getContents('pokemon');
    }
  }

  getContents(path: string) {
    this.pageContents$ = this.service
    .list(path)
    .pipe(
      tap(v => {
        // console.log("Contents: ", v);
        if (v.length > 0) {
          console.log('v.length > 0 :', v.length);
          console.log('tem conteúdo');
          // this.pageContents$ = null
          // this.error$.next(true);
          // this.handleError();
          // return EMPTY;
        } else if (v.length <= 0) {
          console.log('v.length <= 0 :', v.length);
          this.pageContents$ = null;
          this.error$.next(true);
          this.handleError();
          return EMPTY;
        }
      }),
      catchError(error => {
        console.error('Algum erro aconteceu: ', error);
        console.log('HttpHeaderResponse: ', HttpHeaderResponse.toString());
        this.error$.next(true);
        this.handleError();
        return EMPTY;
      })
    )
  ;
  }

  handleError() {
    this.alertService.showAlertDanger(
      `Erro ao tentar carregar a Página: ${this.path}`,
      'alert', 2000
    );
  }

  onRefresh() {
    this.error$.next(false);
    this.getUrlPath();
  }


}
