import express from 'express';
import router from './app/routes/routes';
import { handle_errors, invalid_routes } from './app/contoller/handle_errors';
import { middlewares } from './app/middlewares/middlewares';
const app = express();

//initial get function
app.get('/', (req, res, next) => {
  try {
    res.send({
      status: 200,
      message: 'Server working fine',
      working: true,
    });
  } catch (error) {
    next(error);
  }
});

//middleware functions
middlewares(app, express);

//app routes
app.use('/api', router);

//server invalid routes and error handling part
app.all('*', invalid_routes);
app.use(handle_errors);

export { app };
