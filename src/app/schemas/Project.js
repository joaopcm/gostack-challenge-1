import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    tasks: Array,
  },
  { timestamps: true }
);

export default mongoose.model('Project', ProjectSchema);
