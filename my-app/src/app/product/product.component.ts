
import { Routes } from '@angular/router';
import { Component, OnInit, Output, EventEmitter, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import * as firebase from 'firebase/';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Router } from '@angular/router';
import { AngularFireObject, AngularFireList } from 'angularfire2/database';
import {AngularFireStorage,AngularFireStorageReference,AngularFireUploadTask} from 'angularfire2/storage';
import {FormGroup, FormsModule,ReactiveFormsModule,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css',
              '../body/animate.css',
            //'./classy-nav.min.css',
              '../body/core-style.css',
              '../body/nice-select.css',]
})
export class ProductComponent implements OnInit{
public img: any = null;
@ViewChild('image') image: ElementRef;
  constructor(public db: AngularFireStorage) {
    //this.featuredPhotoStream = this.db.object('/photos/featured');
    //firebase.storage().ref('/photos/featured/url1').getDownloadURL().then(url => console.log(url) );
  //});


}
ngOnInit() {
  this.getImage();
}

getImage() {
  firebase.storage().ref('/files/pp.jpg').getDownloadURL().then(downloadURL => {
  console.log('URL:' + downloadURL);
  this.image.nativeElement.children[0].src= downloadURL;
  this.image.nativeElement.children[1].src= downloadURL;
  this.image.nativeElement.children[2].src= downloadURL;
  this.image.nativeElement.children[3].src= downloadURL;
  });
  }
}
