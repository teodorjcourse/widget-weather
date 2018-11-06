import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { WidgetModel } from '../../models/widget.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../store';
import { ChooseActivityAction } from '../../store/actions/activity.action';

@Component({
  selector: 'teo-container',
  templateUrl: './container.component.html'
})
export class ContainerComponent implements OnInit {
  @Input()
  public widgetData: { [key: string]: WidgetModel[] };
  public selectedCategory: string;

  constructor(
    private _store: Store<AppState>
  ) { }

  public ngOnInit(): void {
    this.setCategory(Object.keys(this.widgetData)[0]);
  }

  public onSelectCategory(category: string): void {
    this.setCategory(category);
  }

  public onSelectActivity(activity: WidgetModel): void {
    this._store.dispatch(new ChooseActivityAction(activity));
  }

  private setCategory(category: string): void {
    this.selectedCategory = category;
    this.onSelectActivity(this.widgetData[category][0]);
    this.scrollToTop();
  }

  private scrollToTop(): void {
    const scrollContainer: Element = document.getElementsByClassName('scrollbar')[0];
    if (scrollContainer) {
      scrollContainer.scrollTop = 0;
    }
  }
}
