const path = require('path')
const express = require('express')

//	Utils
const checkAuth = require('../utils/checkAuth.js')
const bodyParser = require('body-parser')

//	Routes
const router = express.Router()
const apiRoutes = require('./api')


router.use('/api', bodyParser(), apiRoutes);


router.use('/resources', express.static(path.join(
	__dirname, '..', '..', 'views', 'app')))

router.use('/', express.static(path.join(
	__dirname, '..', '..', 'views', 'app')))

// router.get('/', 
// 	checkAuth,
// 	(req, res) => {
// 		if (req.decoded)
// 			res.redirect('/home')
// 		else
// 			res.redirect('/login')
// 	}
// )

// router.use('/', express.static(path.join(
// 	__dirname, '..', '..', 'views', 'static')))
// router.get('/', express.static(path.join(
// 	__dirname, '..', '..', 'views', 'app')))


router.get('/*', (req, res) => {
	console.log('Unhandled resource: ' + req._parsedUrl.path);
	res.status(404).send()
})

module.exports = router