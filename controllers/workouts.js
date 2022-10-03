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

function edit(req, res) {
  Workout.findById(req.params.id)
  .then(workout => {
    res.render('workouts/edit', {
      workout,
      title: "Edit Workout"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/workouts')
  })
}

function update(req, res) {
  Workout.findByIdAndUpdate(req.params.id, req.body, { new: true })
  .then(workout => {
    if (workout.client.equals(req.user.profile._id)){
      req.body.pump = !!req.body.pump
      workout.updateOne(req.body)
      .then(updatedWorkout => {
        res.redirect(`/workouts/${workout._id}`)
      })
    } else {
      throw new Error('NOT AUTHORIZED')
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect('/workouts')
  })
}

function deleteWorkout(req, res) {
  Workout.findById(req.params.id)
  .then(workout => {
    if (workout.client.equals(req.user.profile._id)){
      workout.delete()
      .then(deletedWorkout => {
        res.redirect(`/workouts`)
      })
    } else {
      throw new Error('NOT AUTHORIZED')
    }
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
  edit,
  update,
  deleteWorkout as delete
}