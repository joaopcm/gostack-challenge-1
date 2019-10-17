import * as Yup from 'yup';

import Project from '../schemas/Project';

class ProjectController {
  async index(req, res) {
    const { page = 1, quantity = 20 } = req.query;

    const projects = await Project.find({
      is_deleted: false,
    })
      .limit(Number(quantity))
      .skip((page - 1) * quantity);

    return res.json(projects);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation failed' });
    }

    const { title } = req.body;

    const project = await Project.create({ title });

    return res.json(project);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      project_id: Yup.string().required(),
      title: Yup.string().required(),
    });

    if (!(await schema.isValid({ ...req.body, ...req.params }))) {
      return res.status(400).json({ error: 'Validation failed' });
    }

    const { project_id } = req.params;
    const { title } = req.body;

    const project = await Project.findById(project_id);

    if (!project) {
      return res.status(400).json({ error: 'Project does not exist' });
    }

    project.title = title;
    project.save();

    return res.json(project);
  }
}

export default new ProjectController();
