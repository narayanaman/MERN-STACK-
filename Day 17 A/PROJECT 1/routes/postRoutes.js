const express=require("express");
const authMiddlleware=require("../middleware/authMiddleware");
const { getAllPost, getMyPost, getSinglePost, createPost, updatePost, deletePost } = require("../controllers/postControlller");
const router=express.Router();

router.get("/",getAllPost);
router.get("/single:id",getSinglePost);
router.get("/my-post",authMiddlleware,getMyPost);
router.post("/",authMiddlleware,createPost);
router.post("/update/:id",authMiddlleware,updatePost);
router.post("/delete/:id",authMiddlleware,deletePost);

module.exports=router;

