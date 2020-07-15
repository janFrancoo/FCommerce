const path = require('path');
const multer = require('multer');
const CustomError = require('../helpers/CustomError');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {        
        const rootDir = path.dirname(require.main.filename);
        cb(null, path.join(rootDir, "/public"));
    },
    filename: function(req, file, cb) {
        const extension = file.mimetype.split("/")[1];
        req.savedFile = "product_" + Date.now() + "." + extension;
        cb(null, req.savedFile);
    }
});

const fileFilter = (req, file, cb) => {
    let allowedMimeTypes = ["image/jpg", "image/gif", "image/jpeg", "image/png"];
    if (!allowedMimeTypes.includes(file.mimetype)) {
        return cb(new CustomError("Please, provide a valid image file", 400), false);
    }
    return cb(null, true);
};

const photoUpload = multer({
    storage,
    fileFilter
});

module.exports = photoUpload;
