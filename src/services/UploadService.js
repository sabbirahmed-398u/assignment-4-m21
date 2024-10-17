import multer from "multer";
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);


const storage = multer.diskStorage({
    destination: './uploads/',
    filename: (req, file, cb) => {
        const name = Date.now() + '-' + file.originalname
        cb(null, name);
    }
  });

export const UploadService = multer({ storage: storage }).single('file');

//read file
export const readFileService = async (req, res) => {
    try {
      const filePath = path.join(_dirname, '../../uploads/', req.params.filename)
      return   filePath 
      
    } catch (error) {
      return res.status(500).json({ message: 'Failed to read file', error: error.message });
    }
  };

// Delete file
export const deleteFileService = async (req) => {
    try {
      const filePath = path.join(_dirname, '../../uploads', req.params.filename);
      await fs.unlink(filePath); 
      return {status: "success"}
    } 
    catch (error) {
      return { message: 'Failed to delete file', error: error.message }
    }
};