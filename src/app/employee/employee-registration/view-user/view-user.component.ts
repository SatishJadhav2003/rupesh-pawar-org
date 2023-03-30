import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { EmployeeService } from 'src/app/shared/employee.service';
import { member } from 'src/app/shared/member.model';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css'],
})
export class ViewUserComponent implements OnInit {
member!:member;
id!:number;

  constructor(private empService:EmployeeService, private route:ActivatedRoute) {}

  ngOnInit(): void {
    {
      this.route.params.subscribe(
        (param:Params)=>{
          this.id = +param['id'];
          this.member = this.empService.getMember(this.id);
        }
      )
    }
  }
}
