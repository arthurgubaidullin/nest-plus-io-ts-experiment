import { Module } from '@nestjs/common';
import { TodosInMemoryRepository } from './todos.in-memory.repository';
import { TodosController } from './todos.controller';

@Module({
  controllers: [TodosController],
  providers: [TodosInMemoryRepository],
  exports: [],
})
export class TodosModule {}
