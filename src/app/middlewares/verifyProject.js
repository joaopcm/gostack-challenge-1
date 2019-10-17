import * as Yup from 'yup';

import Project from '../schemas/Project';

export default async (req, res, next) => {
  const schema = Yup.object().shape({
    id: Yup.string()
      .required()
      .length(24),
  });

  if (!(await schema.isValid(req.param))) {
    return res.status(400).json({ error: 'Validation failed' });
  }

  const { id } = req.params;

  const project = await Project.findById(id);

  if (!project) {
    return res.status(400).json({ error: 'Project does not exist' });
  }

  return next();
};
