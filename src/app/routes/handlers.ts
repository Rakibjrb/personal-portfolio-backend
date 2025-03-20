import { contacts_handler } from '../contoller/contacts/contacts.handler';
import { linkshandler } from '../contoller/links/links.handler';
import { projects_handlers } from '../contoller/projects/projects.handler';

const handler = {
  linkshandler,
  projects_handlers,
  contacts_handler,
};

export default handler;
