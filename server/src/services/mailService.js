const nodeMailer = require('nodemailer');

const getMails = async () => {
    try{
        // fetch data from DB
        const missions = [
            {
                email: 'nir.krumer@gmail.com',
                clicked: false
            },
            {
                email: 'nir.levi@gmail.com',
                clicked: true
            }
        ]
        return missions;
    }    
    catch(e){ console.log(e);
    }    
}

const sendMail = (email) => {
    const transporter = nodeMailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
        }
    });
    let PHISHING_URL = `http://localhost:4003/api/mails/reset?q=${email}`;
    let mailOptions = {
        from: 'cymulateTest@gmail.com',
        to: email,
        subject: 'Password Reset',
        html: `<p>Hey there! click <a href="${PHISHING_URL}">here</a> to reset your password</p>`
    };
    transporter.sendMail(mailOptions, function(err, data){
      if (err){
          throw new Error('error:', err)
      }  
    })
}

const updateMailInDB = (email) => {
// update email's status to DB
}

module.exports = {getMails, sendMail, updateMailInDB}