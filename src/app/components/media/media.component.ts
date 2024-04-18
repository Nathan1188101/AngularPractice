import { Component } from '@angular/core';
import { NgFor, NgIf} from '@angular/common';
import { FormsModule } from '@angular/forms'; 

//define a class for the media structure 
export class Media{
  _id: string | undefined; //by adding the "or undefined" we are basically initializing it as null 
  title: string | undefined;
  releaseYear: number | undefined;
  type: string | undefined;
  provider: string | undefined;
  rating: number | undefined; 
}

@Component({
  selector: 'app-media',
  standalone: true,
  imports: [NgFor, FormsModule, NgIf], //put imports here and above at top of file 
  templateUrl: './media.component.html',
  styleUrl: './media.component.css'
})
export class MediaComponent {
  //define an array of media objects
  MEDIA: Media[] = [
    //this is mock data for now until I do the api part 
      {_id: '1', title: 'The Matrix', releaseYear: 1999, type: 'Movie', provider: 'HBO', rating: 5},
      {_id: '2', title: 'The Matrix Reloaded', releaseYear: 2003, type: 'Movie', provider: 'HBO', rating: 4},
      {_id: '3', title: 'The Matrix Revolutions', releaseYear: 2003, type: 'Movie', provider: 'HBO', rating: 3},
  ]

  selectedMedia: Media | undefined; 

  onSelect(media: Media): void {
    this.selectedMedia = media; //this is the media object that was clicked on by the user 
    console.log(media)//for debugging purposes 
  }
  
  onReset(): void {
      this.selectedMedia = null; //this will set it back to null thus hiding the form 
  }

}
