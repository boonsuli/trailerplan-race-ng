import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./modules/general/home/home.component";
import {NgModule} from "@angular/core";
import {ContactComponent} from "./modules/general/contact/contact.component";
import {AboutComponent} from "./modules/general/about/about.component";
import {RaceListComponent} from "./modules/application/race-list/race-list.component";
import {RaceDetailComponent} from "./modules/application/race-detail/race-detail.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'race-list',
    component: RaceListComponent
  },
  {
    path: 'race-detail',
    component: RaceDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
