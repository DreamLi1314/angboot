import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
   declarations: [
      AppComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      AppRoutingModule,
      NgbModalModule.forRoot()
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
