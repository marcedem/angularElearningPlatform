import { Component } from '@angular/core';
import { initializeApp, database } from 'firebase';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	constructor(){
		// Initialize Firebase
        var config = {
            apiKey: "AIzaSyAFG2bWg0rXGY6bz20U9DIo_zck1oKJomw",
            authDomain: "angularelearningplatform.firebaseapp.com",
            databaseURL: "https://angularelearningplatform.firebaseio.com",
            projectId: "angularelearningplatform",
            storageBucket: "",
            messagingSenderId: "898399226903"
        };
        initializeApp(config);
        var root = database().ref('messages/2');

        root.on('value', function(snap){
            console.log(snap.key, snap.val());
        });
	}
  

  	title = 'app works!';
}
