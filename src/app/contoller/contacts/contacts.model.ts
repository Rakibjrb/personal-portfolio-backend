import { model, Schema } from 'mongoose';

const contact_Schema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
    status: { type: String, required: true },
  },
  { timestamps: true },
);

const Contacts = model('Contact', contact_Schema, 'contact');
export default Contacts;
