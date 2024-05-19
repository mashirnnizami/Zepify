import mongoose from "mongoose";

const foodSchema=mongoose.Schema({
    name:String,
    price:Number,
    category:String,
    image:String,
    like:String,
    quantity:String
})

const Food = mongoose.model("Food",foodSchema);

export default Food;