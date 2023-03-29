import { Component, Input } from '@angular/core';
import { user } from 'src/app/shared/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {


  users:user[] = [
    {
      'name':'satish jadhav',
      'address':'khadakjamb',
      'mobile':'8390613529',
      'email':'satishjadhav87@gmail.com'
    },
    {
      'name':'satish jadhav',
      'address':'khadakjamb',
      'mobile':'8390613529',
      'email':'satishjadhav87@gmail.com'
    },
    {
      'name':'satish Bhausaheb jadhav',
      'address':'khadakjamb',
      'mobile':'8390613529',
      'email':'satishj@gmail.com'
    },
    {
      'name':'satish jadhav',
      'address':'khadakjamb ,Nashik',
      'mobile':'8390613529',
      'email':'satishjadhav87@gmail.com'
    },
    {
      'name':'satish jadhav',
      'address':'khadakjamb',
      'mobile':'8390613529',
      'email':'satishjadhav87@gmail.com'
    },
    {
      'name':'shwta',
      'address':'khadakjamb',
      'mobile':'8390613529',
      'email':'satishjadhav87@gmail.com'
    },
    {
      'name':'mahesh',
      'address':'khadakjamb',
      'mobile':'8390613529',
      'email':'satishjadhav87@gmail.com'
    },
    {
      'name':'Bharat',
      'address':'khadakjamb',
      'mobile':'22422343433',
      'email':'satishjadhav87@gmail.com'
    },
    {
      'name':'ramdas',
      'address':'khadakjamb',
      'mobile':'323232323',
      'email':'satishj@gmail.com'
    },
    {
      'name':'sagar',
      'address':'Nashik',
      'mobile':'34354545646',
      'email':'sagar@gmail.com'
    },
    {
      'name':'Rajesh',
      'address':'khadakjamb',
      'mobile':'0987654321',
      'email':'satishjadhav87@gmail.com'
    },
    {
      'name':'ramesh',
      'address':'khadakjamb',
      'mobile':'1234567890',
      'email':'satishjadhav87@gmail.com'
    }
  ]

  recentUser:user[] = this.users.slice(1).slice(-5)

}
