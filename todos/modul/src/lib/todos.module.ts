import { Module } from '@nestjs/common';
import { TodosInMemoryRepository } from './todos.in-memory.repository';
import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';

@Module({
  controllers: [TodosController],
  providers: [TodosInMemoryRepository, TodosService],
  exports: [],
})
export class TodosModule {}
