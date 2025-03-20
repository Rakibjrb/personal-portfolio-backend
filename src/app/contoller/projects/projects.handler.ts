import { Router } from 'express';
import { verify_frontend } from '../../middlewares/token';
import {
  get_latest_projects,
  get_project_by_id,
  get_projects_by_category,
} from './projects.controller';
const route = Router();

route.get('/latest', verify_frontend, get_latest_projects);
route.get('/project/:id', verify_frontend, get_project_by_id);
route.get('/category/:category', verify_frontend, get_projects_by_category);

export const projects_handlers = route;
