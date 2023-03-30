import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent {
  addNew: boolean = true;
  @Output() newItemEvent = new EventEmitter<boolean>();

  constructor(private empService:EmployeeService)
  {}


  onSubmit(form: NgForm) {
    console.log(form.value);
    this.addNew = !this.addNew;
    this.newItemEvent.emit(this.addNew);
    this.empService.addMember(form.value);
    form.reset();
  }

  onCancle()
  {
    this.addNew = !this.addNew;
    this.newItemEvent.emit(this.addNew);
  }
}
