import { Router } from 'express';
import { get_links } from './links.controller';
const route = Router();

route.get('/get', get_links);

export const linkshandler = route;
