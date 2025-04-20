import { admin_handler } from '../contoller/admin/admin.handler';
import { blogs_handler } from '../contoller/blogs/blogs.handler';
import { contacts_handler } from '../contoller/contacts/contacts.handler';
import { linkshandler } from '../contoller/links/links.handler';
import { projects_handlers } from '../contoller/projects/projects.handler';

const handler = {
  linkshandler,
  projects_handlers,
  contacts_handler,
  blogs_handler,
  admin_handler,
};

export default handler;
