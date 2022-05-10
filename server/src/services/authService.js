const jwt = require('jsonwebtoken');
const { compare } = require('../services/password');
// import {User} from '../models/User';

const signUpService = async (userName, password) => {
    const user = User.build({
        userName, password
    });
    await user.save();
    
    const jwtUser = jwt.sign({
        id: user.id,
        userName,
    }, process.env.JWT_KEY)
    return jwtUser;

}
const signInService = async (userName, password) => {
console.log('process.env.JWT_KEY:', process.env.JWT_KEY);
const user = await User.findOne({userName});
    if (!user){
        throw new Error('invalid credentials');
    }
    const isAuthenticated = await compare(user.password,password);
    if(!isAuthenticated){
        throw new Error('not authenticated')
    }
    const jwtUser = jwt.sign({
        id: user.id,
        userName
    },process.env.JWT_KEY);
    return jwtUser;
}


module.exports = {signInService, signUpService}