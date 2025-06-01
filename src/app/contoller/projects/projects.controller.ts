import { sendresponse } from '../../utils/sendres';
import Projects from './projects.model';

const get_latest_projects = async (req: any, res: any, next: any) => {
  try {
    const latest_projects = await Projects.find(
      { type: 'latest' },
      '_id image project_name type category',
    ).sort({
      date: -1,
    });

    sendresponse(res, 200, latest_projects);
  } catch (error) {
    next(error);
  }
};

const get_project_by_id = async (req: any, res: any, next: any) => {
  try {
    const _id = req.params.id;
    const found = await Projects.findOne({ _id });
    sendresponse(res, 200, found);
  } catch (error) {
    next(error);
  }
};

const get_projects_by_category = async (req: any, res: any, next: any) => {
  try {
    const category = req.params.category;
    if (category === 'all') {
      const projects = await Projects.find(
        {},
        '_id image project_name type category',
      ).sort({
        date: -1,
      });
      sendresponse(res, 200, projects);
    } else if (
      category === 'mern' ||
      category === 'frontend' ||
      category === 'unique' ||
      category === 'pending'
    ) {
      const projects = await Projects.find(
        { category },
        '_id image project_name type category',
      ).sort({
        date: -1,
      });
      sendresponse(res, 200, projects);
    } else {
      res.send([]);
    }
  } catch (error) {
    next(error);
  }
};

const post_project = async (req: any, res: any, next: any) => {
  try {
    const data = req.body;
    const uploaded = await Projects.create(data);
    sendresponse(res, 201, uploaded);
  } catch (error) {
    next(error);
  }
};

const like_project = async (req: any, res: any, next: any) => {
  try {
    const id = req.params.id;
    const like = req.body.like + 1;
    const liked = await Projects.updateOne({ _id: id }, { recected: like });
    sendresponse(res, 201, liked);
  } catch (error) {
    next(error);
  }
};

const change_project_type = async (req: any, res: any, next: any) => {
  try {
    const _id = req.params.id;
    const type = req.body.type;
    if (type === 'old') {
      const removed = await Projects.updateOne({ _id }, { type: 'old' });
      sendresponse(res, 201, removed);
    } else if (type === 'latest') {
      const removed = await Projects.updateOne({ _id }, { type: 'latest' });
      sendresponse(res, 201, removed);
    } else {
      sendresponse(res, 401, 'something went wrong !!!');
    }
  } catch (error) {
    next(error);
  }
};

export {
  get_latest_projects,
  get_project_by_id,
  get_projects_by_category,
  post_project,
  like_project,
  change_project_type,
};
