import { Quote } from "../models/quote.js"

function newQuotes(req, res) {
  Quote.find({})
  .then(quotes => {
    res.render('quotes/new', {
      title: 'Pump Quotes',
      quotes: quotes
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/workouts')
  })
}

function create(req, res) {
  Quote.create(req.body)
  .then(quote => {
    res.redirect('/quotes/new')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/quotes/new')
  })
}

export {
  newQuotes as new,
  create,
}