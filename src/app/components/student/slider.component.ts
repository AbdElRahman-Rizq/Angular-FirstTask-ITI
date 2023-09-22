import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl:'./slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  studentName: string = '';
  studentAge: string = '';
  studentsList: {name: string, age: string}[] = [];
  isValid:  boolean = false;

  login(e: Event) {
    e.preventDefault();
  }
  addStudent(){
    if(this.isValid){
      this.studentsList.push({name: this.studentName, age: this.studentAge});;
      this.studentName = '';
      this.studentAge = '';
    }
  }
  removeStudent(i: number){
    this.studentsList = this.studentsList.filter((student, index) => index != i);
  }

  get isStudentNameValid() {
    this.isValid = this.studentName.length >= 3
    return this.studentName.length >= 3;
  }

  get isStudentNameEmpty() {
    this.isValid = this.studentName.length == 0
    return this.studentName.length == 0;
  }
  get isStudentAgeValid() {
    this.isValid = Number(this.studentAge) >= 18 && Number(this.studentAge) <= 30;
    return Number(this.studentAge) >= 18 && Number(this.studentAge) <= 30;
  }

  get isStudentAgeEmpty() {
    this.isValid = this.studentAge.length == 0
    return this.studentAge.length == 0;
  }
}