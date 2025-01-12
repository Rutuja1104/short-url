const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema(
  {
    shortId: {
      type: String,
      reuired: true,
      unique: true,
    },
    redirectURL: {
      type: String,
      reuired: true,
    },
    visitHistory: [
      {
        timeStamp: { type: Number },
      },
    ],
  },
  { timestamps: true }
);

const URL = mongoose.model('url',urlSchema);
module.exports = URL;
