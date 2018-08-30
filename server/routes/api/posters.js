const fs = require('fs')
const md5 = require('md5')
const jwt = require('jsonwebtoken')
const cors = require('cors')

//	db
const mongoose = require('mongoose')
const User = require('../../models/User.js')
const Poster = require('../../models/Poster.js')

//	Utils
const getCityById = require('../../utils/getCityById.js');
const checkAuth = require('../../utils/checkAuth.js')
const bodyParser = require('body-parser')

const postersRoutes = require('express').Router()

// postersRoutes.use(cors());
// postersRoutes.use('/checkPasskey', cors({ credentials: true, origin: true }));


//  Public Posters API methods (cors included)

postersRoutes.post('/checkPasskey', cors(), (req, res) => {
  let passkey = req.body.passkey;
  Poster.findOne({ passkey: passkey }, (err, poster) => {
    if (err) {
      console.log(err);
      res.status(500).send(JSON.stringify({ error: err }))
      return;
    } else {
      if (poster) {
        res.status(200).send(JSON.stringify({ poster }))
      } else {
        res.status(400).send(JSON.stringify({ error: "Poster with provided passkey not found" }))
      }
    }
  })
})

// postersRoutes.use('/getPostersByCity/', cors({ credentials: true, origin: true }));
postersRoutes.get('/getPostersByCityId/:cityId', cors(), (req, res) => {
  // let city = req.body.city;
  let cityId = parseInt(req.params.cityId);
  let city = getCityById(cityId);
  Poster.find({ city: city }, (err, posters) => {
    if (err) {
      console.log(err);
      res.status(500).send(JSON.stringify({ error: err }))
      return;
    } else {
      if (posters) {
        let posterArray = []
        posters.forEach((item) => {
          posterArray.push({
            cityId: cityId,
            city: item.city,
            title: item.title,
            description: item.desc,
            percent: item.percent,
            location: item.location,
            contacts: item.contacts,
          })
        })
        res.status(200).send(JSON.stringify({ posters: posterArray }))
      } else {
        res.status(404).send(JSON.stringify({ message: "No posters found within specified city" }))
      }
    }
  })
})

postersRoutes.post('/updatePosterPartial', cors(), (req, res) => {
  let requestData = req.body;
  const allowed = [
    'passkey', 'desc', 'percent', 'location'
  ];
  let data = {};
  for (let prop in requestData) {
    if (allowed.includes(prop)) {
      data[prop] = requestData[prop]
    }
  }
  Poster.findOneAndUpdate(
    { passkey: data.passkey },
    { $set: data },
    (err, poster) => {
      if (err) {
        console.log(err);
        res.status(500).send(JSON.stringify({ error: err }))
        return;
      } else {
        if (poster) {
          res.status(200).send(JSON.stringify({ poster }))
        } else {
          res.status(400).send(JSON.stringify({ error: "Poster with provided passkey not found" }))
        }
      }
    })
})


//  Secure Poster API methods (accessible only from admin panel)

postersRoutes.get('/getAllPosters', (req, res) => {
  Poster.find({}, (err, posters) => {
    if (err) {
      console.log(err);
      res.status(500).send(JSON.stringify({ error: err }))
      return;
    } else {
      if (posters) {
        res.status(200).send(JSON.stringify(posters))
      } else {
        res.status(404).send(JSON.stringify({ message: "No posters found within specified city" }))
      }
    }
  })
})

postersRoutes.post('/createPoster', (req, res) => {
  let data = req.body
  if (data.passkey === undefined ||
      data.city === undefined ||
      data.contacts === undefined ||
      data.percent === undefined) {
        res.status(400).send(JSON.stringify({ error: 'Not enought data specified, poster NOT created.' }))
        return false;
      }

  let posterData = {
    passkey: data.passkey,
    title: data.title || 'Sample title',
    desc: data.desc || 'Sample description',
    percent: data.percent,
    location: data.location || '-',
    city: data.city,
    contacts: data.contacts || [],
  }

  let newPoster = new Poster(posterData);
  newPoster.save((err, poster) => {
    if (err) {
      res.status(500).send(JSON.stringify({ error: err }));
      console.log(err);
      return false;
    } else if (poster) {
      res.status(200).send(JSON.stringify(poster));
    }
  })
})

postersRoutes.post('/updatePosterFull', (req, res) => {
  let data = req.body;
  Poster.findOneAndUpdate(
    { passkey: data.passkey },
    { $set: data },
    (err, poster) => {
      if (err) {
        console.log(err);
        res.status(500).send(JSON.stringify({ error: err }))
        return;
      } else {
        if (poster) {
          res.status(200).send(JSON.stringify({ poster }))
        } else {
          res.status(400).send(JSON.stringify({ error: "Poster with provided passkey not found" }))
        }
      }
    })
})

postersRoutes.post('/deletePoster', (req, res) => {
  let data = req.body;
  if (data.passkey) {
    Poster.findOneAndDelete({ passkey: data.passkey }, (err, poster) => {
      if (err) {
        res.status(500).send(JSON.stringify({ error: err }));
        console.log(err);
        return false;
      } else if (poster) {
        res.status(200).send(JSON.stringify({ success: true }));
      } else {
        res.status(403).send(JSON.stringify({ error: 'poster with specified passkey not found' }))
      }
    })
  } else {
    res.status(400).send(JSON.stringify({ error: 'passkey not specified' }))
  }
})

module.exports = postersRoutes