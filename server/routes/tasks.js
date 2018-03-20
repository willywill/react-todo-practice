import express from 'express';
import TaskController from '../controllers/TaskController'

const tasks = express.Router();

tasks.post('/tasks', TaskController.getAllTasks);
tasks.post('/task', TaskController.getTask);
tasks.delete('/task', TaskController.removeTask);

export default tasks;