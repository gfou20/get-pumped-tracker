import { Quote } from "../models/quote.js"

function index(req, res) {
  Quote.find({})
  .then(quotes => {
    res.render('quotes/index', {
      title: 'Pump Quotes 🥹',
      quotes,
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/profiles')
  })
}

// function create(req, res) {
//   Quote.create(req.body)
//   .then(quote => {
//     res.redirect('/quotes/new')
//   })
//   .catch(err => {
//     console.log(err)
//     res.redirect('/quotes/new')
//   })
// }

export {
  index,
  // create,
}