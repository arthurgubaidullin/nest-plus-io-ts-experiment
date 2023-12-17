import { TodosRepository } from '@nest-plus-io-ts-experiment/repository-type-in-todos';
import { TodosInMemoryRepository as TodosInMemoryImplRepository } from '@nest-plus-io-ts-experiment/todos-in-memory-repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TodosInMemoryRepository
  extends TodosInMemoryImplRepository
  implements TodosRepository {}
