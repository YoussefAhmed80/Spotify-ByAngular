import { SongDTO } from './../Models/song-dto';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { LikedSongDTO } from 'src/app/Models/liked-song-dto';
import { PlayListSong } from 'src/app/Models/play-list-song';
import { Songs } from 'src/app/Models/song';
import { SongserviceService } from 'src/app/Services/songservice.service';
@Component({
  selector: 'app-create-play-list',
  templateUrl: './create-play-list.component.html',
  styleUrls: ['./create-play-list.component.scss']
})
export class CreatePlayListComponent {

  // constructor( private _Router:Router)
  // {

  // }


  Listofsongs: SongDTO[] = [];
  song!: SongDTO;
  showDiv = false;
  DisplaySong: boolean = false;
  isClicked: boolean = false;
  Hidetable: boolean = true;
  showImage2 = false;
  showInput = false;
  displayinput = false;
  playlist!: PlayListSong;
  like!: LikedSongDTO;

  constructor(
    private songservice: SongserviceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  addsong(id: number) {
    this.songservice.getsongbyId(id).subscribe({
      next: (data) => {
        this.song = data;
        console.log(data);
      },
      error: (err) => console.log('Error'),
    });
  }

  addsongtoplaylist(id: number, playListid: number) {
    this.playlist.SongId = id;
    this.playlist.PlayListId = playListid;

    this.songservice.AddSongtoplaylistsong(this.playlist).subscribe({
      next: (data:any) => {
        this.playlist = data;
        console.log(data);
      },
      error: (err:any) => console.log('Error'),
    });
  }
  ngOnInit(): void {
    this.songservice.getAllsong().subscribe({
      next: (data:any) => {
        this.Listofsongs = data;
        console.log(data);
      },
      error: (err:any) => console.log('Error'),
    });
  }
  showdivorhide() {
    this.DisplaySong = true;
  }

  onMouseOver() {
    this.showImage2 = true;
  }
  onMouseOut() {
    this.showImage2 = false;
  }

  onClick() {
    this.showInput = !this.showInput;
    this.Hidetable = !this.Hidetable;
  }

  onFileSelected() {
    this.displayinput = true;
  }
  Onbutton() {
    this.isClicked = !this.isClicked;
  }

  addLiketosong(id: number) {
    this.like.LikeDate = new Date();
    this.like.SongId = id;
    // this.like.userid=this.auth.getid()
    this.songservice.addliketosong(this.like).subscribe({
      next: (data) => {
        this.like = data;
        console.log(data);
      },
      error: (err:any) => console.log('Error'),
    });
  }


  profile()
  {
    this.router.navigate(['/profile']);
  }

}
