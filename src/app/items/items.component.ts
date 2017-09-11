import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: FirebaseListObservable<any>;

  constructor (private db: AngularFireDatabase) {
    this.items = db.list('items');

  }

  itemsPush (newName : string, newDescription : string, newCost : number) {
    this.items.push({
      name: newName,
      description: newDescription,
      estimated_cost: newCost
    });
  }

  addItem(newName: string) {
  this.items.push({ text: newName });
  }
  updateItem(key: string, newName: string, newDescription : string, newCost: number) {
    this.items.update(key, {
      name: newName ,
      description: newDescription,
      estimated_cost: newCost
    });
  }
  deleteItem(key: string) {
    this.items.remove(key);
  }
  deleteEverything() {
    this.items.remove();
  }
  //   save(newName: string) {
  //   this.item.set({ name: newName });
  // }
  // update(newSize: string) {
  //   this.item.update({ size: newSize });
  // }
  // delete() {
  //   this.item.remove();
  // }

  ngOnInit() {
  }

}
