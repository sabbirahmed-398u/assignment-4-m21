import express from 'express'
import * as StudentController from '../controllers/studentcontroller.js';
import AuthMiddleware from '../middlewares/AuthMiddleware.js';
import { deleteFile, ReadFile, uploadFile } from '../controllers/UploadController.js';
const router = express.Router()


router.post('/register',StudentController.register)
router.post("/login",StudentController.login)
router.get("/readProfile", AuthMiddleware, StudentController.readProfile)
router.get("/updateProfile", AuthMiddleware, StudentController.updateProfile)

router.post('/upload', uploadFile)
router.get('/ReadFile/:filename', ReadFile)
router.post('/DeleteFile/:filename', deleteFile)
export default router;