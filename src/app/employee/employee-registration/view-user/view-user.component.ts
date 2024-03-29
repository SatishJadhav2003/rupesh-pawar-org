import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { EmployeeService } from 'src/app/shared/employee.service';
import { member } from 'src/app/shared/member.model';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css'],
})
export class ViewUserComponent implements OnInit, OnChanges {
  member!: member;

  @Input() index!: number;

  constructor(
    private empService: EmployeeService,
    private route: ActivatedRoute
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.index);
    this.member = this.empService.getMember(this.index);
    console.log(this.member);
  }

  ngOnInit(): void {
    {
    }
  }
}
