const router= require("express").Router();
const {registerUser,getAllUsers,getUserByUsername}=require("../controllers/user.controller");
const {authenticate}=require("../middleware/user.auth");
const {validateUser }=require("../middleware/user.validator");

router.get("/all",authenticate,getAllUsers);
router.post("/register",validateUser,registerUser);
router.get("/:username",getUserByUsername)


module.exports=router;