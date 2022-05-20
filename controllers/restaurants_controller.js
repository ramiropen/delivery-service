// dependencies
const express = require("express");
const router = express.Router();
const db = require("../models/");

// Index - Restaurants(db), restaurants()
router.get('/', (req, res) => {
  db.Restaurant.find()
  .then((restaurants) => {
    res.render('restaurants/index', { restaurants })
  })

})
 //Add New Place
router.post('/', (req, res) => {
    db.Place.create(req.body)
  .then( () => {
    res.redirect('/places')
  })
  .catch(err => {
    if (err && err.name == "ValidationError"){
      let message = "Validation Error: "
      for (var field in err.errors) {
        message += `${field} was ${err.errors[field].value}. `
        message += `${err.errors[field].message}`
      }
      res.render('places/new', {message})
    }
    else{
      res.render('error404')
    }
    
  })
})

router.get('/new', (req, res) => {
  res.render('restaurants/new')
})

// Show
router.get('/:id', (req, res) => {
  db.Restaraunt.findById(req.params.id)
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

//EDIT ENTRY
router.put('/:id', (req, res) => {
  db.Place.findByIdAndUpdate(req.params.id, req.body)
  .then(() => {
      res.redirect(`/restaurants/${req.params.id}`)
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})
// DELETE
router.delete('/:id', (req, res) => {
  db.Place.findByIdAndDelete(req.params.id)
  .then(restaurant => {
      res.redirect('/restaurants')
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})
// EDIT
router.get('/:id/edit', (req, res) => {
  db.Restaurant.findById(req.params.id)
  .then(restaurant => {
      res.render('restaurants/edit', { restaurant })
  })
  .catch(err => {
      res.render('error404')
  })
})

module.exports = router