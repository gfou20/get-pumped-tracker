import mongoose from 'mongoose'

const Schema = mongoose.Schema

const workoutSchema = new Schema({
  name: String,
  date: Date,
  pump: Boolean
}, {
  timestamps: true
})

const Workout = mongoose.model('Workout', workoutSchema)

export {
  Workout
}