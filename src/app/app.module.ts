import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TextFieldComponent } from './text-field/text-field.component';
import { AnimatedBellComponent } from './animated-bell/animated-bell.component';
import { FormComponent } from './form/form.component';


@NgModule({
  declarations: [
    AppComponent,
    TextFieldComponent,
    AnimatedBellComponent,
    FormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
