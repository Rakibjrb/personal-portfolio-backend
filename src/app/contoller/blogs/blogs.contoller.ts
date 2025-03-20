import { sendresponse } from '../../utils/sendres';
import Blogs from './blogs.model';

const get_blogs = async (req: any, res: any, next: any) => {
  try {
    const _id = req.params.id;
    const query = req.query;
    if (_id == 'all') {
      const blogs = await Blogs.find({})
        .skip(query.skip)
        .limit(9)
        .sort({ like: -1 });
      return sendresponse(res, 200, blogs);
    }
    const blog = await Blogs.findOne({ _id });
    return sendresponse(res, 200, blog);
  } catch (error) {
    next(error);
  }
};

const get_latest_blogs = async (req: any, res: any, next: any) => {
  try {
    const latest_blogs = await Blogs.find({ type: 'latest' }).sort({
      like: -1,
    });
    return sendresponse(res, 200, latest_blogs);
  } catch (error) {
    next(error);
  }
};

const post_blog = async (req: any, res: any, next: any) => {
  try {
    const data = req.body;
    const posted = await Blogs.create(data);
    sendresponse(res, 201, posted);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export { get_blogs, get_latest_blogs, post_blog };
