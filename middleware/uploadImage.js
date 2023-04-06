const { cloudinary } = require('../utils/cloudinary');

const uploadImage = async(req, res, next) => {
    try {
        const fileStr = req.body.image;
        const uploadResponse = await cloudinary.uploader.upload(fileStr, {
            upload_preset: 'dev_setups',
        });
        req.body.image = uploadResponse.url
        next()
    } catch (err) {
        console.error(err);
        res.status(500).json({ err: 'Something went wrong' });
    }   
}

module.exports = uploadImage