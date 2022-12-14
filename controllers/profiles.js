import { Profile } from '../models/profile.js'

function index(req, res) {
  Profile.find({})
  .then(profiles => {
    res.render("profiles/index", {
      profiles,
      title: "Workout Profiles"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function show(req, res) {
  Profile.findById(req.params.id)
  .then(profile => {
    const isSelf = profile._id.equals(req.user.profile._id)
    res.render('profiles/show', {
      title: `${profile.name}'s profile`,
      isSelf,
      profile,
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/profiles')
  })
}

function setGoal(req, res) {
  Profile.findById(req.user.profile._id)
  .then(profile => {
    profile.goals.push(req.body)
    profile.save()
    .then(() => {
      res.redirect(`/profiles/${req.user.profile._id}`)
    })
    .catch(err => {
      console.log(err)
      res.redirect(`/profiles/${req.user.profile._id}`)
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/profiles/${req.user.profile._id}`)
  })
}

function deleteGoal(req, res) {
  Profile.findById(req.user.profile._id)
  .then(profile => {
    profile.goals.remove({_id: req.params.id})
    profile.save()
    .then(() => {
      res.redirect(`/profiles/${req.user.profile._id}`)
    })
    .catch(err => {
      console.log(err)
      res.redirect(`/profiles/${req.user.profile._id}`)
    })
  })
}

export {
  index,
  show,
  setGoal,
  deleteGoal
}