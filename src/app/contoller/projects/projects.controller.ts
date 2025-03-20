import { sendresponse } from '../../utils/sendres';
import Projects from './projects.model';

const get_latest_projects = async (req: any, res: any, next: any) => {
  try {
    const latest_projects = await Projects.find(
      { type: 'latest' },
      '_id image project_name',
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
      const projects = await Projects.find({}, '_id image project_name').sort({
        date: -1,
      });
      sendresponse(res, 200, projects);
    } else if (
      category === 'mern' ||
      category === 'frontend' ||
      category === 'basic' ||
      category === 'pending'
    ) {
      const projects = await Projects.find(
        { category },
        '_id image project_name',
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

export { get_latest_projects, get_project_by_id, get_projects_by_category };
