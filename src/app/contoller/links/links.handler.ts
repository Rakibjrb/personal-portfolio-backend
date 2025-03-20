import { Router } from 'express';
import { get_links } from './links.controller';
import { verify_frontend } from '../../middlewares/token';
const route = Router();

route.get('/get', verify_frontend, get_links);

export const linkshandler = route;
