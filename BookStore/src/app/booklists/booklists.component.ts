import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { AngularToastService } from 'angular-toasts';
@Component({
  selector: 'app-booklists',
  templateUrl: './booklists.component.html',
  styleUrls: ['./booklists.component.scss'],
})
export class BooklistsComponent implements OnInit {
  constructor(
    private service: ApiService,
    private router: Router,
    private _toast: AngularToastService
  ) {}
  searchname: string;
  booklists: any;
  filterbytitle: any;
  totallength: any;
  page: number = 1;
  ngOnInit() {
    this.service.getallbooklist().subscribe((data) => {
      this.booklists = data;
      this.filterbytitle = data;
    });
  }
  updateFilter() {
    this.filterbytitle = this.booklists.filter((book) =>
      book.title.toLowerCase().includes(this.searchname.toLowerCase())
    );
    this.page = 1;
  }
  gotodetailspage(id: any) {
    this.router.navigate(['/Bookdetail', id]);
  }
  onclickbookmarks(book: any) {
    this.service.submitbookmark(book).subscribe(
      () => {
        this._toast.success(
          'Success',
          'Successfully saved ' + book.title + ' on Bookmarks'
        );
      },
      (error) => {
        this._toast.error('Error', 'Already saved to Bookmarks');
      }
    );
  }
}
