const express = require('express');
const {body} = require('express-validator');
const { validateRequest } = require('../middlewares/validateRequest');
const {signUpService, signInService} = require('../services/authService');
const {currentUser} = require('../middlewares/currentUser');

const router = express.Router();

router.post('/api/auth/signup',[
    body('userName')
    .notEmpty()
    .withMessage('userName is required'),
    body('password')
    .notEmpty()
    .withMessage('password is required'),
],validateRequest,async (req, res) => {
        console.log('server is on');
        
    const { userName, password} = req.body;
    const jwtUser = await signUpService (userName, password);
    res.status(201).json({
        userName,
        token: jwtUser
    });
})

router.post('/api/auth/signin',[
    body('userName')
    .notEmpty()
    .withMessage('userName is required'),
    body('password')
    .notEmpty()
    .withMessage('password is required'),
] , validateRequest, async (req, res) => {

    const { userName, password} = req.body;

    const jwtUser = await signInService(userName, password);
    res.status(200).send({
        userName,
        token: jwtUser,
    });
})

router.get(
    "/api/auth/currentUser",
    currentUser,
    // requireAuth,
    (req, res) => {
      res.send({ currentUser: req.currentUser || null });
    }
  );
  

module.exports = {authRouter: router};