import send_mail from '../../utils/sendmail';
import { sendresponse } from '../../utils/sendres';
import Contacts from './contacts.model';

const post_contact = async (req: any, res: any, next: any) => {
  try {
    const contact_data = req.body;
    await Contacts.create({ ...contact_data, status: 'unread' });
    send_mail(contact_data);
    sendresponse(res, 201, contact_data);
  } catch (error) {
    next(error);
  }
};

const get_contacts = async (req: any, res: any, next: any) => {
  try {
    const all_contacts = await Contacts.find({});
    sendresponse(res, 200, all_contacts);
  } catch (error) {
    next(error);
  }
};

const get_contact_by_id = async (req: any, res: any, next: any) => {
  try {
    const id = req.params.id;
    const contact = await Contacts.findOne({ _id: id });
    sendresponse(res, 200, contact);
    await Contacts.updateOne({ _id: id }, { status: 'viewed' });
  } catch (error) {
    next(error);
  }
};

const delete_contact_by_id = async (req: any, res: any, next: any) => {
  try {
    const id = req.params.id;
    await Contacts.deleteOne({ _id: id });
    sendresponse(res, 200, 'contact deleted');
  } catch (error) {
    next(error);
  }
};

export { post_contact, get_contacts, get_contact_by_id, delete_contact_by_id };
