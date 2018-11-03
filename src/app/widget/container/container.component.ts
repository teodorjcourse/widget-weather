import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { WidgetModel } from '../../models/widget.model';

@Component({
  selector: 'teo-container',
  templateUrl: './container.component.html'
})
export class ContainerComponent implements OnInit {
  @Input()
  public widgetData: { [key: string]: WidgetModel[] };
  @Output()
  public selectActivity: EventEmitter<WidgetModel> = new EventEmitter();
  public selectedCategory: string;

  constructor() { }

  public ngOnInit(): void {
    this.setCategory(Object.keys(this.widgetData)[0]);
  }

  public onSelectCategory(category: string): void {
    this.setCategory(category);
  }

  public onSelectActivity(activity: WidgetModel): void {
    this.selectActivity.emit(activity);
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
