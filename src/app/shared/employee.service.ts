import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { member } from './member.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {

  membersChanged = new Subject<member[]>();
  constructor() {}
  members: member[] = [
    {
      name: 'satish jadhav',
      address: 'khadakjamb',
      mobile: '8390613529',
      gender:'male',
      aadhar:'994134447191',
      pan:'cgopj2347h',
      occupation: 'student',
    },
    {
      name: 'satish jadhav',
      address: 'khadakjamb',
      mobile: '8390613529',
      gender:'male',
      aadhar:'994134447191',
      pan:'cgopj2347h',
      occupation: 'student',
    },
  ];

  addMember(memberData: member) {
    this.members.push(memberData);
    this.membersChanged.next(this.members.slice());
  }

  getMembers()
  {
    return this.members.slice();
  }

  getMember(index:number)
  {
    console.log(this.members[index]);
    return this.members[index];
  }

  getRecentMembers()
  {
    return this.members.slice(-5);
  }
}
