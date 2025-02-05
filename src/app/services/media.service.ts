import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  serverUrl: string = environment.serverUrl;
  constructor(private http: HttpClient) { }

  //GET 
  getMedia(){
    return this.http.get(`${this.serverUrl}/media`)
  }

  //POST
  addMedia(media: any){
                         //this url, then plus the media we are passing in 
    return this.http.post(`${this.serverUrl}/media`, media)
  }

  //UPDATE using PUT
  updateMedia(media: any){
    return this.http.put(`${this.serverUrl}/media/${media._id}`, media)
  }

  //DELETE
  deleteMedia(_id: string){
    return this.http.delete(`${this.serverUrl}/media/${_id}`)
  }

}
