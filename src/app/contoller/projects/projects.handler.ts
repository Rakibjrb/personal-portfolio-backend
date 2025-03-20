import { Router } from 'express';
import { verify_frontend } from '../../middlewares/token';
import {
  change_project_type,
  get_latest_projects,
  get_project_by_id,
  get_projects_by_category,
  like_project,
  post_project,
} from './projects.controller';
const route = Router();

route.get('/latest', verify_frontend, get_latest_projects);
route.get('/project/:id', verify_frontend, get_project_by_id);
route.get('/category/:category', verify_frontend, get_projects_by_category);

//route for admin
route.post('/post', verify_frontend, post_project);
route.put('/like/:id', verify_frontend, like_project);
route.put('/project-type/:id', verify_frontend, change_project_type);

export const projects_handlers = route;
