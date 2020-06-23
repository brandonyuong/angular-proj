import { Component } from '@angular/core';
import { DataStorageService } from '../shared/data-storange.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
  collapsed: boolean = true;

  constructor(private dataStorageService: DataStorageService) {}

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
  }

  onSaveData() {
    this.dataStorageService.storeRecipes();
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
  }
}
