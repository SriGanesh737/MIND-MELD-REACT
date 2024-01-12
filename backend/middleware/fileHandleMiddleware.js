const cloudinary = require('cloudinary').v2;
cloudinary.config({
  cloud_name: 'duq1jtzrg',
  api_key:'171726647687282',
  api_secret:'-7rDMp-9rEVATnw_ctzD1kH7Neo',
  secure: true
});

const handleImageUpload = (req, res, next) => {
    console.log(req.file);
    // convert this image into url by uploading it to cloudinary.
    cloudinary.uploader.upload(req.file.path, (err, result) => {
        if (err) {
            console.log(err);
            return res.json({success:false})
        }
        
        req.body.image_link = result.url;
        next();
    })
    
}

module.exports = {handleImageUpload}