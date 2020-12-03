import { HttpClient, HttpHeaders,  } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private _http:HttpClient) { 

  }

  getNewRelases(){ 
    
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCi3v10wPdw3NElBZ1D-wWP_6RVICPfiFF5TGeHAKWiVvfJCmpSSHgJuiWF4xcWPkYO1wYDupixRctFS_U'
    });
    
    return this._http.get('https://api.spotify.com/v1/browse/new-releases',{headers});
    /* .subscribe(data=>{
      console.log(data);
    }); */
  }  
}


