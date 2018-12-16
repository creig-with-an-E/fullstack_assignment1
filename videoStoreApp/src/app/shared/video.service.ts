import { Injectable } from '@angular/core';
import {Video} from "./video.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  selectedVideo:Video;
  video:Video[];

  readonly baseURL = 'http://localhost:3000/api';
  constructor(private http:HttpClient) { }

  postVideo(video:Video){
    return this.http.post(this.baseURL+"/user",video);
  }

  getVideoList(){
    return this.http.get(this.baseURL+"/video")
  };

  putCustomer(video: Video) {
    return this.http.put(this.baseURL + `/${video._id}`, video);
  }

  deleteVideo(_id: string) {
    return this.http.delete(this.baseURL + `/video/${_id}`);
  }
}
