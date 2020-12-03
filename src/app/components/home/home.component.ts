import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  descubrir:any[]=[];

  constructor(private _spotify:SpotifyService) {

    this._spotify.getNewRelases().subscribe((data:any)=>{
      console.log(data.albums.items);
      this.descubrir=data.albums.items;
    });

   }

  ngOnInit(): void {
  }

}
