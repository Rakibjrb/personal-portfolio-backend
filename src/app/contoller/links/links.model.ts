import { model, Schema } from 'mongoose';

const link_schema = new Schema({
  name: { type: String, require: true },
  link: { type: String, require: true },
});

const Links = model('Links', link_schema, 'links');
export default Links;
