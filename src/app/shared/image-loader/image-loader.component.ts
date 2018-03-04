import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'image-loader',
  templateUrl: './image-loader.component.html',
  styleUrls: ['./image-loader.component.css']
})
export class ImageLoaderComponent implements OnInit {
  @Input() loading = true;
  @Input() image: string;

  constructor() { }

  ngOnInit() {}

}
