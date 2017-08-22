import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

import { RESOURCE } from '../typings/resource';

@Injectable()
export class ApiFacadeService {

  httpService;
  constructor(httpService: Http) { }

  getAllResources(): Observable<RESOURCE[]> {
    return this.httpService.get('C:\Users\RobertTSLee\Desktop\projects\hive\src\app\mock-data\resources.json')
      .map(res => res.json());
  }

}
