const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

// Home page
router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findAll();
    const users = userData.map((user) => user.get({ plain: true }));
    res.render('homepage', {
      users
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


// Login page
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    res.render('login');
});

// Login post
router.post('/login', async (req, res) => {
    try {
      const userData = await User.findOne({ where: { email: req.body.email } });
  
      if (!userData) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      const validPassword = await userData.checkPassword(req.body.password);
    
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
    
        // Create session variables based on the logged in user
        req.session.save(() => {
        req.session.userId = userData.id;
        req.session.loggedIn = true;
        req.session.viewPreference = userData.view_preference;
        
        res.json({ user: userData, message: 'You are now logged in!' });
      });
  
    } catch (err) {
      res.status(400).json(err);
    }
});

// Sign up
router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    res.render('signup');
});

// Account signup post
router.post('/signup', async (req, res) => {
  try {
    const userData = await User.create({
      email: req.body.email,
      password: req.body.password,
      view_preference: 'customer'
    });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Invalid email or password, please try again' });
      return;
    }
  
      // Create session variables for the newly create user
      req.session.save(() => {
      req.session.userId = userData.id;
      req.session.loggedIn = true;
      req.session.viewPreference = 'customer'
      
      res.redirect('/');
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;