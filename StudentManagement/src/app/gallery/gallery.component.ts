import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  //  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);


  constructor() { }

  ngOnInit(): void {
  }

}
