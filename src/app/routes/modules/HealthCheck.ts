import { Router } from 'express';
import { checkhealth } from '../../contoller/checkhealth';
const route = Router();

route.get('/', checkhealth);

export const CheckHealthRoutes = route;
