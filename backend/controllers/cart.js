import prcartmodel from "../models/cart.js";


export const addProductCart = async (req, res) => {
 

    const prName = req.body.prName;
    const prNameInString = prName.toString();


    const price = req.body.prPrice;
    const priceInString = price.toString();

    const prDescription = req.body.prDescription;
    const prDescriptionInString = prDescription.toString();

    

    const prImage = req.body.prImage;
    const prUrlInString = prImage.toString();
    const newItem = new prcartmodel({
      
        prName: prNameInString,
        prPrice: priceInString,
        prDescription: prDescriptionInString,
        prImage: prUrlInString,

    });



    try {

        await newItem.save();
        res.json(newItem);

    } catch (error) {
        console.log("Product Not added")
    }
};


export const getCart = async (req, res) => {
    try {
        const prlist = await prcartmodel.find();
        res.json(prlist);

    } catch (error) {
        console.log("Couldnt Find Any Data")
    }
};

export const cartItemDelete =async (req,res)=>{

    try {
        const deletedproduct = await prcartmodel.findByIdAndDelete(req.params.id);
        console.log(deletedproduct);
        res.status(200).json({ message: "Product Deleted" });

    } catch (error) {


        console.log("delete failed")

    }


}