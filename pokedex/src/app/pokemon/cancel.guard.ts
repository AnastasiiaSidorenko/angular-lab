import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { EditPokemonProfileComponent } from './edit-pokemon-profile/edit-pokemon-profile.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { CancelModalComponent } from './cancel-modal/cancel-modal.component';
import { PokemonsService } from './services/pokemons.service';

@Injectable({
  providedIn: 'root'
})
export class CancelGuard implements CanDeactivate<EditPokemonProfileComponent> {
  constructor(
    private modalService: BsModalService,
    private pokemonsService: PokemonsService) { }

  canDeactivate(
    component: EditPokemonProfileComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (JSON.stringify(component.pokemon) === JSON.stringify(this.pokemonsService.getPokemonById(component.pokemon.id))) {
      return true;
    } else {
      const fakeSubject = new Subject<boolean>();
      const closeDialog = this.modalService.show(CancelModalComponent, { class: 'modal-sm' });
      closeDialog.content.onClose = fakeSubject;
      return closeDialog.content.onClose.asObservable();
    }
  }
}
