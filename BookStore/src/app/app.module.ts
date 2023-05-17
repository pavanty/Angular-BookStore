import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingcomponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BooklistsComponent } from './booklists/booklists.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxStarsModule } from 'ngx-stars';
import { FilterPipe } from './filter.pipe';

import { BookformComponent } from './bookform/bookform.component';
import { AngularToastModule } from 'angular-toasts';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';
import { BookmarkslistComponent } from './bookmarkslist/bookmarkslist.component';
@NgModule({
  declarations: [
    AppComponent,
    BooklistsComponent,
    routingcomponents,
    FilterPipe,

    BookformComponent,
    BookdetailsComponent,
    BookmarkslistComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgxStarsModule,
    AngularToastModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
