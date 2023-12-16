import { Test, TestingModule } from '@nestjs/testing';
import { TodosController } from './todos.controller';

import { TodosInMemoryRepository } from './todos.in-memory.repository';

describe('TodosController', () => {
  let controller: TodosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TodosController],
      providers: [TodosInMemoryRepository],
    }).compile();

    controller = module.get<TodosController>(TodosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
