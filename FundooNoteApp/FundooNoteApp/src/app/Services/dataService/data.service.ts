import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  //for search operation
  private messagesource = new BehaviorSubject([]);
  incomingData = this.messagesource.asObservable();

  outgoingData(message: any) {
    console.log(message)
    this.messagesource.next(message)
  };

  // for changing layout from list to grid and vice-versa
  private gridToList = new BehaviorSubject([]);
  changeLayout = this.gridToList.asObservable();

  outgoingMessage(data: any) {
    console.log(data)
    this.gridToList.next(data)
  }
}
