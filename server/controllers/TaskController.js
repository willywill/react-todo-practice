export default {
  async getAllTasks (req, res) {
    res.status(200).send({ message: 'Got all tasks!' });
  },

  async getTask (req, res) {
    res.status(200).send({ message: 'Got a single task!' });
  },

  async removeTask (req, res) {
    res.status(200).send({ message: 'Removed a task!' });
  }
}
