import express from 'express'
import { addProductCart,cartItemDelete,getCart } from '../controllers/cart.js';



const router=express.Router();
router.post("/",addProductCart)
router.get("/",getCart)
router.delete("/:id",cartItemDelete)

export default router;