import express from 'express';
import TaskController from '../controllers/TaskController'

const tasks = express.Router();

tasks.post('/task', TaskController.createTask);
tasks.get('/tasks', TaskController.getAllTasks);
tasks.get('/task/:id', TaskController.getTask);
tasks.put('/task/:id', TaskController.updateTask);
tasks.delete('/task/:id', TaskController.removeTask);

export default tasks;
