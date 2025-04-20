import { Router } from 'express';
import { verify_frontend } from '../../middlewares/token';
import { adminLogin } from './admin.controller';

const route = Router();

route.post('/login', verify_frontend, adminLogin);

export const admin_handler = route;
