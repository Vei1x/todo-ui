import { Component, OnInit, Input } from '@angular/core';
import { Todotask } from '../todotask';
import { TodotaskService } from '../todotask.service';
import { TodotaskListComponent } from '../todotask-list/todotask-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todotask-details',
  templateUrl: './todotask-details.component.html',
  styleUrls: ['./todotask-details.component.less']
})
export class TodotaskDetailsComponent implements OnInit {

  id: number;
  todotask: Todotask;

  constructor(private route: ActivatedRoute,private router: Router,
              private todotaskService: TodotaskService) { }

  ngOnInit() {
    this.todotask = new Todotask();

    this.id = this.route.snapshot.params['id'];

    this.todotaskService.getTodotask(this.id)
      .subscribe(data => {
        console.log(data)
        this.todotask = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['todos']);
  }
}
