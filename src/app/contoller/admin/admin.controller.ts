import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '../../../config/config';
import { sendresponse } from '../../utils/sendres';
import crypto from 'crypto';

const loginToken = () => {
  const encrypt = crypto.randomBytes(64).toString('base64');
  return jwt.sign(encrypt, config.admin_token as string);
};

const adminLogin = (req: any, res: any, next: any) => {
  try {
    const info = req.body;
    const credentials = `${info.email}${info.password}`;

    bcrypt.compare(
      credentials,
      config.admin_token as string,
      (err, isMatch) => {
        if (err) {
          return sendresponse(res, 401, 'error on decode');
        }
        if (isMatch) {
          return res.status(200).send({ login: true, token: loginToken() });
        }
        return res.status(200).send({ login: false, token: null });
      },
    );
  } catch (error) {
    sendresponse(res, 404, 'something went wrong');
  }
};

export { adminLogin };
