const express = require('express');
const authMiddleware = require('../middleware/middleware');
const router = express.Router();

router.use(authMiddleware);

router.get('/tasks', (req, res) => {
  res.send({ ok: true })
})

module.exports = app => app.use('/get', router);