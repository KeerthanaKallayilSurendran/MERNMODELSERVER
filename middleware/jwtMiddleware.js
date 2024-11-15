const jwt = require('jsonwebtoken')

const jwtMiddlware = (req, res, next) => {

    console.log(req);
    console.log("Inside JwtMiddleware");
    
    const token = req.headers['authorization'].split(" ")[1]
    console.log(token);
    if (token) {
        try {
            const jwtResponse = jwt.verify(token, process.env.JWTPASSWORD)
            console.log(jwtResponse);
            req.userId = jwtResponse.userId
            console.log(req.userId);
            
            next()
        } catch (err) {
            res.status(401).json("Authorization failed... Please login.....")
        }
    } else {
        res.status(404).json("Authorization failed.... Token is missing")
    }
}

module.exports = jwtMiddlware