const jwt = require('jsonwebtoken')

const checkAuth = (req, res, next) => {
	const token = req.cookies.token;
	if (token) {
		jwt.verify(token, req.app.get('jwtsecret'), function(err, decoded) {      
			if (err) {
				return res.status(401)
					.send(JSON.stringify({
						success: false,
						message: 'Failed to authenticate token.',
						err: err
					}))
			} else {
				// if everything is good, save to request for use in other routes
				req.decoded = decoded;    
				next();
			}
		})
	} else {
		
		// if there is no token
		// return an error
		return res.status(403).send(JSON.stringify({ 
			success: false, 
			message: 'No token provided.' 
		}))
	}
}

module.exports = checkAuth