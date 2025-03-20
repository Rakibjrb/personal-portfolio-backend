import { model, Schema } from 'mongoose';

const link_schema = new Schema({
  name: { type: String, required: true },
  link: { type: String, required: true },
});

const Links = model('Links', link_schema, 'links');
export default Links;
