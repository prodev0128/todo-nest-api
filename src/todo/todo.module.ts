import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { Todo, TodoSchema } from './schemas/todo.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Todo.name, schema: TodoSchema }]),
  ],
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}
