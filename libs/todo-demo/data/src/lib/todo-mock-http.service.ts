import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Todo } from './todo.model';

@Injectable({
	providedIn: 'root',
})
export class MockTodoHttpService {
	public getTodos(): Promise<Todo[]> {
		// Hier könntest du einige vordefinierte Todos zurückgeben
		return Promise.resolve([
			{ id: 1, title: 'Todo-App fertigstellen', completed: false },
		]);
	}

	public addTodo(todo: Todo) {
		// Hier könntest du logischerweise das hinzugefügte Todo zurückgeben
		return Promise.resolve(todo);
	}

	public updateTodo(todo: Todo) {
		// Hier könntest du logischerweise das aktualisierte Todo zurückgeben
		return Promise.resolve(todo);
	}

	public deleteTodo(todoId: number) {
		// Hier könnte einfach ein Erfolgssignal zurückgegeben werden
		return Promise.resolve(null);
	}
}
