const dotenv = require("dotenv");
const express = require('express');
const cors = require('cors');
const {requireAuth} = require('../middlewares/requireAuth');
const { getMails, sendMail, updateMailInDB } = require('../services/mailService')

dotenv.config();
const router = express.Router();
router.use(cors());

// for client calls, to get saved emails for showing in the UI
router.get('/api/mails', cors(), 
// requireAuth,
async (req, res) => {
    try{
        const mails = await getMails()
        res.status(200).send(mails);
    }catch(err){
        res.status(400).send(err);
    }
})

// for sending mail to user with email input
router.post('/api/mails',
async (req, res) => {
    const {email} = req.body;
    if (!email){
        return res.status(400).send('email was not provided')
    }
    try{
        sendMail(email)
        res.status(200).send('mail was sent!')    
    }
    catch(err){
        res.status(400).send('error:', err)
    }
});

router.get('/api/mails/reset', async (req, res) => {
    const { q: emailToUpdate } = req.query
    console.log(`${emailToUpdate} was clicking the phishing mail`)
    try{
        await updateMailInDB(emailToUpdate);
    }
    catch(err){
        res.status(400).send(err)
    }
    res.send('Thank you :)');
})

module.exports = {mailRouter: router};