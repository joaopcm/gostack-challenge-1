import { Router } from 'express';

import ProjectController from './app/controllers/ProjectController';
import TaskController from './app/controllers/TaskController';

const routes = new Router();

routes.get('/projects', ProjectController.index);
routes.post('/projects', ProjectController.store);
routes.put('/projects/:project_id', ProjectController.update);

routes.post('/projects/:project_id/tasks', TaskController.store);

export default routes;
