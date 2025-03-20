import { sendresponse } from '../../utils/sendres';
import Links from './links.model';

const get_links = async (req: any, res: any, next: any) => {
  try {
    const links = await Links.find({});
    sendresponse(res, 200, links);
  } catch (error) {
    console.log('error: ', error);
    next(error);
  }
};

export { get_links };
