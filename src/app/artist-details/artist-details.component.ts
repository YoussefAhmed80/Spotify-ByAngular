import { Component ,OnInit} from '@angular/core';
import { ArtistserviceService } from '../Services/artistservice.service';
import { ArtistDetails2Service } from '../Services/artist-details2.service';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.scss']
})
export class ArtistDetailsComponent {
  hide: boolean = true;
  ArtistList: any;
  Songlist:any=[]
  errorMessage: any;
  artistId!:any;
  // artist!:IArtist;

  showButton() {
    this.hide = false;
  }

  hideButton() {
    this.hide = true;
  }

  constructor(private ArtistserviceService: ArtistserviceService, private ArtistDetails2Service :ArtistDetails2Service) { }

  ngOnInit():void{
    this.ArtistserviceService.GetAllArtists("c135f23f-5516-476f-9a68-48368bc15d48").subscribe({
      next:(data)=>{this.Songlist=data.data
      console.log(data)
      },
      error: error => this.errorMessage = error
    });

    this.ArtistDetails2Service.GetArtistById("c135f23f-5516-476f-9a68-48368bc15d48").subscribe({
      next:(data)=>{this.ArtistList=data.data
      console.log(data)
      },
      error: error => this.errorMessage = error
    });
  }


}
