import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {VideoService} from "../shared/video.service";
import {Video} from "../shared/video.model";

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  constructor(private videoService:VideoService) { }

  ngOnInit() {

    this.refreshCustomer()
  }

  // resetForm(form?: NgForm) {
  //   if (form)
  //     form.reset();
  //   this.videoService.selectedVideo = {
  //     title :"",
  //
  //   }
  // }

  onSubmit(form: NgForm) {
    // if (form.value._id == "") {
    this.videoService.postVideo(form.value).subscribe((res) => {
      console.log("success");
    });
    // }


  }

  refreshCustomer() {
    this.videoService.getVideoList().subscribe((res) => {
      this.videoService.video = res as Video[];
    });
  }

  onEdit(video: Video) {
    this.videoService.selectedVideo = video;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.videoService.deleteVideo(_id).subscribe((res) => {
        this.refreshCustomer();
        // this.resetForm(form);
      });
    }
  }

}
