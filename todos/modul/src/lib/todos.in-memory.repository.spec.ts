import { Test, TestingModule } from '@nestjs/testing';
import { TodosInMemoryRepository } from './todos.in-memory.repository';

describe('TodosRepository', () => {
  let repository: TodosInMemoryRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TodosInMemoryRepository],
    }).compile();

    repository = module.get<TodosInMemoryRepository>(TodosInMemoryRepository);
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });
});
