const requireAuth = (req, res , next) => {
    if(!req.headers.authorization) {
        res.status(401).send('Not Authenticated')
    }
    next();
}

module.exports = {requireAuth}