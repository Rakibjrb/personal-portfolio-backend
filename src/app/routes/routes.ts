import { Router } from 'express';
import handler from './handlers';

const router = Router();

const all_routes = [
  {
    path: '/links',
    route: handler.linkshandler,
  },
  {
    path: '/projects',
    route: handler.projects_handlers,
  },
];

all_routes.forEach((route) => router.use(route.path, route.route));

export default router;
