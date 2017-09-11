import {Injectable} from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { FirebaseObjectFactoryOpts } from "angularfire2/database/interfaces";
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
  public messages: FirebaseListObservable<any>;
  public users: FirebaseListObservable<any>;
  public displayName: string;
  public email: string;
  public user: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase) {
    this.afAuth.authState.subscribe(
      (auth) => {
        if (auth != null) {
          console.log("something happened...")
        }
      });
    this.messages = db.list('messages');
    this.users = db.list('users');
  }
}
