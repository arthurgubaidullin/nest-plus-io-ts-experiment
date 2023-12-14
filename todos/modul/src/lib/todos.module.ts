import { Module } from '@nestjs/common';
import { TodosRepository } from './todos.service';
import { TodosController } from './todos.controller';

@Module({
  controllers: [TodosController],
  providers: [TodosRepository],
  exports: [],
})
export class TodosModule {}
