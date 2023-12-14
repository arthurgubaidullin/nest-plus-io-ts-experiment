import { Module } from '@nestjs/common';
import { TodosRepository } from './todos.repository';
import { TodosController } from './todos.controller';

@Module({
  controllers: [TodosController],
  providers: [TodosRepository],
  exports: [],
})
export class TodosModule {}
