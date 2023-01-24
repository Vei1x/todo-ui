import { TodotaskService } from '../todotask.service';
import { Todotask } from '../todotask';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-create-todotask',
  templateUrl: './create-todotask.component.html',
  styleUrls: ['./create-todotask.component.less']
})
export class CreateTodotaskComponent implements OnInit {

  todotask: Todotask = new Todotask();
  submitted = false;


  constructor(private todotaskService: TodotaskService, private router: Router) { }

  ngOnInit(){
  }

  newTodotask(): void{
    this.submitted = false;
    this.todotask = new Todotask();
  }

  save(){
    this.todotaskService
      .createTodotask(this.todotask).subscribe(data => {
        console.log(data)
      this.todotask = new Todotask();
        this.goToList();
    },
      error => console.log(error));
  }

  onSubmit(){
    this.submitted = true;
    this.save();
  }

  goToList(){
    this.router.navigate(['add']);
  }
}
