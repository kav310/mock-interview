const mongoose = require("mongoose");
const { Schema } = mongoose;

const TeachersSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    noOfclasses: {
      type: Number,
      required: true,
    },
    classes: [
      {
        subject: {
          type: String,
        },
        section: {
          type: String,
        },
        grade: {
          type: String,
        },
      },
    ],
  },
  { versionKey: false }
);

module.exports = mongoose.model("Teachers", TeachersSchema);
