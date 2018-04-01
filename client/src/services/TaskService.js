import API from './api';

export default {
  async getTodo (todoId) {
    return API().get(`/api/task/${todoId}`);
  },

  async getAllTodos () {
    return API().get('/api/tasks');
  },

  async createTodo () {
    return API().post('/api/task');
  },

  async updateTodo (todoId) {
    return API().put(`/api/task/${todoId}`);
  },

  async deleteTodo (todoId) {
    return API().delete(`/api/task/${todoId}`);
  }
}
