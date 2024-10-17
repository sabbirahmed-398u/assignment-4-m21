import { deleteFileService, readFileService, UploadService } from  "../services/UploadService.js"


export const uploadFile = (req, res) => {
    UploadService(req, res, (err) => {
      if (err) {
        return res.status(400).json({ message: 'File upload failed', error: err.message });
      }
      res.status(200).json({ message: 'File uploaded successfully', file: req.file });
    });
};


// ReadFile
export const ReadFile = async (req, res) => {
    let result = await readFileService(req,res)
    return res.sendFile(result)
}



export const deleteFile = async (req, res) => {
    let result = await deleteFileService(req)
    return res.json(result)
}