import express from 'express';
import router from './app/routes/routes';
import { handle_errors, invalid_routes } from './app/contoller/checkhealth';
const app = express();

//app routes
app.use(router);

//server invalid routes and error handling part
app.all('*', invalid_routes);
app.use(handle_errors);

export { app };
