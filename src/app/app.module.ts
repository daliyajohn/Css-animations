import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TextFieldComponent } from './text-field/text-field.component';
import { AnimatedBellComponent } from './animated-bell/animated-bell.component';
import { ButtonComponent } from './button/button.component';


@NgModule({
  declarations: [
    AppComponent,
    TextFieldComponent,
    AnimatedBellComponent,
    ButtonComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
