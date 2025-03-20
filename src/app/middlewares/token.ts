import bcrypt from 'bcrypt';
import config from '../../config/config';
import { sendresponse } from '../utils/sendres';

const verify_frontend = (req: any, res: any, next: any) => {
  try {
    const bearer = req.headers.authorization;
    const token = bearer.split(' ')[1];

    bcrypt.compare(config.sitetoken as string, token, (err, isMatch) => {
      if (err) {
        return sendresponse(res, 401, 'error on decode');
      }
      if (isMatch) {
        return next();
      }
      sendresponse(res, 403, 'forbidden access');
    });
  } catch (error) {
    sendresponse(res, 404, 'something went wrong');
  }
};

export { verify_frontend };
