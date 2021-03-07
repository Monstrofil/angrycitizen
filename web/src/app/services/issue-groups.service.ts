import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

export class IssueType {
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class IssueGroupsService {

  constructor() { }

  getIssueTypes(): Observable<any> {

    const response = [
      { name: 'Пошкодження дорожнього полотна' } as IssueType
    ];

    const obs = new Observable((subscriber) => {
        setTimeout(() => {
            subscriber.next(response);
            subscriber.complete();
        }, 500);
    });
    return obs;
  }
}
