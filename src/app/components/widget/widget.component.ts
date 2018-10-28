import { Component, OnInit } from '@angular/core';
import { WidgetModel } from '../../models/widget.model';
import { WidgetService } from '../../common/services/widget.service';

@Component({
  selector: 'teo-widget',
  templateUrl: './widget.component.html'
})
export class WidgetComponent implements OnInit {
  public widgetData: { [key: string]: WidgetModel[] };
  public selectedActivity: WidgetModel;
  public isLoading: boolean = true;

  constructor(
    private _widgetService: WidgetService
  ) { }

  ngOnInit() {
    this._widgetService.get().subscribe(
      (data: { [key: string]: WidgetModel[] }) =>  {
        this.isLoading = false;
        this.widgetData = data;
      } );
  }
}
