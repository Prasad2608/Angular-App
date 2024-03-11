import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { AdditionComponent } from './app/addition/addition.component';
import { MessageComponent } from './app/message/message.component';
import { ArrayexComponent } from './app/arrayex/arrayex.component';
import { PipeExComponent } from './app/pipe-ex/pipe-ex.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));


