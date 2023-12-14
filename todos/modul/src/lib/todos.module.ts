import { Module } from '@nestjs/common';
import { InMemoryRepository } from './todos.in-memory.repository';
import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';

@Module({
  controllers: [TodosController],
  providers: [InMemoryRepository, TodosService],
  exports: [],
})
export class TodosModule {}
