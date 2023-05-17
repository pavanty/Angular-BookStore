import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooklistsComponent } from './booklists/booklists.component';
import { BookformComponent } from './bookform/bookform.component';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';
import { BookmarkslistComponent } from './bookmarkslist/bookmarkslist.component';

const routes: Routes = [
  { path: '', redirectTo: 'BookLists', pathMatch: 'full' },
  { path: 'BookLists', component: BooklistsComponent },
  { path: 'BookForm', component: BookformComponent },
  { path: 'Bookdetail/:id', component: BookdetailsComponent },
  { path: 'Bookmarkslist', component: BookmarkslistComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingcomponents = [
  BooklistsComponent,
  BookformComponent,
  BookdetailsComponent,
  BookmarkslistComponent,
];
