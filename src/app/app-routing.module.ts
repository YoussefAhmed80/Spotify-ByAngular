import { LibraryComponent } from './library/library.component';
import { CategoryalbumsongsComponent } from './categoryalbumsongs/categoryalbumsongs.component';
import { UserComponent } from './user/user.component';
import { ArtistComponent } from './artist/artist.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AuthGuard } from './auth.guard';
import { SearchComponent } from './search/search.component';
import { YourLibraryComponent } from './your-library/your-library.component';
import { CreatePlayListComponent } from './create-play-list/create-play-list.component';
import { LikedSongsComponent } from './liked-songs/liked-songs.component';
import { ProfileComponent } from './profile/profile.component';
import { SongPageComponent } from './song-page/song-page.component';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';
import { CategoryalbumsComponent } from './categoryalbums/categoryalbums.component';

const routes: Routes = [
  {path:'' , redirectTo:'login', pathMatch:'full'},
  {path:'home' , canActivate:[AuthGuard] , component:HomeComponent},
  {path:'Search' , canActivate:[AuthGuard] , component:SearchComponent},
  {path:'YourLibrary' , canActivate:[AuthGuard] , component:YourLibraryComponent},
  {path:'CreatePlayList' , canActivate:[AuthGuard] , component:CreatePlayListComponent},
  {path:'LikedSongs' , canActivate:[AuthGuard] , component:LikedSongsComponent},
  {path:'login' , component:LoginComponent},
  {path:'register' , component:RegisterComponent},
  {path:'logout' , component:LogoutComponent},
  {path:'profile' , component:ProfileComponent},
  {path:'artistdetails' , component:ArtistDetailsComponent},
  {path:'categoryalbum' , component:CategoryalbumsComponent},
  {path:'categoryalbumsongs', component:CategoryalbumsongsComponent},
  {path:'library' , component:LibraryComponent},
  
  {path:'songdetailes',component:SongPageComponent},
  {path:'register/user/:id' , component:UserComponent},
  {path:'register/artist/:id' , component:ArtistComponent},
  {path:'**' , component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash : true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
