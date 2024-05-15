import { Module } from '@nestjs/common';
import { TodosService } from './todos/todos.service';
import { TodosController } from './todos/todos.controller';

@Module({
  imports: [],
  controllers: [ TodosController],
  providers: [ TodosService],
})
export class AppModule {}
