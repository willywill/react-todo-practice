export default {
  async createTask (req, res) {
    res.status(200).send({ message: 'Created a task!' });
  },

  async getAllTasks (req, res) {
    res.status(200).send({ message: 'Got all tasks!' });
  },

  async getTask (req, res) {
    res.status(200).send({ message: 'Got a single task!' });
  },

  async removeTask (req, res) {
    res.status(200).send({ message: 'Removed a task!' });
  },

  async updateTask (req, res) {
    res.status(200).send({ message: 'Updated a task!' });
  }
}
