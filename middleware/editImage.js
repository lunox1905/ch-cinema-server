const { cloudinary } = require('../utils/cloudinary');

const editImage = async(req, res, next) => {
    try {
        if(req.body.uploadImage) {
            const fileStr = req.body.uploadImage;
            const uploadResponse = await cloudinary.uploader.upload(fileStr, {
                upload_preset: 'dev_setups',
            });
            req.body.image = uploadResponse.url
            next()
        } else {
            next()
        }
        
    } catch (err) {
        console.error(err);
        res.status(500).json({ err: 'Something went wrong' });
    }   
}

module.exports = editImage