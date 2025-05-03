import { Router } from 'express';
import { get_blogs, get_latest_blogs, post_blog } from './blogs.contoller';

const route = Router();

route.get('/blog/:id', get_blogs);
route.get('/latest', get_latest_blogs);

//admin route
route.post('/post', post_blog);

export const blogs_handler = route;
