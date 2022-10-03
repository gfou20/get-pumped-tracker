import { Workout } from '../models/workout.js'

function index(req, res) {
  Workout.find({})
  .then(workouts => {
    res.render('workouts/index', {
      workouts,
      title: 'Workouts 💪'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function create(req, res) {
  req.body.client = req.user.profile._id
  req.body.pump = !!req.body.pump
  console.log(req.body)
  Workout.create(req.body)
  .then(workouts => {
    res.redirect('/workouts', {
      workouts
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/workouts')
  })
}

function show(req, res) {
  Workout.findById(req.params.id)
  .populate('client')
  .then(workout => {
    console.log(workout);
    res.render('workouts/show', {
      workout,
      title: "Workout show"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/workouts')
  })
}

function flipPump(req, res) {
  Workout.findById(req.params.id)
  .then(workout => {
    workout.pump = !workout.pump
    workout.save()
    .then(() => {
      res.redirect(`/workouts/${req.params.id}`)
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/workouts')
  })
}

export {
  index,
  create,
  show,
  flipPump
}