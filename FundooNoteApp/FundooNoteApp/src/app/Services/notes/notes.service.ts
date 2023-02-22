import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  base=environment.baseUrl;
  token:any;
  constructor( private http: HttpService) { this.token=localStorage.getItem('token')}

  addNotes(result:any){
    let header={
      headers: new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.http.PostService(this.base+`Note/CreateNote`, result, true, header);
  }


}
