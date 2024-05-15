import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosService } from './todos/todos.service';
import { TodoService } from './todo/todo.service';
import { TodosController } from './todos/todos.controller';

@Module({
  imports: [],
  controllers: [AppController, TodosController],
  providers: [AppService, TodosService, TodoService],
})
export class AppModule {}
