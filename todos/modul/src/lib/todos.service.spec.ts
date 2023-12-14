import { Test, TestingModule } from '@nestjs/testing';
import { TodosService } from './todos.service';
import { TodosInMemoryRepository } from './todos.in-memory.repository';

describe('TodosService', () => {
  let service: TodosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TodosService, TodosInMemoryRepository],
    }).compile();

    service = module.get<TodosService>(TodosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
