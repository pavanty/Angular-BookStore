import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { AngularToastService } from 'angular-toasts';
@Component({
  selector: 'app-bookmarkslist',
  templateUrl: './bookmarkslist.component.html',
  styleUrls: ['./bookmarkslist.component.scss'],
})
export class BookmarkslistComponent implements OnInit {
  bookmarklists: any;
  totallength: any;
  page: number = 1;
  bookmarkdatadelete: any;
  constructor(
    private service: ApiService,
    private toast: AngularToastService
  ) {}
  ngOnInit() {
    this.getallboomarks();
  }
  getallboomarks() {
    this.service.getallbookmarklist().subscribe((data) => {
      this.bookmarklists = data;
      this.bookmarkdatadelete = data;
    });
  }
  deleteall() {
    this.bookmarkdatadelete = this.bookmarklists.filter((a: any) => {
      this.service.deletalldatabyid(a.id).subscribe((data) => {
        this.getallboomarks();
      });
    }, this.toast.success('Success', 'Successfully Deleted All from BookMarks'));
  }
  onclickdeletebyid(id: any, title: any) {
    this.service.deletalldatabyid(id).subscribe(() => {
      this.toast.success(
        'Success',
        'Successfully deleted ' + title + ' from BookMarks'
      );
      this.getallboomarks();
    });
  }
}
