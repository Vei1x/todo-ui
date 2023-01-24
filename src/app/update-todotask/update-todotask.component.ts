import {Component, OnInit} from '@angular/core';
import {Todotask} from '../todotask';
import {ActivatedRoute, Router} from '@angular/router';
import {TodotaskService} from '../todotask.service';

@Component({
  selector: 'app-update-todotask',
  templateUrl: './update-todotask.component.html',
  styleUrls: ['./update-todotask.component.less']
})
export class UpdateTodotaskComponent implements OnInit {
  id: number;
  todotask: Todotask;

  constructor(private route: ActivatedRoute, private router: Router,
              private todotaskService: TodotaskService) {
  }


  ngOnInit() {
    this.todotask = new Todotask();

    this.id = this.route.snapshot.params['id'];

    this.todotaskService.getTodotask(this.id)
      .subscribe(data => {
        console.log(data)
        this.todotask = data;
      }, error => console.log(error));
  }

  updateTodotask(){
    this.todotaskService.updateTodotask(this.id, this.todotask)
      .subscribe(data => {
        console.log(data);
        this.todotask = new Todotask();
        this.goToList();
      }, error => console.log(error));
  }

  onSubmit(){
    this.updateTodotask();
  }

  goToList(){
    this.router.navigate(['todos']);
  }

}
