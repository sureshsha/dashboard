import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GridsterModule } from 'angular-gridster2';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { TestComponent } from './test/test.component';
import { EditLayoutComponent } from './edit-layout/edit-layout.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    TestComponent,
    EditLayoutComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    GridsterModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
