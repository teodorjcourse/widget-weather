import { Component, Input } from '@angular/core';
import { SocialInfo } from '../../models/widget.model';

@Component({
  selector: 'teo-social',
  templateUrl: './social-info.component.html'
})
export class SocialInfoComponent {
  @Input()
  public info: SocialInfo;

  constructor() { }
}
