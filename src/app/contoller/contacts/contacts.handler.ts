import { Router } from 'express';
import { verify_frontend } from '../../middlewares/token';
import {
  delete_contact_by_id,
  get_contacts,
  get_contact_by_id,
  post_contact,
} from './contacts.controller';
const route = Router();

route.post('/post', verify_frontend, post_contact);

//admin routes
route.get('/get', get_contacts);
route.get('/get/:id', get_contact_by_id);
route.delete('/delete/:id', delete_contact_by_id);

export const contacts_handler = route;
