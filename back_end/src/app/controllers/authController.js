const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const authConfig = require('../../config/auth.json');
const router = express.Router();

const User = require('../models/user');   

function generateToken(params = {}){
  return jwt.sign(params, authConfig.secret, {
    expiresIn: 86400
  })
}

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select('+password');

  if(!user) res.status(400).send({ error: 'user not found' });

  if(!await bcrypt.compare(password, user.password)){
    res.status(400).send({ error: 'invalid password' });
  } 

  user.password = undefined;
  return res.send({ 
    user, 
    token: generateToken({ id: user.id })
  });
});

router.post('/register', async (req, res) => {
  try {
    const { email } = req.body;

    if(await User.findOne({ email })) res.status(400).send({ error: 'user already exists' });

    const user = await User.create(req.body);
    user.password = undefined;
    return res.send({ 
      user, 
      token: generateToken({ id: user.id })
    });
    
  } catch (error) {
    res.status(400).send({ error: 'registrarion failed' });
  }
});

router.post('/forgot_password', async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });

    if(!user)
      return res.status(400).send({ error: 'User not found' });

    const token = crypto.randomBytes(20).toString('hex');

    const now = new Date();
    now.setHours(now.getHours() + 1);

    await User.findByIdAndUpdate(user.id, { useFindAndModify: true }, {
      '$set': {
        passwordResetToken: token,
        passwordResetExpires: now,
      }
    });

  } catch (error) {
    res.status(400).send({ error: 'Error on forgot password, try again' })
  }
});

module.exports = app => app.use('/user', router);