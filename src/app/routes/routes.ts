import { Router } from 'express';
import handler from './handlers';

const router = Router();

const all_routes = [
  {
    path: '/links',
    route: handler.linkshandler,
  },
];

all_routes.forEach((route) => router.use(route.path, route.route));

export default router;
