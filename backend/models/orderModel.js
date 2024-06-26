const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  shippingInfo: {
    address: {
      type: String,
      //required: true,
    },
    email : {
      type: String,
      //required: true,
    },
    city: {
      type: String,
      //required: true,
    },
    fullName: {
      type: String,
      //required: true,
    },
  
    phoneNumber: {
      type: String,
      //required: true,
    },
    others: {
      type: String,
     // required: true,
    },
  },
  orderItems: [
    {
      name: {
        type: String,
       // required: true,
      },
      price: {
        type: Number,
        //required: true,
      },
      color:{
        type:String,
      },
      size:{
       type:String 
      },
      quantity: {
        type: Number,
        //required: true,
      },
      image: {
        type: String,
        //required: true,
      },
    
    },
  ],
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    //required: true,
  },
  paymentInfo: {
    status: {
      type: String,
     // required: true,
    },
  },
  paidAt: {
    type: Date,
    default: Date.now(),
  },
  itemPrice: {
    type: Number,
    //required: true,
  },
  shippingPrice: {
    type: Number,
    //required: true,
  },
  totalPrice: {
    type: Number,
    //required: true,
  },
  orderStatus: {
    type: String,
    default: "Processing",
    //required: true,
  },
  deleveredAt: {
    type:Date,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("order", orderSchema);