import { Routes } from '@angular/router';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
//import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { HttpClient } from 'selenium-webdriver/http';
import * as firebase from 'firebase/';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Router } from '@angular/router';
import { AngularFireDatabase,FirebaseListObservable} from 'angularfire2/database';
import { AngularFireObject, AngularFireList } from 'angularfire2/database';
import {AngularFireStorage} from 'angularfire2/storage';



interface FeaturedPhotosUrls {
  url1?: String;
  url2?: String;
}


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css',
              //'./classy-nav.min.css',
              './animate.css',
              './core-style.css',
              //'./core-style.css.map',
           './nice-select.css',]
})

export class FooterComponent implements OnInit {
  title = 'my-app';
  url1;
  SelectedFiles: FileList;
  file: File;
  imgSrc;
  @Output() url1 = new EventEmitter();
  //public featuredPhotoStream = FirebaseListObservable <FeaturedPhotosUrls>;
  constructor(public db: AngularFireStorage) {
    //this.featuredPhotoStream = this.db.object('/photos/featured');
    //firebase.storage().ref('/photos/featured/url1').getDownloadURL().then(url => console.log(url) );
    firebase.storage().ref('/photos/featured/url1').getDownloadURL().then(downloadURL => {
    const imageUrl = downloadURL;
    console.log('URL:' + imageUrl);
    this.url1 = imageUrl;
});


  }









  fbPostData(email){
    firebase.database().ref('/').push({email:email});
  }

  featuredPhotoSelected(event:any){
      const file: File = event.target.files[0];
      console.log('selected file is', file.name);
      const metadata = {'contentType':file.type};
      const storageRef: firebase.storage.Reference =  firebase.storage().ref('/photos/featured/url1');
      storageRef.put(file,metadata);
      //firebase.storage().ref('/photos/featured').getDownloadURL().then(url => console.log(url) );

      console.log("Uploading",file.name);
  }


  ngOnInit() {

  }

}
