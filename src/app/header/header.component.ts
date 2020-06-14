import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() featureSelected = new EventEmitter<string>();
  collapsed: boolean = true;

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
  }

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
}
