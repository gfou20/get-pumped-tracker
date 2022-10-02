import { Workout } from '../models/workout.js'

function newWorkout(req, res) {
  res.render('workouts/new', {
    title: 'Add your Workout!'
  })
}

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
export {
  index,
  newWorkout as new,
}