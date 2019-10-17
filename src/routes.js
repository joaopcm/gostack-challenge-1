import { Router } from 'express';

import ProjectController from './app/controllers/ProjectController';
import TaskController from './app/controllers/TaskController';

import countRequests from './app/middlewares/countRequests';
import verifyProject from './app/middlewares/verifyProject';

const routes = new Router();

routes.use(countRequests);

routes.get('/projects', ProjectController.index);
routes.post('/projects', ProjectController.store);
routes.put('/projects/:id', verifyProject, ProjectController.update);
routes.delete('/projects/:id', verifyProject, ProjectController.delete);

routes.post('/projects/:id/tasks', verifyProject, TaskController.store);

export default routes;
