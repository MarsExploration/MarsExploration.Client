import { SuiDimmerModule } from 'ng2-semantic-ui/dist/public';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CommandParseService } from './services/command.parse.service';
import { MarsExplorationService } from './services/mars.exploration.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SuiDimmerModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MarsExplorationService, CommandParseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
