import { Component } from '@angular/core';
import { initializeApp, database } from 'firebase';
import { firebaseConfig } from '../environments/firebase.config';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

    courses: FirebaseListObservable<any[]>;

	constructor (private db: AngularFireDatabase){
        this.courses = db.list('courses');

        this.courses.subscribe(console.log);
        /*
		// Initialize Firebase
        initializeApp(firebaseConfig);
        var root = database().ref('messages/2');

        root.on('value', function(snap){
            console.log(snap.key, snap.val());
        });
        */
	}
  

  	title = 'app works!';
}
