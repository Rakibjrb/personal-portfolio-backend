import { Router } from 'express';
import { CheckHealthRoutes } from './modules/HealthCheck';

const router = Router();

const all_routes = [
  {
    path: '/',
    route: CheckHealthRoutes,
  },
];

all_routes.forEach((route) => router.use(route.path, route.route));

export default router;
