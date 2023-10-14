import express from 'express'
import { addProduct, getProducts, prDelete, getproduct, editProduct } from '../controllers/products.js'

const router = express.Router();
router.post("/", addProduct);
router.get("/", getProducts);
router.get("/:id", getproduct);
router.delete("/:id", prDelete);
router.put("/:id", editProduct);
export default router;