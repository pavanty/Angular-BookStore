import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularToastService } from 'angular-toasts';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-bookform',
  templateUrl: './bookform.component.html',
  styleUrls: ['./bookform.component.scss'],
})
export class BookformComponent implements OnInit, OnDestroy {
  bookpost: FormGroup;
  successmessage: any;
  submitBookSubscription: Subscription;
  constructor(
    private service: ApiService,
    private router: Router,
    private _toast: AngularToastService
  ) {}
  ngOnInit() {
    this.bookpost = new FormGroup({
      title: new FormControl(null, Validators.required),
      authors: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      image_url: new FormControl(
        null,
        Validators.pattern('(https?://.*.(?:png|jpg))')
      ),
      rating: new FormControl(null, Validators.required),
    });
  }
  submitform() {
    this.submitBookSubscription = this.service
      .submitbook(this.bookpost.value)
      .subscribe((data) => {
        if (data) {
          this.successmessage = 'Details Saved Successfully';
        }
      });
    setTimeout(() => {
      this._toast.success('Success', 'Added new Books');
      this.router.navigate(['/BookLists']);
    }, 2000);
  }
  get title() {
    return this.bookpost.get('title');
  }
  get authors() {
    return this.bookpost.get('authors');
  }
  get rating() {
    return this.bookpost.get('rating');
  }
  get image_url() {
    return this.bookpost.get('image_url');
  }
  get description() {
    return this.bookpost.get('description');
  }
  ngOnDestroy(): void {
    if (this.submitBookSubscription) {
      this.submitBookSubscription.unsubscribe();
    }
  }
}
