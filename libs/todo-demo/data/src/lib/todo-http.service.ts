import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './todo.model';
import { lastValueFrom } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class TodoHttpService {
	private http = inject(HttpClient);
	//constructor() { }

	public getTodos() {
		return lastValueFrom(this.http.get<Todo[]>('/api/todo'));
	}

	//public createTodos(todo: Todo)   {
	//const todo: Todo = {title: 'item1', completed: false};
	//  return this.http.post<Todo>('/api/todo', todo);
	//}

	public addTodo(todo: Todo): Promise<Todo> {
		return lastValueFrom(this.http.post<Todo>('/api/todo', todo));
	}

	public updateTodo(todo: Todo): Promise<Todo> {
		return lastValueFrom(this.http.put<Todo>(`/api/todo/${todo.id}`, todo));
	}

	public deleteTodo(todoId: number): Promise<void> {
		return lastValueFrom(this.http.delete<void>(`/api/todo/${todoId}`));
	}
}
