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

  getNotes(){
    let header={
      headers: new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.http.GetService(this.base+`Note/RetrieveAllNotes`, true, header);
  }

  updateNotes(result:any, noteId:any){
    let header={
      headers: new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.http.PutService(this.base+`Note/UpdateNote?noteId=`+noteId, result, true, header);
  }

  trashNotes(result:any){
    let header={
      headers: new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.http.PutService(this.base+`Note/Trash-Restore`, result, true, header);
  }

  deleteNotes(result:any){
    let header={
      headers: new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.http.DeleteService(this.base+`Note/DeleteNote?noteId=`+result.noteId, true, header);
  }

  archiveNotes(result:any){
    let header={
      headers: new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.http.PutService(this.base+`Note/Archive-Unarchive`, result, true, header);
  }

  changeNotesColor(result:any){
    let header={
      headers: new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.http.PutService(this.base+`Note/ChangeColour?noteId=`+result.noteId+`&BackgroundColour=`+result.backgroundColour, result, true, header);
  }
  //https://localhost:44305/api/Note/ChangeColour?noteId=1&BackgroundColour=blue
}
