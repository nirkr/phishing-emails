const validateRequest = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        throw new Error(`request fields are not valid: ${errors.array()}`);
    }
    next();
}

module.exports = {validateRequest}