import { Router } from "express";
import * as handler from "./requestHandler.js"
import multer from "multer";

const storage = multer.diskStorage({
    destination:"../images",
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})
const upload =multer({storage:storage});
const router=Router()

router.route('/add').post(upload.single('profile'),handler.adduser)

export default router;