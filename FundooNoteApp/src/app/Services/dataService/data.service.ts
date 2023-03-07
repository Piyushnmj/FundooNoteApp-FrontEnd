import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  private messagesource = new BehaviorSubject([]);
  incomingData = this.messagesource.asObservable();

  outgoingData(message:any){
    console.log(message)
    this.messagesource.next(message)
  }
}
