const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({

  _id: ObjectId,

  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: true
  },

  time_created: {
    type: Date,
    default: Date.now
  },

  shifts:[{
    _id: ObjectId,
    company: {
      type: String,
      required: true
    },
    income: {
      type: Double,
      required: true
    },
    start_time: {
      type: Date,
      required: true
    },
    end_time: {
      type: Date,
      required: true
    },
    time_created: {
      type: Date,
      default: Date.now
    },
  }
  ],

  savingGoals:[{
    _id: ObjectId,
    title: {
      type: String,
      required: true
    },
    price: {
      type: Double,
      required: true
    },
    price_remaining:{
      type: Double,
      required: true
    },
    priority: {
      type: String,
      required: true
    },
    time_created: {
      type: Date,
      default: Date.now
    },
  }],

  achievedSavingGoals:[{
    _id: ObjectId,
    title: {
      type: String,
      required: true
    },
    price: {
      type: Double,
      required: true
    },
    price_remaining:{
      type: Double,
      required: true
    },
    priority: {
      type: String,
      required: true
    },
    time_created: {
      type: Date,
      default: Date.now
    }
  }],
});

module.exports = User = mongoose.model("users", UserSchema);
