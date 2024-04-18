//this is like the startup file, what happens when our app starts running 
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { MediaComponent } from './app/components/media/media.component';

//if we change to MediaComponent here, we will see the media component instead of the app component when the site starts up 
bootstrapApplication(MediaComponent, appConfig)
  .catch((err) => console.error(err));
