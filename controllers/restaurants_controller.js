
//Dependencies
const express = require('express')
const restaurants = express.Router()
const Restaurant = require('../models/restaurant.js')

// Index:
restaurants.get('/', async (req, res) => {
  const foundRestaurants = await Restaurant.find().lean()
  res.render('restaurants/index', {
    restaurants: foundRestaurants,
    title: 'Index Page'
  })
})

// EDIT
restaurants.get('/:id/edit', (req, res) => {
  Restaurant.findById(req.params.id) 
      .then(foundRestaurant => { 
        res.render('resteraunts/edit', {
          Restaurant: foundRestaurant,
        })
  })
})

// SHOW
  restaurants.get('/:id', (req, res) => {
    Restaurant.findById(req.params.id)
        .then(foundRestaurant => {
            res.render('show', {
                restauraunt: foundRestaurant
            })
        })
        .catch (err => {
          res.render('page404 Unable to Show')
        })
})

// CREATE (updated for mongoose) - OK
restaurants.post('/', (req, res) => {
  console.log(req.body)
  if (!req.body.image) {
    req.body.image = undefined
  }
  Restaurant.create(req.body)
  res.redirect('/restaurants')
})

// DELETE
restaurants.delete('/:id', (req, res) => {
  Bread.findByIdAndDelete(req.params.id) 
    .then(deletedBread => { 
      res.status(303).redirect('/restaurants')
    })
})

// UPDATE
// restaurants.put('/:id', (req, res) => {
//   if(req.body.hasGluten === 'on'){
//     req.body.hasGluten = true
//   } else {
//     req.body.hasGluten = false
//   }
//   Bread.findByIdAndUpdate(req.params.id, req.body, { new: true }) 
//     .then(updatedBread => {
//       console.log(updatedBread) 
//       res.redirect(`/breads/${req.params.id}`) 
//     })
// })


module.exports = restaurants
// // dependencies
// const express = require("express");
// const router = express.Router();
// const db = require("../models/");

// // Index - Restaurants(db), restaurants()
// router.get('/', (req, res) => {
//   db.Restaurant.find()
//   .then((restaurants) => {
//     res.render('restaurants/index', { restaurants })
//   })

// })
//  //Add New Place
// router.post('/', (req, res) => {
//     db.Restaraunt.create(req.body)
//   .then( () => {
//     res.redirect('/restaurants')
//   })
//   .catch(err => {
//     if (err && err.name == "ValidationError"){
//       let message = "Validation Error: "
//       for (var field in err.errors) {
//         message += `${field} was ${err.errors[field].value}. `
//         message += `${err.errors[field].message}`
//       }
//       res.render('restaurants/new', {message})
//     }
//     else{
//       res.render('error404')
//     }
    
//   })
// })

// router.get('/new', (req, res) => {
//   res.render('restaurants/new')
// })

// // Show
// router.get('/:id', (req, res) => {
//   db.Restaraunt.findById(req.params.id)
//   .catch(err => {
//       console.log('err', err)
//       res.render('error404')
//   })
// })

// //EDIT ENTRY
// router.put('/:id', (req, res) => {
//   db.Place.findByIdAndUpdate(req.params.id, req.body)
//   .then(() => {
//       res.redirect(`/restaurants/${req.params.id}`)
//   })
//   .catch(err => {
//       console.log('err', err)
//       res.render('error404')
//   })
// })

// // DELETE
// router.delete('/:id', (req, res) => {
//   db.Place.findByIdAndDelete(req.params.id)
//   .then(restaurant => {
//       res.redirect('/restaurants')
//   })
//   .catch(err => {
//       console.log('err', err)
//       res.render('error404')
//   })
// })

// // EDIT
// router.get('/:id/edit', (req, res) => {
//   db.Restaurant.findById(req.params.id)
//   .then(restaurant => {
//       res.render('restaurants/edit', { restaurant })
//   })
//   .catch(err => {
//       res.render('error404')
//   })
// })

// module.exports = router