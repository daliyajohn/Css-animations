import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TextFieldComponent } from './text-field/text-field.component';
import { Button1Component } from './button1/button1.component';

import { AnimatedBellComponent } from './animated-bell/animated-bell.component';
import { FormComponent } from './form/form.component';
import { ButtonComponent } from './button/button.component';
import { UnsubscribeComponent } from './unsubscribe/unsubscribe.component';

@NgModule(
  {
    declarations: [
      AppComponent,
      TextFieldComponent,
      ButtonComponent,
      Button1Component,
      UnsubscribeComponent
    ],
    imports: [
      BrowserModule,
      AnimatedBellComponent,
      FormComponent,
      ButtonComponent
    ],
    providers: [],
    bootstrap: [
      AppComponent
    ]
  }
)
export class AppModule {}
