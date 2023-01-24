import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTodotaskComponent } from './create-todotask/create-todotask.component';
import { TodotaskDetailsComponent } from './todotask-details/todotask-details.component';
import { TodotaskListComponent } from './todotask-list/todotask-list.component';
import { UpdateTodotaskComponent } from './update-todotask/update-todotask.component';

const routes: Routes = [
  { path: '', redirectTo: 'todo', pathMatch: 'full' },
  { path: 'todos', component: TodotaskListComponent },
  { path: 'add', component: CreateTodotaskComponent },
  { path: 'update/:id', component: UpdateTodotaskComponent },
  { path: 'details/:id', component: TodotaskDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
