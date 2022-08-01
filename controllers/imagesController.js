const mongoose = require('mongoose');
const Image = require('../models/Image');
const jwt = require('jsonwebtoken');

const getAllImages = async (req, res) => {

    const accessToken = req.headers.authorization.split(' ')[1];

    jwt.verify(
        accessToken, 
        process.env.ACCESS_TOKEN_SECRET,
        async (err, decoded) => {
            try {
            const images = await Image.find({user: decoded.UserInfo._id});
            if(!images) return res.status(204).json({ 'message': "No Images found" });
            res.json(images);
            } catch(err){
                console.log(err)
            }
        }
    )
    /*
    const images = await Image.find();
    if (!images) return res.status(204).json({ 'message': 'No Images found' });
    res.json(images);
    */
}

const createImage = async (req,res) => {

    const accessToken = req.headers.authorization.split(' ')[1];

    jwt.verify(
        accessToken,
        process.env.ACCESS_TOKEN_SECRET,
        async (err, decoded) => {

            const { url, label } = req.body;
            if (!url || !label) return res.status(400).json({ 'message': 'Url and label are required.' });
        
            // the url can be the same and the picture can be different ie https://source.unsplash.com/random
            
            // The Image model had the url with unique:true  

            // check for duplicate images in the db
            // const duplicate = await Image.findOne({ url: url }).exec();
        
            // if (duplicate) return res.sendStatus(409); // status(409).json({message: "Image already saved"})
        
            try {
                const result = await Image.create({ 
                    "url": url,
                    "label": label,
                    "user": decoded.UserInfo._id
                });
        
                res.status(201).json({ 'success': `New image added!` });
            } catch (err) {
                res.status(500).json({ 'message': err.message });
            }
         
        }
    );
}

const deleteImage = async (req, res) => {
    // req.body.id or req.params.id

    if (!req?.body?.id) return res.status(400).json({ "message": 'Image ID required' });

    const image = await Image.findOne({ _id: req.body.id }).exec();
    if (!image) {
        return res.status(204).json({ 'message': `Image ID ${req.body.id} not found` });
    }
    const result = await Image.deleteOne({ _id: req.body.id });
    res.json(result);
}

const getImage = async (req, res) => {
    if (!req?.params?.id) return res.status(400).json({ "message": 'Image ID required' });
    const image = await Image.findOne({ _id: req.params.id }).exec();
    if (!image) {
        return res.status(204).json({ 'message': `Image ID ${req.params.id} not found` });
    }
    res.json(image);
}

module.exports = {
    getAllImages,
    createImage,
    deleteImage,
    getImage
}