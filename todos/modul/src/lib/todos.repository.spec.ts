import { Test, TestingModule } from '@nestjs/testing';
import { TodosRepository } from './todos.repository';

describe('TodosRepository', () => {
  let repository: TodosRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TodosRepository],
    }).compile();

    repository = module.get<TodosRepository>(TodosRepository);
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });
});
