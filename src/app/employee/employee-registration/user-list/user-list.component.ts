import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { EmployeeService } from 'src/app/shared/employee.service';
import { member } from 'src/app/shared/member.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnDestroy {
  addNew: boolean = false;
  viewMember: boolean = false;
  viewRecent: boolean = true;

  members: member[] = [];
  recentUser: member[] = [];
  subscription!: Subscription;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.subscription = this.employeeService.membersChanged.subscribe(
      (members: member[]) => {
        this.recentUser = this.employeeService.getRecentMembers();
        this.members = members;
      }
    );
    this.recentUser = this.employeeService.getRecentMembers();
    this.members = this.employeeService.getMembers();
  }

  addNewMember() {
    this.addNew = !this.addNew;
    this.viewMember = false;
    this.viewRecent = !this.addNew;
  }

  // calling from child
  addNewM(value: boolean) {
    this.addNew = value;
    this.viewMember = false;
    this.viewRecent = !this.addNew;
  }

  viewMemberDetail() {
    this.viewMember = true;
    this.addNew = false;
    this.viewRecent = false;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
