import axios from 'axios';
import { randomUUID } from 'crypto';

describe('GET /api/todos', () => {
  it('should add todo', async () => {
    const createTodo = {
      _tag: 'CreateTodo',
      value: {
        id: 'test' + randomUUID(),
        content: 'test',
        createdAt: new Date().toISOString(),
      },
    };
    const res = await axios.post(`/api/todos/commands`, createTodo);

    expect(res.status).toBe(201);
  });

  it('should not add todo', async () => {
    const createTodo = { id: 'test' + randomUUID() };

    expect(
      async () => await axios.post(`/api/todos/commands`, createTodo)
    ).rejects.toThrow();
  });

  it('should get all todo', async () => {
    const createTodo = {
      _tag: 'CreateTodo',
      value: {
        id: 'test' + randomUUID(),
        content: 'test',
        createdAt: new Date().toISOString(),
      },
    };
    await axios.post(`/api/todos/commands`, createTodo);

    const res = await axios.get(`/api/todos`);

    expect(res.status).toBe(200);
    expect(res.data).toBeDefined();
  });
});
