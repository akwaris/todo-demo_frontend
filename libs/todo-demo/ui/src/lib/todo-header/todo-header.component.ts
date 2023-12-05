import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '@todo-demo/data';

@Component({
	selector: 'ui-todo-header',
	templateUrl: './todo-header.component.html',
	styleUrls: ['./todo-header.component.css'],
})
export class TodoHeaderComponent {
	@Input() todos: Todo[] = [];

	@Output() add = new EventEmitter<Todo>();

	title = '';

	onEnter() {
		const todo: Todo = { title: this.title, completed: false };

		this.add.emit(todo);

		this.title = '';
	}
}
