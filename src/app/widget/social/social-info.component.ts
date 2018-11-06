import { Component, OnInit } from '@angular/core';
import { SocialInfo } from '../../models/widget.model';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../store';
import { socialSelector } from '../../store/selectors/activity.selector';

@Component({
  selector: 'teo-social',
  templateUrl: './social-info.component.html'
})
export class SocialInfoComponent implements OnInit {
  public info: SocialInfo;

  constructor(
    private _store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this._store
      .pipe(select(socialSelector))
      .subscribe((info: SocialInfo) => this.info = info );
  }
}
