import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.css']
})
export class AddVideoComponent implements OnInit {
  videoData ={};
  constructor() { 
}
  ngOnInit() {
  }

  addVideo(){
    console.log(this.videoData)
  }

}
