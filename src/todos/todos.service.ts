import { Injectable } from '@nestjs/common';
import { Todos } from 'src/todos.model';

@Injectable()
export class TodosService {
    private todos: Todos[] = [];

  createTodo(title: string, description: string): Todos {
    const id = this.todos.length + 1;
    const todo: Todos = {
      id,
      title,
      description,
      status: 'COMPLETED',
    };
    this.todos.push(todo);
    return todo;
  }

  getAllTodos(): Todos[] {
    return this.todos;
  }

  getTodoById(id: number): Todos {
    return this.todos.find((todo) => todo.id === id);
  }

  updateTodoStatus(id: number, status: 'UNCOMPLETED' | 'COMPLETED'): Todos {
    const todo = this.getTodoById(id);
    if (todo) {
      todo.status = status;
    }
    return todo;
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
    
}
