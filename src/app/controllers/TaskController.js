import * as Yup from 'yup';

import Project from '../schemas/Project';

class TaskController {
  async store(req, res) {
    const schema = Yup.object().shape({
      id: Yup.string()
        .required()
        .length(24),
      tasks: Yup.string().required(),
    });

    if (!(await schema.isValid({ ...req.body, ...req.params }))) {
      return res.status(400).json({ error: 'Validation failed' });
    }

    const { id } = req.params;
    const { tasks } = req.body;

    const project = await Project.findById(id);

    project.tasks = [
      ...project.tasks,
      ...tasks.split(',').map(task => task.trim()),
    ];

    project.save();

    return res.json(project);
  }
}

export default new TaskController();
