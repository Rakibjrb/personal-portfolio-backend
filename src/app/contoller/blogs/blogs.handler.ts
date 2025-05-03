import { Router } from 'express';
import { get_blogs, get_latest_blogs, post_blog } from './blogs.contoller';
import { verify_frontend } from '../../middlewares/token';

const route = Router();

route.get('/blog/:id', verify_frontend, get_blogs);
route.get('/latest', verify_frontend, get_latest_blogs);

//admin route
route.post('/post', post_blog);

export const blogs_handler = route;
