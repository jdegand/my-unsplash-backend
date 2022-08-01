const express = require('express');
const router = express.Router();
const imagesController = require('../controllers/imagesController');

router.route('/')
    .get(imagesController.getAllImages)
    .post(imagesController.createImage)
    .delete(imagesController.deleteImage);

router.route('/:id')
    .get(imagesController.getImage)

module.exports = router;