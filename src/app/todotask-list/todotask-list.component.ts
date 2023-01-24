import { TodotaskDetailsComponent } from '../todotask-details/todotask-details.component';
import { Observable } from "rxjs";
import { TodotaskService } from "../todotask.service";
import { Todotask } from "../todotask";
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-todotask-list',
  templateUrl: './todotask-list.component.html',
  styleUrls: ['./todotask-list.component.less']
})
export class TodotaskListComponent implements OnInit {
  todotasks: Observable<Todotask[]>;

  constructor(private todotaskService: TodotaskService,
    private router: Router){
  }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.todotasks = this.todotaskService.getTodotasksList();
  }

  deleteTodoTask(id: number){
    this.todotaskService.deleteTodotask(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  todotaskDetails(id: number){
    this.router.navigate(['details',id]);
  }

  editTodotask(id: number){
    this.router.navigate(['update', id]);
  }
}
