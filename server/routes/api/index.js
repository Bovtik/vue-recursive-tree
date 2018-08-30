const fs = require('fs')
const md5 = require('md5')
const jwt = require('jsonwebtoken')

//	Utils
const checkAuth = require('../../utils/checkAuth.js')
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')

//	db
const mongoose = require('mongoose')
const User = require('../../models/User.js')


const postersRoutes = require('./posters.js')
const apiRoutes = require('express').Router()


apiRoutes.use('/posters', postersRoutes);


apiRoutes.get('/checkAuth', cookieParser(), checkAuth, (req, res) => {
	if (req.decoded) {
		res.status(200).send(JSON.stringify({
			success: true
		}))
	} else {
		res.status(500).send(JSON.stringify({
			success: true
		}))
	}
})

apiRoutes.post('/login', (req, res) => {
	var app = req.app
	// let data = JSON.parse(req.body)
	let data = req.body;
	data.password = md5(data.password);
	User.findOne(data, (err, user) => {
		if (err) {
			res.status(500)
			res.render('error', { error: err })
			return;
		}	else if (user) {
			let token = jwt.sign(user.toJSON(), app.get('jwtsecret'), {
				expiresIn: "24h"	// expires in 24 hours
			})
			console.log('user: ', user, 'token: ', token);			
			res.status(200)
				.send(JSON.stringify({
					token: token,
					user: {
						username: user.username,
						id: user._id
					}
				}))
		} else {
			res.send(JSON.stringify({status: "User not found"}))
		}
	})
})

// apiRoutes.post('/register', (req, res) => {
// 	// let data = JSON.parse(req.body)
// 	let data = req.body;
// 	console.log(req.body);
// 	let regAllowed = true
// 	let conflicts = {
// 		username: false,
// 		email: false
// 	}
// 	let query = User.find()
// 	query.or([{username: data.username}, {email: data.email}])
// 		.exec()
// 		.then(users => users.forEach(user => {
// 			conflicts.username = (user.username == data.username)
// 			conflicts.email = (user.email == data.email)
// 		}))
// 		.then(() => {
// 			if (conflicts.username || conflicts.email) {
// 				res.status(202)
// 					.send(JSON.stringify({conflicts}))
// 			} else {
// 				data.password = md5(data.password)
// 				let newUser = new User(data)
// 				newUser.save((err, user) => {
// 					if (err) {
// 						res.status(500)
// 						res.render('error', { error: err })
// 						return;
// 					} else {
// 						res.status(200).send(JSON.stringify({ user }))
// 					}
// 				})
// 			}
// 		})
// })

module.exports = apiRoutes