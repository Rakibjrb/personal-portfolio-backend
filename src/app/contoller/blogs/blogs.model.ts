import { model, Schema } from 'mongoose';

const blog_Schema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    author: {
      name: { type: String, required: true },
      published_date: { type: String, required: true },
    },
    thumbnail_image: { type: String, required: true },
    like: { type: Number },
    comments: [
      {
        commenter: {
          name: { type: String },
          comment: { type: String },
          published_date: { type: String },
        },
      },
    ],
    type: { type: String },
  },
  { timestamps: true },
);

const Blogs = model('Blogs', blog_Schema, 'blogs');
export default Blogs;
