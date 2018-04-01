import { Task as Tasks } from '../models';

export default {
  async createTask (req, res) {
    await Tasks.create(req.body);
    res.status(200).send({ response: `Created a task!` });
  },

  async getAllTasks (req, res) {
    const tasks = await Tasks.findAll({ order: [['updatedAt', 'DESC']] });
    const taskList = [];
    tasks.map(task => taskList.push({ 
        taskID: task.dataValues.id,
        taskDesc: task.dataValues.taskDescription 
    }));
    res.status(200).send({ response: taskList });
  },

  async getTask (req, res) {
    const taskDesc = await Tasks.findById(req.params.id);

    if (taskDesc) {
      const task = { 
        taskID: taskDesc.dataValues.id,
        taskDesc: taskDesc.dataValues.taskDescription 
      };
      res.status(200).send({ response: task });
    } else {
      res.status(404).send({ error: 'This resource does not exist.' });
    }
  },

  async removeTask (req, res) {
    const task = await Tasks.findOne({
      where: {
        id: req.params.id
      }
    });
    
    task ? task.destroy().then(() => 
      res.status(200).send({ response: 'Removed task!' })) 
      : res.status(404).send({ error: 'This resource does not exist.' });
  },

  async updateTask (req, res) {
    const task = await Tasks.update(req.body, {
      where: {
        id: req.params.id
      }
    });

    if (task) {
      const newTask = { 
        taskID: req.params.id,
        taskDesc: req.body.taskDescription 
      };
      res.status(200).send({ response: newTask });
    } else {
      res.status(404).send({ error: 'This resource does not exist.' });
    }
  }
}
