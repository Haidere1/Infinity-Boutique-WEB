import express from "express";
import { addUser, getUsers, deleteUser,getUser } from "../controllers/users.js";

const router=express.Router();

router.post("/",addUser);
router.get("/",getUsers);
router.get('/:name',getUser)
router.delete("/",deleteUser);
  

export default router;  