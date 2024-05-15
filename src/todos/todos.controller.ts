// import { Controller, Get, Post, Param, Body, Put, Patch, Delete } from '@nestjs/common';
// import { TodosService } from './todos.service';
// import { Todos } from 'src/todos.model';

// @Controller('todos')
// export class TodosController {
//     constructor (private todosService: TodosService){}

//         @Post()
//         createTodo(@Body() create: { title: string; description: string }): Todo {
//           return this.todosService.createTodo(createTodoDto.title, createTodoDto.description);
//         }
      
//         @Get()
//         getAllTodos(): Todo[] {
//           return this.todosService.getAllTodos();
//         }
      
//         @Get(':id')
//         getTodoById(@Param('id') id: number): Todo {
//           return this.todosService.getTodoById(id);
//         }
      
//         @Put(':id/status')
//         updateTodoStatus(@Param('id') id: number, @Body('status') status: 'UNCOMPLETED' | 'COMPLELETED'): Todo {
//           return this.todosService.updateTodoStatus(id, status);
//         }
      
//         @Delete(':id')
//         deleteTodo(@Param('id') id: number): void {
//           this.todosService.deleteTodo(id);
//         }


// }


import { Controller, Get, Post, Param, Body, Put, Patch, Delete } from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todos } from 'src/todos.model'; // Assuming this is where Todo model is defined

@Controller('todos')
export class TodosController {
    constructor (private todosService: TodosService){}

        @Post()
        createTodo(@Body() create: { title: string; description: string }): Todos {
          return this.todosService.createTodo(create.title, create.description); // Corrected argument names
        }
      
        @Get()
        getAllTodos(): Todos[] {
          return this.todosService.getAllTodos();
        }
      
        @Get(':id')
        getTodoById(@Param('id') id: number): Todos {
          return this.todosService.getTodoById(id);
        }
      
        @Put(':id/status')
        updateTodoStatus(@Param('id') id: number, @Body('status') status: 'UNCOMPLETED' | 'COMPLETED'): Todos { // Corrected spelling of 'COMPLETED'
          return this.todosService.updateTodoStatus(id, status);
        }
      
        @Delete(':id')
        deleteTodo(@Param('id') id: number): void {
          this.todosService.deleteTodo(id);
        }
}