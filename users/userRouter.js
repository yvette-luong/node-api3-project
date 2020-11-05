const express = require('express');
const usermodel = require('../users/userDb')
const router = express.Router();

router.post('/', (req, res) => {
  // do your magic!
  usermodel.insert(req.body)
  .then((user=>{
    res.status(201).json({user:user, notification: 'New User is successfully created!'})
  }))
  .catch((err) =>{
    res.status(500).json({errMessage: err.message, notification:'Error in user POST request'})
  })
});

router.post('/:id/posts', (req, res) => {
  // do your magic!

});

router.get('/', (req, res) => {
  // do your magic!
  usermodel.get(req.query)
  .then((users) =>{
    res.status(200).json({listofusers:users})
  })
  .catch((err) =>{
    res.status(500).json({errMessage: err.message, notification:'Error in user GET req'})
  })
});

router.get('/:id',validateUserId, (req, res) => {
  // do your magic!
  const id = req.params.id
  usermodel.getById(id)
  .then((user) =>{
   if (user) {
    res.status(200).json({userById : user})
   } else {
     res.status(400).json({errMessage: err.message, notification: 'User not found' })
   }
  })
  .catch((err) =>{
    res.status(500).json({notification:'Err in |user| GET req byID',errMessage: err.message})
  })
  
});

router.get('/:id/posts', (req, res) => {
  // do your magic!
});

router.delete('/:id', (req, res) => {
  // do your magic!
});

router.put('/:id', (req, res) => {
  // do your magic!
});

//custom middleware

function validateUserId(req, res, next) {
  // do your magic!
  if(req.params.id) {
    next()
  } else {
    res.status(404).json({ notification: "UserId is not validated", errMessage: err.message });   
  }
}

function validateUser(req, res, next) {
  // do your magic!
}

function validatePost(req, res, next) {
  // do your magic!
}

module.exports = router;
