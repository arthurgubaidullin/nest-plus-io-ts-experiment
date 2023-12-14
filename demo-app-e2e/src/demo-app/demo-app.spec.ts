import axios from 'axios';

describe('GET /api/todos', () => {
  it('should add todo', async () => {
    const createTodo = {
      id: 'test',
      content: 'test',
    };
    const res = await axios.post(`/api/todos`, createTodo);

    expect(res.status).toBe(201);
  });

  it('should not add todo', async () => {
    const createTodo = { id: 'test' };

    expect(
      async () => await axios.post(`/api/todos`, createTodo)
    ).rejects.toThrow();
  });

  it('should get all todo', async () => {
    const res = await axios.get(`/api/todos`);

    expect(res.status).toBe(200);
  });
});
