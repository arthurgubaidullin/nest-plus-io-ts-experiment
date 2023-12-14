import { Module } from '@nestjs/common';
import { TodosRepository } from './todos.repository';
import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';

@Module({
  controllers: [TodosController],
  providers: [TodosRepository, TodosService],
  exports: [],
})
export class TodosModule {}
