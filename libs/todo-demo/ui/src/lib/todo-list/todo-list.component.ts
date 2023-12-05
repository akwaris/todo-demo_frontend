import {
	Component,
	EventEmitter,
	Input,
	OnChanges,
	OnDestroy,
	OnInit,
	Output,
	SimpleChanges,
} from '@angular/core';
import { Todo } from '@todo-demo/data';

@Component({
	selector: 'ui-todo-list',
	templateUrl: './todo-list.component.html',
	styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit, OnChanges, OnDestroy {
	@Input() todos: Todo[] = [];

	@Output() update = new EventEmitter<Todo>();

	@Output() delete = new EventEmitter<number>();

	onDelete(todoId: number) {
		this.delete.emit(todoId);
	}

	onUpdate(todo: Todo) {
		todo.completed = !todo.completed;
		this.update.emit({ ...todo });
	}

	constructor() {
		console.log('TodoListComponent # ctor');
	}

	ngOnChanges(changes: SimpleChanges): void {
		console.log('TodoListComponent # on changes', changes);
	}

	ngOnInit(): void {
		console.log('TodoListComponent # on init');
	}

	ngOnDestroy(): void {
		console.log('TodoListComponent # on destroy');
	}
}
