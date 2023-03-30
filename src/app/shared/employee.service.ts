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
      id: '0',
      name: 'satish jadhav',
      address: 'khadakjamb',
      mobile: '8390613529',
      email: 'satishjadhav87@gmail.com',
      dob: new Date('dd/mm/yyyy'),
      occupation: 'student',
    },
    {
      id: '1',
      name: 'satish jadhav',
      address: 'khadakjamb',
      mobile: '8390613529',
      email: 'satishjadhav87@gmail.com',
      dob: new Date('dd/mm/yyyy'),
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
    return this.members[index];
  }

  getRecentMembers()
  {
    return this.members.slice(-5);
  }
}
