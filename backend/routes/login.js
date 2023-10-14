import express from 'express'
import { finduser } from '../controllers/login.js';



const router=express.Router();
router.post("/",finduser)

export default router;