import { Controller, Get, Post, Param, Body, Put, Delete, NotFoundException, Patch } from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todos } from 'src/todos.model'; 

@Controller('todos')
export class TodosController {
  constructor(private todosService: TodosService) {}

  @Post()
  async createTodo(
    @Body() create: { title: string; description: string }
  ): Promise<Todos> {
    return this.todosService.createTodo(create.title, create.description);
  }

  @Get()
  getAllTodos(): Todos[] {
    return this.todosService.getAllTodos();
  }

  @Get(':id')
  async getTodoById(@Param('id') id: string): Promise<Todos> {
    const todoId = parseInt(id, 10);
    const todo = await this.todosService.getTodoById(todoId);
    if (!todo) {
      throw new NotFoundException(`Todo with ID ${id} not found`);
    }
    return todo;
  }

  @Put(':id')
  async updateTodo(
    @Param('id') id: string,
    @Body() update: { title: string; description: string }
  ): Promise<Todos> {
    const todoId = parseInt(id, 10);
    return this.todosService.updateTodo(todoId, update.title, update.description);
  }

  @Delete(':id')
  async deleteTodo(@Param('id') id: string): Promise<void> {
    const todoId = parseInt(id, 10);
    await this.todosService.deleteTodo(todoId);
  }



  @Put(':id/toggle')
  async toggleTodoStatus(@Param('id') id: string): Promise<Todos> {
    const todoId = parseInt(id, 10);
    return this.todosService.toggleTodoStatus(todoId);
  }
}



