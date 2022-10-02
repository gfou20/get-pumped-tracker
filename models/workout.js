import mongoose from 'mongoose'

const Schema = mongoose.Schema

const workoutSchema = new Schema({
  name: String,
  pump: Boolean,
  client: { type: Schema.Types.ObjectId, ref: "Profile" }
}, {
  timestamps: true
})

const Workout = mongoose.model('Workout', workoutSchema)

export {
  Workout
}