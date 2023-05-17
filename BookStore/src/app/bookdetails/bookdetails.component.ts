import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ApiService } from './../api.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.scss'],
})
export class BookdetailsComponent implements OnInit, OnDestroy {
  idparamater: any;
  bookdetail: any;
  stringobj: any;
  dataSubscription: Subscription;
  constructor(
    private service: ApiService,
    private activatedroute: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe((params: ParamMap) => {
      this.idparamater = params.get('id');
      this.dataSubscription = this.service
        .getdatabyid(this.idparamater)
        .subscribe((data) => {
          this.stringobj = data;
          this.bookdetail = JSON.parse(this.stringobj);
        });
    });
  }
  gobackpage() {
    this.router.navigate(['/BookLists']);
  }
  ngOnDestroy(): void {
    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe();
    }
  }
}
