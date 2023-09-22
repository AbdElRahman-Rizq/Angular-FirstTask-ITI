import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  todosList: string[] = [];
  taskName: string = '';
  addToTodos() {
    if(this.taskName !== "")
    this.todosList.push(this.taskName);
    this.taskName = '';
  }

  removeTodo(i: number) {
    this.todosList = this.todosList.filter((todo, index) => index != i);
  }

}
