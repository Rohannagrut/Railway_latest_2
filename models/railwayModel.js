const mongoose = require("mongoose");
const railwaySchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },
    firstName: {
      type: String,
      required: [true, "first name is required"],
    },
    lastName: {
      type: String,
      required: [true, "last name is required"],
    },
    phone: {
      type: String,
      required: [true, "phone no is required"],
    },
    age: {
      type: String,
      required: [true, "age is required"],
    },
    birth: {
      type: String,
      required: [true, "birth is required"],
    },
    registration: {
      type: String,
      required: [true, "registration no is required"],
    },
    sex: {
      type: String,
      required: [true, "sex is required"],
    },
    from: {
      type: String,
      required: [true, "from is required"],
    },
    to: {
      type: String,
      required: [true, "to is required"],
    },
    caste: {
      type: String,
      required: [true, "caste is required"],
    },
    address: {
      type: String,
      required: [true, "address is required"],
    },
    seasonticketNo: {
      type: String,
      required: [true, "Season ticket no is required"],
    },
    reason: {
      type: String,
      required: [true, "reason is required"],
    },
    status: {
      type: String,
      default: "pending",
    },
    timings: {
      type: Object,
      required: [true, "work timing is required"],
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const railwayModel = mongoose.model("railways", railwaySchema);
module.exports = railwayModel;
