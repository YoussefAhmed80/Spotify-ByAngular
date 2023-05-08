import { Component } from '@angular/core';

@Component({
  selector: 'app-side-main-nav',
  templateUrl: './side-main-nav.component.html',
  styleUrls: ['./side-main-nav.component.scss']
})
export class SideMainNavComponent {

  openSidebar: boolean = true;

  menuSidebar = [
    {
      link_name: "Home",
      link: "/home",
      icon: "/assets/home.png",
      sub_menu: []
    },{
      link_name: "Search",
      link: "/Search",
      icon: "/assets/search.png",
      sub_menu: []
    }, {
      link_name: "Your Library",
      link: "/YourLibrary",
      icon: "/assets/library.png",
      sub_menu: []
    }, {
      link_name: "Create PlayList",
      link: "/CreatePlayList",
      icon: "/assets/playlist.png",
      sub_menu: []
    }, {
      link_name: "Liked Songs",
      link: "/LikedSongs",
      icon: "/assets/heart.png",
      sub_menu: []
    }, {
      link_name: "Add Song",
      link: "/add-song",
      icon: "/assets/song.png",
      sub_menu: []
    }, {
      link_name: "Add Album",
      link: "/add-album",
      icon: "/assets/album.png",
      sub_menu: []
    }
  ]

  
  

  constructor() { }

  ngOnInit() {

  }

  
}




