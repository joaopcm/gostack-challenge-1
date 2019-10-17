import * as Yup from 'yup';

import Project from '../schemas/Project';

class TaskController {
  async store(req, res) {
    // const schema = Yup.object().shape({
    //   title: Yup.string().required(),
    // });

    // if (!(await schema.isValid(req.body))) {
    //   return res.status(400).json({ error: 'Validation failed' });
    // }

    return res.json({ ok: true });
  }
}

export default new TaskController();
