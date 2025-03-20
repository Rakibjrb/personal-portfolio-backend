import cors from 'cors';
import config from '../../config/config';

const middlewares = (app: any, express: any) => {
  app.use(
    cors({
      origin: [config.origin as string],
      credentials: true,
    }),
  );

  app.use(express.json());
};

export { middlewares };
