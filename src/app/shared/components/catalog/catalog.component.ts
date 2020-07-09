import { Component, OnInit, Input } from '@angular/core';
import { ModalService } from '../../modals/modal.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  @Input() content: any;
  url = '';
  pokeId = '';
  pokeImgUrl = '';

  constructor(
    private alertService: ModalService
  ) { }

  ngOnInit(): void {
    this.pegarId();
  }
  pegarId() {
    this.url = this.content.url;
    const n = this.url.length - 1;
    this.pokeId = this.url.substring(34, n);
    this.setPokeImgUrl();
    return this.pokeId;
  }
  setPokeImgUrl() {
    return this.pokeImgUrl = `https://pokeres.bastionbot.org/images/pokemon/${this.pokeId}.png`;
  }

  buyPoke() {
    console.log(`adicionar pokemon de id: ${this.pokeId} ao carrinho de compras`);
    this.alertService.showAlertSuccess(
      `${this.content.name.toUpperCase()} adicionado ao Carrinho`,
      'alert', 400
    );
  }
}
