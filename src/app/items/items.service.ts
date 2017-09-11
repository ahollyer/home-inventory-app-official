import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class ItemsService {
  items: FirebaseListObservable<any>;
  constructor(private db: AngularFireDatabase) {
    this.items = db.list('items');
  }

}
