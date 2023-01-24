import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { CreateTodotaskComponent } from './create-todotask/create-todotask.component';
import { TodotaskDetailsComponent } from './todotask-details/todotask-details.component';
import { TodotaskListComponent } from './todotask-list/todotask-list.component';
import { UpdateTodotaskComponent } from './update-todotask/update-todotask.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateTodotaskComponent,
    TodotaskDetailsComponent,
    TodotaskListComponent,
    UpdateTodotaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
