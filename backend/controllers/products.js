
import prmodel from "../models/product.js";

export const addProduct = async (req, res) => {
    const prdID = req.body.prID;
    const prIDToString = prdID.toString();

    const prName = req.body.prName;
    const prNameInString = prName.toString();


    const price = req.body.prPrice;
    const priceInString = price.toString();

    const prDescription = req.body.prDescription;
    const prDescriptionInString = prDescription.toString();

    console.log(req.body.prID);

    const prImage = req.body.prImage;
    const prUrlInString = prImage.toString();
    const newProductm = new prmodel({
        prID: prIDToString,
        prName: prNameInString,
        prPrice: priceInString,
        prDescription: prDescriptionInString,
        prImage: prUrlInString,

    });



    try {

        await newProductm.save();
        res.json(newProductm);

    } catch (error) {
        console.log("Product Not added")
    }

};


export const getProducts = async (req, res) => {
    try {
        const prlist = await prmodel.find();
        res.json(prlist);

    } catch (error) {
        console.log("Couldnt Find Any Data")
    }
};

export const prDelete = async (req, res,) => {
    try {
        const deletedproduct = await prmodel.findByIdAndDelete(req.params.id);
        console.log(deletedproduct);
        res.status(200).json({ message: "Product Deleted" });

    } catch (error) {


        console.log("delete failed")

    }

}

export const getproduct = async (req, res) => {
    try {
        const pr = await prmodel.findById(req.params.id);
        res.json(pr);

    } catch (error) {
        console.log("Couldnt Find Any Data")
    }

}

export const editProduct = async (req, res) => {
    let product = req.body;

    const prdID = req.body.prID;
    const prIDToString = prdID.toString();

    const prName = req.body.prName;
    const prNameInString = prName.toString();


    const price = req.body.prPrice;
    const priceInString = price.toString();

    const prDescription = req.body.prDescription;
    const prDescriptionInString = prDescription.toString();

    console.log(req.body.prID);

    const prImage = req.body.prImage;
    const prUrlInString = prImage.toString();

    try{
   
        const updated = await prmodel.updateOne({ _id: req.params.id }, {
            prID: prIDToString,
            prName: prNameInString,
            prPrice: priceInString,
            prDescription: prDescriptionInString,
            prImage: prUrlInString,
        });
        console.log(updated);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}