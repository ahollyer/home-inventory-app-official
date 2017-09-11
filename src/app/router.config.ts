import { Route } from '@angular/router';
import { ItemsComponent} from './items/items.component';
import { ItemListComponent } from './item-list/item-list.component';
export const routerConfig: Route[] = [
  {
    path: 'home',
    component: ItemsComponent
  },
  {
    path: 'example-table',
    component: ItemListComponent
  }
];
