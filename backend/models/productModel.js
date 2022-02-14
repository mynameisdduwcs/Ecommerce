const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    require: [true, "Vui lòng nhập tên sản phẩm"],
    trim: true,
  },
  description: {
    type: String,
    require: [true, "Vui lòng nhập mô tả"],
  },
  price: {
    type: Number,
    require: [true, "Vui lòng nhập giá sản phẩm"],
    maxLength: [8, "Không được quá 8 ksi tự"],
  },
  ratings: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        require: true,
      },
      url: {
        type: String,
        require: true,
      },
    },
  ],
  category: {
    type: String,
    require: [true, "Vui lòng nhập danh mục sản phẩm"],
  },
  Stock: {
    type: Number,
    require: [true, "Please Enter product Stock"],
    maxLength: [4, "Stock cannot exceed 4 charecters"],
    default: 1,
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
      name: {
        type: String,
        require: true,
      },
      rating: {
        type: Number,
        require: true,
      },
      comments: {
        type: String,
        require: true,
      },
    },
  ],

  user:{
      type:mongoose.Schema.ObjectId,
      ref:"User",
      required:true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", productSchema);
