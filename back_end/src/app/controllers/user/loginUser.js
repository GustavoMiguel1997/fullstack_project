const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();

const User = require('../../models/user');

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select('+password');

  if(!user) res.status(400).send({ error: 'user not found' });

  if(!await bcrypt.compare(password, user.password)){
    res.status(400).send({ error: 'invalid password' });
  }

  user.password = undefined;
  res.send({ user });
});

module.exports = app => app.use('/user', router);