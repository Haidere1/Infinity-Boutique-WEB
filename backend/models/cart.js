import mongoose from "mongoose";
const prcart=mongoose.Schema(
    {
        prName: String,
        prPrice:String,
        prDescription: String,
        prImage: String,
    }
);

const prcartmodel=mongoose.model('Cart',prcart);

export default prcartmodel;