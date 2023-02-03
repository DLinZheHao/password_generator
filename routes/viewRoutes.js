const express = require('express');
const router = express.Router();

const viewController = require('../controllers/viewController');

router
  .route('/')
  .get(viewController.show_index)
  .post(viewController.show_password);

module.exports = router;
