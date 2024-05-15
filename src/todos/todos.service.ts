import { Injectable , NotFoundException} from '@nestjs/common';
import { Todos } from 'src/todos.model';
import { TodoInitial } from './todos.mock';

@Injectable()
export class TodosService {
    private todos: Todos[] = TodoInitial;
  
    async createTodo(title: string, description: string): Promise<Todos> {
      const id = this.todos.length + 1;
      const todo: Todos = {
        id,
        title,
        description,
        status: 'UNCOMPLETED',
      };
      this.todos.push(todo);
      return todo;
    }
  
    getAllTodos(): Todos[] {
      return this.todos;
    }
  
    async getTodoById(id: number): Promise<Todos> {
      const foundTodo = this.todos.find(todo => todo.id === id);
      if (!foundTodo) {
        throw new NotFoundException(`Todo with ID ${id} not found`);
      }
      return foundTodo;
    }
  
    async updateTodo(id: number, title: string, description: string): Promise<Todos> {
      const todo = await this.getTodoById(id);
      todo.title = title;
      todo.description = description;
      return todo;
    }
  
    async deleteTodo(id: number): Promise<void> {
      const index = this.todos.findIndex(todo => todo.id === id);
      if (index === -1) {
        throw new NotFoundException(`Todo with ID ${id} not found`);
      }
      this.todos.splice(index, 1);
    }

    async toggleTodoStatus(id: number): Promise<Todos> {
        const todo = await this.getTodoById(id);
        todo.status = todo.status === 'COMPLETED' ? 'UNCOMPLETED' : 'COMPLETED';
        return todo;
      }
  }
