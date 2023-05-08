import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu'
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { YourLibraryComponent } from './your-library/your-library.component';
import { CreatePlayListComponent } from './create-play-list/create-play-list.component';
import { LikedSongsComponent } from './liked-songs/liked-songs.component';
import { NavhomeComponent } from './navhome/navhome.component';
import { SideMainNavComponent } from './side-main-nav/side-main-nav.component';
import { ProfileComponent } from './profile/profile.component';
import { AddSongComponent } from './add-song/add-song.component';
import { AddAlbumComponent } from './add-album/add-album.component';
import { ArtistComponent } from './artist/artist.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { AudioPlayerComponent } from './audio-player/audio-player.component';
import { FooterComponent } from './footer/footer.component';
import { SongPageComponent } from './song-page/song-page.component';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';
import { CategoryalbumsComponent } from './categoryalbums/categoryalbums.component';
import { CategoryalbumsongsComponent } from './categoryalbumsongs/categoryalbumsongs.component';
import { LibraryComponent } from './library/library.component';
import { NaCreatePlayListComponent } from './na-create-play-list/na-create-play-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    NavbarComponent,
    NotfoundComponent,
    SearchComponent,
    YourLibraryComponent,
    CreatePlayListComponent,
    LikedSongsComponent,
    NavhomeComponent,
    SideMainNavComponent,
    ProfileComponent,
    AddSongComponent,
    AddAlbumComponent,
    ArtistComponent,
    UserComponent,
    AdminComponent,
    AudioPlayerComponent,
    FooterComponent,
    SongPageComponent,
    ArtistDetailsComponent,
    CategoryalbumsComponent,
    CategoryalbumsongsComponent,
    LibraryComponent,
    NaCreatePlayListComponent,

  ],
  imports: [
    FormsModule,
   MatToolbarModule,
   MatButtonModule,
   MatSidenavModule,
   MatIconModule,
   MatListModule,
   MatMenuModule,
   MatDialogModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
