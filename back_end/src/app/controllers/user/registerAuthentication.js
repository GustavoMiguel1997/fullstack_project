const express = require('express');
const User = require('../../models/user');
const router = express.Router();

router.post('/register', async (req, res) => {
  console.log('register post')
  try {
    const { email } = req.body;

    if(await User.findOne({ email })) res.status(400).send({ error: 'user already exists' });

    const user = await User.create(req.body);
    user.password = undefined;
    return res.send({ user });
    
  } catch (error) {
    res.status(400).send({ error: 'registrarion failed' });
  }
});

module.exports = app => app.use('/user', router);