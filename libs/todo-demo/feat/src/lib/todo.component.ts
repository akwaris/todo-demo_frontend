import {
	Component,
	inject,
	OnChanges,
	OnInit,
	SimpleChanges,
} from '@angular/core';
import { Todo } from '@todo-demo/data';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { TodoHttpService } from '../../../data/src/lib/todo-http.service';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { MockTodoHttpService } from '../../../data/src/lib/todo-mock-http.service';

@Component({
	selector: 'feat-todo',
	template: `
		<ui-todo-header (add)="onAdd($event)"> </ui-todo-header>

		<ui-todo-list
			[todos]="todos"
			(update)="onUpdate($event)"
			(delete)="onDelete($event)"
		>
		</ui-todo-list>

		<ui-todo-footer [todos]="todos"> </ui-todo-footer>
	`,
	styles: [],
})
export class TodoComponent implements OnInit {
	private todoService = inject(MockTodoHttpService);
	//private todoService = inject(TodoHttpService);
	//
	// State
	// todos: Todo[] = [
	//  { id: 1, title: 'Banana', completed: false},
	//  { id: 2,title: 'Apple', completed: false},
	//  { id: 3,title: 'Strawberry', completed: false},
	// ]

	//State
	todos: Todo[] = [];

	constructor() {
		console.log('TodoComponent # ctor');
	}

	ngOnInit() {
		console.log('TodoComponent # on init');

		this.todoService.getTodos().then((todos) => {
			console.log('todos from the server', todos);
			this.todos = todos;
		});

		console.log('TodoComponent # on init end');
	}

	onAdd(todo: Todo) {
		//immutable update
		// this.todos = this.todos.concat(todo);
		//on response immutable update todo array

		const lastId = Math.max(...this.todos.map((td) => td.id ?? 0), 0);

		this.todoService.addTodo(todo).then((todo: Todo) => {
			todo.id = lastId + 1;
			this.todos = [...this.todos, todo];
		});
	}

	onDelete(todoId: number) {
		// api request
		// on response immutable update todo array

		this.todoService.deleteTodo(todoId).then(() => {
			this.todos = this.todos.filter((todo) => todo.id !== todoId);
		});
	}

	onUpdate(todo: Todo) {
		// api request
		// on response immutable update todo array

		this.todoService.updateTodo(todo).then((updatedTodo: Todo) => {
			this.todos = [updatedTodo];
		});
	}
}
