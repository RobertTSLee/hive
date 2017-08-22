import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiFacadeService } from '../../services/api-facade.service';

import { RESOURCE } from '../../typings/resource';

@Component({
  selector: 'item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  resources;
  constructor(private apiFacade: ApiFacadeService) {
   }

  ngOnInit() {

    this.resources = this.apiFacade.getAllResources()
    .subscribe(res => {
        debugger;
      console.log(res)
    });
  }

}
